================
Règles de réorganisation
================

.. ... _inventaire/gestion/règles_de_ordonnancement :
.. |SO| replace: : :abbr:`SO (commande client)`
.. ... |PO| replace: : :abbr:`PO (commande d'achat)`

*Les règles de réapprovisionnement sont utilisées pour maintenir les niveaux de stock prévus au-dessus d'un certain seuil sans dépasser une limite supérieure spécifiée.
sans dépasser une limite supérieure spécifiée. Pour ce faire, on spécifie une quantité minimale que le stock ne doit pas dépasser et une quantité maximale que le stock ne doit pas dépasser.
ne doit pas être inférieure et une quantité maximale que le stock ne doit pas dépasser.

Les règles de réapprovisionnement peuvent être configurées pour chaque produit en fonction de l'itinéraire utilisé pour le réapprovisionner. Si un produit
produit utilise l'itinéraire *Achat*, une demande de devis (RFQ) est créée lorsque la règle de réapprovisionnement est déclenchée.
est déclenchée. Si un produit utilise l'itinéraire *Fabrication*, un ordre de fabrication (OM) est créé à la place.
est créé. Il en est ainsi quel que soit l'itinéraire de réapprovisionnement sélectionné.

... voir aussi: :
   - `Odoo Tutorials : Règles de réordonnancement automatique <https://www.youtube.com/watch?v=XEJZrCjoXaU>`_
   - `Tutoriels Odoo : Règles de réapprovisionnement manuel <https://www.youtube.com/watch?v=deIREJ1FFj4>`_

Configurer les produits pour les règles de réorganisation
=======================================

Afin d'utiliser les règles de réorganisation pour un produit, celui-ci doit d'abord être correctement configuré. Commencez par
en naviguant vers :menuselection:`Inventory app --> Products --> Products`, puis en sélectionnant un produit existant ou en créant un nouveau produit en le sélectionnant.
produit existant ou créez-en un nouveau en cliquant sur :guilabel:`New`.

Sur la fiche produit, sous l'onglet :guilabel:`Informations générales`, assurez-vous que les champs
:guilabel:`Suivre l'inventaire` est cochée. Ceci

Traduit avec DeepL.com (version gratuite)
