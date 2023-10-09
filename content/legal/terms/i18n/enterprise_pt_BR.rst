.. _enterprise_agreement_pt:

===========================================
Odoo Enterprise Subscription Agreement (PT)
===========================================

.. only:: html

    `Download PDF <https://www.odoo.com/documentation/{CURRENT_BRANCH}/odoo_enterprise_agreement_pt_BR.pdf>`_
.. warning::
    Esta é uma tradução em português do Contrato “Odoo Enterprise Subscription Agreement”.
    A tradução é fornecida com o intuito de facilitar a sua compreensão, mas não tem
    valor legal. A única referência oficial aos termos do Contrato “Odoo Enterprise Subscription Agreement”
    é a :ref:`versão original em inglês <enterprise_agreement>`.

.. note:: Versão 10a - 2022-10-27

.. v6: add "App" definition + update pricing per-App
.. v7: remove possibility of price change at renewal after prior notice
.. 7.1: specify that 7% renewal increase applies to all charges, not just per-User.
.. v8.0: adapt for "Self-Hosting" + "Data Protection" for GDPR
.. v8a: minor wording changes, tuned User definition, + copyright guarantee
.. v9.0: add "Working with an Odoo Partner" + Maintenance of [Covered] Extra Modules + simplifications
.. v9a: clarification wrt second-level assistance for standard features
.. v9b: clarification that maintenance is opt-out + name of `cloc` command (+ paragraph 5.1 was partially outdated in FR)
.. v9c: minor wording changes, tuned User definition, + copyright guarantee (re-application of v8a changes
        on all branches)
.. v9c2: minor simplification in FR wording
.. v10: fall 2022 pricing change - removal of "per app" notions
.. v10.001FR: typo: removed 1 leftover 16€/10LoC price
.. v10a: clarified wording for Section 5.1 "(at that time)"

Ao assinar os serviços do Odoo Enterprise (os "Serviços") fornecidos pela Odoo SA e suas
afiliadas (coletivamente, "Odoo SA") em relação ao Odoo Enterprise Edition ou Odoo
Community Edition (o "Logiciel"), hospedado nas plataformas de nuvem da Odoo SA ("Cloud
Platform") ou no local ("Hospedagem Própria"), você (o "Cliente") concorda em estar
vinculado aos seguintes termos e condições (o "Contrato").

.. _term_pt:

1 Vigência do Contrato
======================

A duração deste Contrato (a "Vigência") será especificada por escrito no ato da celebração
deste Contrato, começando a partir da data de assinatura. O Contrato é automaticamente
renovado por uma Vigência igual, a menos que qualquer uma das partes forneça um aviso por
escrito de rescisão para a outra parte, no mínimo 30 dias antes do final da Vigência.

.. _definitions_pt:

2 Definições
============

Usuário
    Qualquer conta de usuário indicada como ativa no Software, com acesso ao modo de criação e/ou edição.
    Contas de usuário desativadas e contas usadas por pessoas externas (ou sistemas)
    que têm apenas acesso limitado ao Software por meio das instalações do portal (conhecidas como
    "Usuários do Portal") não são consideradas como Usuários.

App
    Um "Aplicativo" (App) é um grupo especializado de recursos disponíveis para instalação no Software.

Parceiro Odoo
    Um Parceiro Odoo é uma empresa ou indivíduo terceirizado, escolhido pelo Cliente e que
    trabalha com o Cliente para seus serviços relacionados ao Odoo. O Cliente pode decidir a
    qualquer momento trabalhar com um Parceiro Odoo diferente ou trabalhar diretamente com a
    Odoo SA (sujeito a aviso prévio).

Módulo Extra
    Um Módulo Extra é um diretório de arquivos de código-fonte ou um conjunto de
    customizações baseadas em Python, criadas em uma base de dados (por exemplo, com o Odoo
    Studio), que adiciona recursos ou altera o comportamento padrão do Software. Pode ter sido
    desenvolvido pelo Cliente, pela Odoo SA, por um Parceiro Odoo em nome do Cliente ou por
    terceiros.

Módulo Extra Coberto
    Um Módulo Extra Coberto é um Módulo Extra pelo qual o Cliente escolhe pagar uma taxa de
    manutenção para obter serviços de suporte, atualização e correção de bugs.

Bug
    É considerado Bug qualquer falha do Software ou de um Módulo Extra Coberto que resulte em
    uma parada completa, rastreamento de erro ou violação de segurança e não seja causada
    diretamente por uma instalação ou configuração defeituosa. A não conformidade com
    especificações ou requisitos será considerada como Bug, a critério da Odoo SA (normalmente,
    quando o Software não produz os resultados ou desempenho para o qual foi projetado ou
    quando um recurso específico do país não atende mais aos requisitos legais de contabilidade).

Versões Cobertas
    A menos que seja especificado, os Serviços fornecidos sob este Contrato são aplicáveis apenas
    às Versões Cobertas do Software, que incluem as 3 versões principais lançadas mais
    recentemente.

Plano de Assinatura
    Um Plano de Assinatura define um conjunto de Aplicativos, recursos e soluções de
    hospedagem cobertos por este Contrato e é definido por escrito na celebração deste Contrato.

.. _enterprise_access_pt:

3 Acesso ao Software
====================

O Cliente pode utilizar o Software hospedado na Cloud Platform, ou escolher a opção de
Hospedagem Própria. A Cloud Platform é hospedada e totalmente gerenciada pela Odoo SA e
acessada remotamente pelo Cliente. Com a opção de Hospedagem Própria, o Cliente hospeda
o Software em sistemas de computador de sua escolha, que não estão sob o controle da Odoo SA.

Durante a vigência deste Contrato, a Odoo SA concede ao Cliente uma licença não exclusiva e
intransferível para usar (executar, modificar, executar após modificação) o software Odoo
Enterprise Edition, nos termos estabelecidos em :ref:`appendix_a_pt`.

O Cliente concorda em tomar todas as medidas necessárias para garantir a execução inalterada
da parte do Software que verifica a validade de uso do Odoo Enterprise Edition e coleta
estatísticas para esse fim, incluindo, entre outros, a execução de uma instância, o número de
Usuários, os Aplicativos instalados e o número de linhas de código dos Módulos Extras Cobertos.

A Odoo SA compromete-se a não divulgar figuras individuais ou nomeadas a terceiros sem o
consentimento do Cliente, e a tratar todos os dados recolhidos em conformidade com a sua
Política de Privacidade oficial, publicada em https://www.odoo.com/privacy.

Após a expiração ou rescisão deste Contrato, esta licença é revogada imediatamente e o Cliente
concorda em parar de usar o software Odoo Enterprise Edition e a Cloud Platform.

Se o Cliente violar os termos desta seção, o Cliente concorda em pagar à Odoo SA uma taxa
extra igual a 300% do preço de tabela aplicável ao número real de Usuários.

.. _services_pt:

4 Serviços
==========

.. _bugfix_pt:

4.1 Serviço de Correção de Bugs
-------------------------------

Durante a vigência deste Contrato, a Odoo SA se compromete a realizar todos os esforços
razoáveis para corrigir qualquer Bug do Software e Módulos Extras Cobertos relatados pelo
Cliente por meio de um canal apropriado (normalmente, o formulário da Web ou os números
de telefone listados em http://www.odoo.com/help, ou, ao trabalhar com um parceiro Odoo, o canal
fornecido pelo parceiro) e começar a lidar com essas solicitações do Cliente em 2 dias úteis.

Assim que o Bug for corrigido, uma solução apropriada será comunicada ao Cliente. Se o
Cliente estiver usando uma Versão Coberta, ele não será solicitado a atualizar para uma Versão
Coberta mais recente do Software como solução para um Bug.

Quando um Bug é corrigido em qualquer Versão Coberta, a Odoo SA se compromete a corrigir
o Bug em todas as Versões Cobertas mais recentes do Software.

Ambas as partes reconhecem que, conforme especificado na licença do Software e na seção
:ref:`liability_pt` deste Contrato, a Odoo SA não pode ser responsabilizada por Bugs
no Software ou nos Módulos Extras Cobertos.

4.2 Serviço de Atualizações de Segurança
----------------------------------------

.. _secu_self_hosting_pt:

Hospedagem Própria
~~~~~~~~~~~~~~~~~~

Durante a vigência deste Contrato, a Odoo SA se compromete a enviar um “Aviso de
Segurança” ao Cliente para qualquer Bug de segurança descoberto nas Versões Cobertas do
Software (isso exclui Módulos Extras), pelo menos 2 semanas antes de publicar o Comunicado
de Segurança, a menos que o Bug já tenha sido divulgado publicamente por terceiros. Os
Comunicados de Segurança incluem uma descrição completa do Bug, sua causa, seus possíveis
impactos nos sistemas do Cliente e a solução correspondente para cada Versão Coberta.

O Cliente entende que o Bug e as informações do Comunicado de Segurança devem ser
tratados como Informações Confidenciais conforme descrito em
:ref:`confidentiality_pt` durante o período de embargo que precede a divulgação pública.

.. _secu_cloud_platform_pt:

Cloud Platform
~~~~~~~~~~~~~~

A Odoo SA se compromete a aplicar os reparos de segurança para qualquer Bug de segurança
descoberto em uma versão do Software hospedada na Cloud Platform, em todos os sistemas
sob seu controle, assim que o reparo estiver disponível, sem exigir nenhuma ação manual do Cliente.


.. _upgrade_pt:

4.3 Serviços de Atualização
---------------------------

.. _upgrade_odoo_pt:

Serviço de Atualização para o Software
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Durante a vigência deste Contrato, o Cliente pode enviar solicitações de atualização por meio
do canal apropriado (geralmente, o site do serviço de atualização da Odoo SA), a fim de
converter uma base de dados do Software de qualquer versão do Software para uma Versão
Coberta mais recente (a "Versão de Destino").

Para a Cloud Platform, as solicitações de atualização são enviadas diretamente do painel de
controle da Cloud Platform e não requerem nenhum upload de dados. Para Hospedagem
Própria, as solicitações de atualização devem incluir uma cópia da base de dados do Cliente e
os dados associados (normalmente obtidos no menu Backup do Software).

Este serviço é fornecido por meio de uma plataforma automatizada para permitir que o Cliente
execute atualizações autônomas, uma vez que uma versão anterior da base de dados do
Cliente tenha sido atualizada com sucesso para uma Versão Coberta.

O Serviço de Atualização é limitado à conversão técnica e adaptação da base de dados do
Cliente para torná-lo compatível com a Versão de Destino, a correção de qualquer Bug causado
diretamente pela operação de atualização e que não ocorre normalmente na Versão de
Destino, e a conversão do código-fonte e dados dos Módulos Extras Cobertos para a Versão de
Destino.

É responsabilidade do Cliente verificar e validar a base de dados atualizada para detectar Bugs,
analisar o impacto de alterações e novos recursos implementados na Versão de Destino e
converter e adaptar para a Versão de Destino quaisquer extensões de terceiros do Software
que tenham sido instaladas na base de dados antes da atualização (por exemplo, Módulos
Extras não cobertos). O Cliente pode fazer várias solicitações de atualização para uma base de
dados, até que um resultado aceitável seja alcançado.


.. _cloud_hosting_pt:

4.4 Serviços de Hospedagem na Nuvem
-----------------------------------

Durante a vigência deste Contrato, quando o Cliente optar por usar a Cloud Platform,
a Odoo SA se compromete a fornecer pelo menos os seguintes serviços:

- Opções de várias regiões de hospedagem (mínimo 3: Europa, América, Ásia/Pacífico)
- Hospedagem em data centers Tier III ou equivalente, com 99,9% de tempo de atividade da rede
- Criptografia SSL (HTTPS) de comunicação classe A
- Backups totalmente automatizados e verificados, replicados em várias regiões
- Plano de recuperação de desastres, testado regularmente

Os detalhes dos Serviços de Hospedagem na Nuvem são descritos na página do Acordo de Nível
de Serviço (SLA) em https://www.odoo.com/cloud-sla.


.. _support_service_pt:

4.5 Serviços de Suporte
-----------------------

Escopo
~~~~~~

Durante a vigência deste Contrato, o Cliente pode abrir um número ilimitado de chamados
de suporte gratuitamente, exclusivamente para questões relacionadas a Bugs (consulte :ref:`bugfix_pt`)
ou orientação com relação ao uso dos recursos padrão do Software e Módulos Extras Cobertos.

Outras solicitações de assistência, como questões relacionadas a desenvolvimento ou
customizações, podem ser cobertas por meio da compra de um contrato de serviço separado.
Caso não esteja claro se uma solicitação é coberta por este Contrato, a decisão fica a critério da
Odoo SA.

Disponibilidade
~~~~~~~~~~~~~~~

Os chamados podem ser feitos por meio do formulário da web ou dos números de
telefone listados em https://www.odoo.com/help, ou, ao trabalhar com um
Parceiro Odoo, o canal fornecido pelo parceiro, sujeito ao horário de
funcionamento local.



.. _maintenance_partner_pt:

4.6 Trabalhando com um Parceiro Odoo
------------------------------------

Para correções de bugs, suporte e serviços de atualização, o cliente pode trabalhar com um
parceiro Odoo como principal ponto de contato ou trabalhar diretamente com a Odoo SA.

Se o Cliente decidir trabalhar com um Parceiro Odoo, a Odoo SA subcontratará os serviços
relacionados com os Módulos Extras Cobertos ao Parceiro Odoo, que se torna o principal ponto
de contacto do Cliente. O Parceiro Odoo pode entrar em contato com a Odoo SA em nome do
Cliente para obter assistência de segundo nível com relação aos recursos padrão do Software.

Se o Cliente decidir trabalhar diretamente com a Odoo SA, os serviços relacionados aos
Módulos Extras Cobertos serão fornecidos somente se o Cliente estiver hospedado na Odoo
Cloud Platform.


.. _charges_pt:

5 Preços e Taxas
================

.. _charges_standard_pt:

5.1 Preços Padrões
------------------

Os preços padrões para a assinatura do Odoo Enterprise e os Serviços são baseados no número
de Usuários e no Plano de Assinatura usado pelo Cliente e especificados por escrito na
celebração do Contrato.

Se durante a Vigência, o Cliente tiver mais Usuários ou usar recursos que exijam outro Plano de
Assinatura do que o especificado no momento da celebração deste Contrato, o Cliente
concorda em pagar uma taxa extra equivalente ao preço de tabela aplicável (no momento do
desvio do número especificado de Usuários ou Plano de Assinatura) para os Usuários adicionais
ou o Plano de Assinatura necessário, pelo restante da Vigência.

Além disso, os serviços dos Módulos Extras Cobertos são cobrados com base no número de
linhas de código nesses módulos. Quando o Cliente optar pela manutenção dos Módulos Extras
Cobertos, a cobrança será mensal por 100 linhas de código (arredondadas para a próxima
centena), conforme especificado por escrito na celebração do Contrato. As linhas de código
serão contabilizadas com o comando ``cloc`` do Software, e incluirão todas as linhas de texto no
código fonte desses módulos, independente da linguagem de programação (Python, Javascript,
XML etc.), excluindo linhas em branco, linhas de comentário e arquivos que não são carregados
durante a instalação ou execução do Software.

Quando o Cliente solicitar uma atualização, para cada Módulo Extra Coberto que não tenha
sido coberto por uma taxa de manutenção nos últimos 12 meses, a Odoo SA poderá cobrar
uma taxa extra única para cada mês de cobertura faltante.

.. _charges_renewal_pt:

5.2 Custos de Renovação
-----------------------

Após a renovação, conforme previsto na seção :ref:`term_pt`, se os preços aplicados
durante a Vigência anterior forem inferiores ao preço de tabela aplicável mais atual, tais preços
aumentarão em até 7%.

.. _taxes_pt:

5.3 Impostos
------------

Todas as taxas e preços não incluem quaisquer impostos, taxas ou encargos federais,
provinciais, estaduais, locais ou outros aplicáveis (coletivamente, “Impostos”). O Cliente é
responsável pelo pagamento de todos os Impostos associados às compras feitas pelo Cliente
nos termos deste Contrato, exceto quando a Odoo SA for legalmente obrigada a pagar ou
cobrar impostos pelos quais o Cliente é responsável.

.. _conditions_pt:

6 Condições dos Serviços
========================

6.1 Obrigações do Cliente
-------------------------

O Cliente concorda em:

- pagar à Odoo SA quaisquer valores aplicáveis pelos Serviços do presente Contrato, de acordo
  com as condições de pagamento especificadas na assinatura deste contrato;
- notificar imediatamente a Odoo SA quando seu número real de Usuários exceder o número
  especificado no ato da celebração do Contrato e, nesse caso, pagar a taxa adicional aplicável,
  conforme descrito na seção :ref:`charges_standard_pt`;
- tomar todas as medidas necessárias para garantir a execução inalterada da parte do Software
  que verifica a validade do uso do Odoo Enterprise Edition, conforme descrito
  em :ref:`enterprise_access_pt`;
- nomear 1 pessoa de contato dedicada ao Cliente durante toda a vigência do Contrato;
- fornecer notificação por escrito à Odoo SA 30 dias antes de mudar seu ponto de contato principal
  para trabalhar com outro Parceiro Odoo ou para trabalhar diretamente com a Odoo SA.

Quando o Cliente opta por usar a Cloud Platform, o Cliente concorda ainda em:

- tomar todas as medidas razoáveis para manter suas contas de usuário seguras,
  inclusive escolhendo uma senha forte e não compartilhando com ninguém;
- fazer uso razoável dos Serviços de Hospedagem, renunciando quaisquer atividades ilegais ou
  abusivas, e observar estritamente as regras descritas na Política de Uso Aceitável
  publicada em https://www.odoo.com/acceptable-use.

Quando o cliente escolhe a opção de Hospedagem Própria, o cliente concorda ainda em:

- tomar todas as medidas razoáveis para proteger os arquivos e bases de dados do Cliente e
  garantir que os dados do Cliente estejam seguros e protegidos, reconhecendo que a Odoo SA
  não pode ser responsabilizada por qualquer perda de dados;
- conceder à Odoo SA o acesso necessário para verificar a validade do uso do Odoo Enterprise
  Edition mediante solicitação (por exemplo, se a validação automática for considerada
  inoperante para o Cliente).

6.2 Sem Aliciamento ou Contratações
-----------------------------------

Exceto quando a outra parte der seu consentimento por escrito, cada parte, suas afiliadas e
representantes concordam em não solicitar ou oferecer emprego a qualquer funcionário da
outra parte que esteja envolvido na execução ou uso dos Serviços sob este Contrato, durante a
vigência do Contrato e por um período de 12 meses a partir da data de rescisão ou vencimento
deste Contrato. Em caso de descumprimento das condições desta seção que leve à demissão
do referido funcionário para o efeito, a parte infratora obriga-se a pagar à outra parte um
montante de 30 000,00 euros (€) (trinta mil euros).


.. _publicity_pt:

6.3 Publicidade
---------------

Exceto quando vetado através de notificação por escrito, cada parte concede à outra uma
licença mundial intransferível, não exclusiva e isenta de royalties para reproduzir e exibir o
nome, logotipos e marcas registradas da outra parte, exclusivamente para fins de referência à
outra parte como um cliente ou fornecedor, em sites, press releases e outros materiais de
marketing.

.. _confidentiality_pt:

6.4 Confidencialidade
---------------------

Definição de “Informações Confidenciais”:
    Todas as informações divulgadas por uma parte (a “Parte Divulgadora”) à outra parte (a “Parte
    Receptora”), oralmente ou por escrito, que seja designada como confidencial ou que
    razoavelmente deva ser entendida como confidencial, dada a natureza do informações e as
    circunstâncias da divulgação. Em particular, qualquer informação relacionada a negócios,
    assuntos, produtos, desenvolvimentos, segredos comerciais, know-how, pessoal, clientes e
    fornecedores de qualquer uma das partes deve ser considerada confidencial.

Para todas as Informações Confidenciais recebidas durante a Vigência deste Contrato, a Parte
Receptora usará o mesmo grau de cuidado que usa para proteger a confidencialidade de suas
próprias Informações Confidenciais semelhantes, mas não menos do que o cuidado razoável.

A Parte Receptora pode divulgar Informações Confidenciais da Parte Divulgadora na medida em
que for obrigada por lei a fazê-lo, desde que a Parte Receptora notifique a Parte Divulgadora
com antecedência sobre a divulgação obrigatória, na medida permitida por lei.

.. _data_protection_pt:

6.5 Proteção de Dados
---------------------

Definições
    "Dados Pessoais", "Controlador", "Processamento" têm os mesmos significados que no
    Regulamento (UE) 2016/679 e na Diretiva 2002/58/EC, e qualquer regulamento ou legislação
    que os altere ou substitua (doravante referido como "Legislação de Proteção de Dados")

Processamento de Dados Pessoais
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As partes reconhecem que a base de dados do Cliente pode conter Dados Pessoais, dos quais o
Cliente é o Controlador. Estes dados serão processados pela Odoo SA quando o Cliente assim o
instruir, mediante a utilização de algum dos Serviços que necessitem de uma base de dados
(e.g. os Serviços de Hospedagem na Nuvem ou o Serviço de Atualização da Base de Dados), ou
se o Cliente transferir a sua base de dados ou parte da sua base de dados à Odoo SA por
qualquer motivo relacionado a este Contrato.

Este processamento será realizado em conformidade com a Legislação de Proteção de Dados.
Em particular, a Odoo SA compromete-se a:

- (a) apenas processar os Dados Pessoais quando e conforme instruído pelo Cliente, e com a
  finalidade de executar um dos Serviços sob este Contrato, a menos que haja exigência por lei,
  caso em que a Odoo SA notificará o Cliente com antecedência, a não ser que a lei a proíba;
- (b) garantir que todas as pessoas dentro da Odoo SA autorizadas a processar os Dados Pessoais
  se comprometam com a confidencialidade;
- (c) implementar e manter medidas técnicas e organizacionais apropriadas para proteger os
  Dados Pessoais contra processamento não autorizado ou ilegal e contra perda, destruição,
  dano, roubo, alteração ou divulgação acidental;
- (d) encaminhar prontamente ao Cliente qualquer solicitação de Proteção de Dados que tenha
  sido enviada à Odoo SA em relação à base de dados do Cliente;
- (e) notificar o Cliente imediatamente ao tomar conhecimento e confirmar qualquer processamento
  acidental, não autorizado ou ilegal, divulgação ou acesso aos Dados Pessoais;
- (f) notificar o Cliente se as instruções de processamento infringirem a Legislação de
  Proteção de Dados aplicável, na opinião da Odoo SA;
- (g) disponibilizar ao Cliente todas as informações necessárias para demonstrar conformidade
  com a Legislação de Proteção de Dados, permitir e contribuir razoavelmente para auditorias,
  incluindo inspeções, conduzidas ou ordenadas pelo Cliente;
- (h) excluir permanentemente todas as cópias da base de dados do Cliente em posse da Odoo
  SA, ou devolver tais dados, à escolha do Cliente, após a rescisão deste Contrato, sujeito
  aos atrasos especificados na `Política de Privacidade <https://www.odoo.com/privacy>`_
  da Odoo SA;

No que diz respeito às alíneas (d) a (f), o Cliente concorda em fornecer à Odoo SA informações
de contato precisas em todos os momentos, conforme necessário para notificar o responsável pela
Proteção de Dados do Cliente.

Subprocessadores
~~~~~~~~~~~~~~~~

O Cliente reconhece e concorda que, para fornecer os Serviços, a Odoo SA pode usar
provedores de serviços terceirizados (Subprocessadores) para tratar Dados Pessoais. A Odoo SA
compromete-se a usar apenas Subprocessadores em conformidade com a Legislação de
Proteção de Dados. Esta utilização estará abrangida por um contrato entre a Odoo SA e o
Subprocessador que dá garantias nesse sentido. A Política de Privacidade da Odoo SA,
publicada em https://www.odoo.com/privacy, fornece informações atualizadas sobre os
nomes e propósitos dos Subprocessadores atualmente em uso pela Odoo SA para a execução
dos Serviços.

.. _termination_pt:

6.6 Cessão
----------

Caso qualquer uma das partes não cumpra qualquer uma de suas obrigações decorrentes deste
Contrato, e se tal violação não for sanada dentro de 30 dias corridos a partir da notificação por
escrito de tal violação, este Contrato poderá ser rescindido imediatamente pela parte não
infratora.

Além disso, a Odoo SA pode rescindir o Contrato imediatamente caso o Cliente não pague as
taxas aplicáveis pelos Serviços dentro de 21 dias após a data de vencimento especificada na
fatura correspondente e após no mínimo 3 lembretes.

Cláusulas Subsistentes:
  As seções ":ref:`confidentiality_pt`", “:ref:`disclaimers_pt`",   “:ref:`liability_pt`",
  e “:ref:`general_provisions_pt`" subsistirão a qualquer rescisão ou expiração deste Contrato.


.. _warranties_disclaimers_pt:

7 Garantias, Isenções de Responsabilidade, Limitação de Responsabilidade
========================================================================

.. _warranties_pt:

7.1 Garantias
-------------

A Odoo SA detém os direitos autorais ou equivalente [#cla_pt1]_ de 100% do código do Software e
confirma que todas as bibliotecas de software necessárias para usar o Software estão disponíveis
sob uma licença compatível com a licença do Software.

Durante a vigência deste Contrato, a Odoo SA se compromete a realizar esforços
comercialmente razoáveis para executar os Serviços de acordo com os padrões de indústria
geralmente aceitos, desde que:

- os sistemas computacionais do Cliente estejam em bom estado de funcionamento e, para o
  caso de Hospedagem Própria, o Software esteja instalado num ambiente operacional adequado;
- o Cliente forneça informações adequadas de solução de problemas e, para o caso de
  Hospedagem Própria, qualquer acesso que a Odoo SA possa precisar para identificar,
  reproduzir e resolver problemas;
- todos os valores devidos à Odoo SA sejam pagos.

O único e exclusivo recurso do Cliente e a única obrigação da Odoo SA por qualquer violação
desta garantia é que a Odoo SA retome a execução dos Serviços sem custo adicional.

.. [#cla_pt1] As contribuições externas são cobertas por um `Contrato de Licença de Direitos
              Autorais <https://www.odoo.com/cla>`_
              fornece uma licença permanente, gratuita e irrevogável de direitos autorais e patente para a Odoo SA.


.. _disclaimers_pt:

7.2 Isenções de Responsabilidade
--------------------------------

Exceto conforme expressamente disposto neste documento, nenhuma das partes oferece
qualquer garantia de qualquer tipo, seja expressa, implícita, estatutária ou de outra maneira, e
cada parte se isenta especificamente de todas as garantias implícitas, incluindo qualquer
garantia implícita de comercialização, adequação a uma finalidade específica ou não violação,
na extensão máxima permitida pela lei aplicável.

A Odoo SA não garante que o Software esteja em conformidade com qualquer lei ou
regulamentação local ou internacional.

.. _liability_pt:

7.3 Limitação de Responsabilidade
---------------------------------

Na extensão máxima permitida por lei, a responsabilidade agregada de cada parte juntamente
com suas afiliadas, decorrente ou relacionada a este Contrato, não excederá 50% do valor total
pago pelo Cliente sob este Contrato durante os 12 meses imediatamente anteriores à data do
evento que deu origem a tal ação judicial. Reivindicações múltiplas não devem ampliar esta
limitação.

Em nenhum caso, qualquer uma das partes ou suas afiliadas serão responsáveis por quaisquer
danos indiretos, especiais, exemplares, incidentais ou consequentes de qualquer tipo,
incluindo, mas não limitado a, perda de receita, lucros, economias, perda de negócios ou
outras perdas financeiras, custos de paralisação ou atraso, dados perdidos ou corrompidos,
decorrentes ou relacionados a este Contrato, independentemente da forma de ação, seja por
contrato, ato ilícito ou não, mesmo que uma parte ou suas afiliadas tenham sido avisadas da
possibilidade de tais danos, ou se o reparo de uma parte ou de suas afiliadas falhar em seu
propósito essencial.

.. _force_majeure_pt:

7.4 Força Maior
---------------

Nenhuma das partes será responsável perante a outra parte pelo atraso em qualquer
cumprimento ou falha em cumprir qualquer ação sob este Contrato quando tal falha ou atraso
encontrar sua causa em um caso de *força maior*, como regulamentações governamentais,
incêndio, greve, guerra, inundação, acidente, epidemia, embargo, apropriação total ou parcial
de fábrica ou produto por qualquer governo ou autoridade pública, ou qualquer outra causa ou
causas, de natureza semelhante ou diferente, fora do controle razoável de tal parte, desde que
tal causa ou causas existam.

.. _general_provisions_pt:

8 Disposições Gerais
====================

.. _governing_law_pt:

8.1 Jurisdição
--------------

Este Contrato e todas as ordens do Cliente estarão sujeitos à lei belga. Qualquer disputa
decorrente ou relacionada a este Contrato ou a qualquer ordem do Cliente estará sujeita à
jurisdição exclusiva do Tribunal Comercial de Nivelles.

.. _severability_pt:

8.2 Independência das Disposições Contratuais
---------------------------------------------

No caso de qualquer uma ou mais das disposições deste Contrato ou qualquer aplicação do
mesmo ser inválida, ilegal ou inexequível em qualquer aspecto, a validade, legalidade e
aplicabilidade das demais disposições deste Contrato e qualquer aplicação do mesmo não
serão de forma alguma afetadas ou prejudicadas. Ambas as partes se comprometem a
substituir qualquer disposição inválida, ilegal ou inexequível deste Contrato por uma disposição
válida com os mesmos efeitos e objetivos.

.. _appendix_a_pt:

9 Anexo A: Licença do Odoo Enterprise Edition
=============================================

A versão Enterprise do Odoo tem a licença Odoo Enterprise Edition v1.0, que é
definida da seguinte forma:

.. warning::
    Esta é uma tradução em português da "Licença Odoo Enterprise Edition v1.0".
    A tradução é fornecida com o intuito de facilitar a sua compreensão, mas não tem valor legal.
    A única referência oficial aos termos da "Licença Odoo Enterprise Edition"
    é a :ref:`versão original em inglês <odoo_enterprise_license>`

.. raw:: html

    <tt>

.. raw:: latex

    {\tt


Licença Odoo Enterprise Edition v1.0

Este software e arquivos associados (o "Software") só podem ser usados (executados, modificados,
executados após modificações) com uma Assinatura do Odoo Enterprise válida para o número correto
de usuários.

Com um Acordo de Parceria válido com a Odoo S.A., as permissões acima também são concedidas,
desde que o uso seja limitado a um ambiente de testes ou desenvolvimento.

Você pode desenvolver módulos Odoo com base no Software e distribuí-los sob a licença de sua
escolha, desde que seja compatível com os termos da Licença Odoo Enterprise Edition (por exemplo:
LGPL, MIT ou licenças proprietárias similares a esta).

Você pode usar módulos Odoo publicados sob qualquer licença junto com o Software, desde que a
licença deles seja compatível com os termos da Licença Odoo Enterprise (incluindo, mas não se
limitando a, qualquer módulo publicado na Odoo Apps Store em odoo.com/apps).

É proibido publicar, distribuir, sublicenciar ou vender cópias do Software ou cópias modificadas
do Software.

O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todas
as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA,
INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM PROPÓSITO
ESPECÍFICO E NÃO VIOLAÇÃO. EM NENHUMA CIRCUNSTÂNCIA, OS AUTORES OU TITULARES DE DIREITOS
AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRA RESPONSABILIDADE,
SEJA EM AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE, OU EM CONEXÃO COM
O SOFTWARE OU O USO OU OUTRAS TRANSAÇÕES NO SOFTWARE.

.. raw:: latex

    }

.. raw:: html

    </tt>
