import datetime
from typing import Sequence

from docutils.parsers.rst import directives
from docutils.parsers.rst.states import RSTState
from sphinx.domains.python import PyAttribute, PyClasslike
from sphinx.ext.autodoc import AttributeDocumenter, ClassDocumenter

import odoo

nested_parse = RSTState.nested_parse
def patched_nested_parse(self, block, input_offset, node, match_titles=False,
    state_machine_class=None, state_machine_kwargs=None):
    match_titles = True
    return nested_parse(self, block, input_offset, node, match_titles, state_machine_class, state_machine_kwargs)
RSTState.nested_parse = patched_nested_parse


class OdooClassDocumenter(ClassDocumenter):
    objtype = 'model'
    priority = 10 + ClassDocumenter.priority
    option_spec = {**ClassDocumenter.option_spec, 'main': directives.flag}

    @classmethod
    def can_document_member(cls, member, membername, isattr, parent):
        return isinstance(member, odoo.models.MetaModel)

    def add_content(self, more_content):
        sourcename = self.get_sourcename()
        cls = self.object
        if 'main' in self.options:
            self.add_line(f".. _model-{cls._name.replace('.', '-')}:", sourcename)
            self.add_line('.. py:attribute:: _name', sourcename)
            self.add_line(f'  :value: {cls._name}', sourcename)
            self.add_line('' , sourcename)
        super().add_content(more_content)

    def add_directive_header(self, sig: str) -> None:
        """Add the directive header and options to the generated content."""
        sourcename = self.get_sourcename()
        module = self.modname.split('addons.')[1].split('.')[0]
        if 'main' in self.options:
            title = f"Original definition from `{module}`"
        else:
            title = f"Additional fields with `{module}`"

        self.add_line(title, sourcename)
        self.add_line('=' * len(title), sourcename)
        self.add_line('', sourcename)
        return super().add_directive_header(sig)


class FieldDocumenter(AttributeDocumenter):
    objtype = 'field'
    priority = 10 + AttributeDocumenter.priority

    @classmethod
    def can_document_member(cls, member, membername, isattr, parent):
        return isinstance(member, odoo.fields.Field)

    def update_annotations(self, parent):
        super().update_annotations(parent)
        annotation = parent.__annotations__
        attrname = self.object.name
        annotation[attrname] = dict
        field = self.object
        if field.type == 'many2one':
            annotation[attrname] = int
        elif field.type in ('one2many', 'many2many'):
            annotation[attrname] = Sequence[odoo.fields.Command]
        elif field.type in ('selection', 'reference', 'char', 'text', 'html'):
            annotation[attrname] = str
        elif field.type == 'boolean':
            annotation[attrname] = bool
        elif field.type in ('float', 'monetary'):
            annotation[attrname] = float
        elif field.type == 'integer':
            annotation[attrname] = int
        elif field.type == 'date':
            annotation[attrname] = datetime.date
        elif field.type == 'datetime':
            annotation[attrname] = datetime.datetime

    def add_content(self, more_content):
        source_name = self.get_sourcename()
        field = self.object
        if field.required:
            self.add_line(f":required:", source_name)
        self.add_line(f":name: {field.string}", source_name)
        if field.readonly:
            self.add_line(f":readonly: this field is not supposed to/cannot be set manually", source_name)
        if not field.store:
            self.add_line(f":store: this field is there only for technical reasons", source_name)
        if field.type == 'selection':
            if isinstance(field.selection, (list, tuple)):
                self.add_line(f":selection:", source_name)
                for tech, nice in field.selection:
                    self.add_line(f"  ``{tech}``: {nice}", source_name)
        if field.type in ('many2one', 'one2many', 'many2many'):
            comodel_name = field.comodel_name
            string = f":comodel: :ref:`{comodel_name} <model-{comodel_name.replace('.', '-')}>`"
            self.add_line(string, source_name)
            reference = self.config.model_references.get(comodel_name)
            if reference:
                self.add_line(f":possible_values: `{reference} <{self.config.source_read_replace_vals['GITHUB_PATH']}/{reference}>`__", source_name)
        if field.default:
            self.add_line(f":default: {field.default(odoo.models.Model)}", source_name)

        super().add_content(more_content)
        if field.help:
            self.add_line('', source_name)
            for line in field.help.strip().split('\n'):
                self.add_line(line, source_name)
        self.add_line('', source_name)

    def get_doc(self, *args, **kwargs):
        # only read docstring of field instance, do not fallback on field class
        field = self.object
        field.__doc__ = field.__dict__.get('__doc__', "")
        res = super().get_doc(*args, **kwargs)
        return res


def disable_warn_missing_reference(app, domain, node):
    if not ((domain and domain.name != 'std') or node['reftype'] != 'ref'):
        target = node['reftarget']
        if target.startswith('model-'):
            node['reftype'] = 'odoo_missing_ref'
            return True


def setup(app):
    app.add_config_value('model_references', {}, 'env')
    directives.register_directive('py:model', PyClasslike)
    directives.register_directive('py:field', PyAttribute)
    app.add_autodocumenter(FieldDocumenter)
    app.add_autodocumenter(OdooClassDocumenter)
    app.connect('warn-missing-reference', disable_warn_missing_reference, priority=400)

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
