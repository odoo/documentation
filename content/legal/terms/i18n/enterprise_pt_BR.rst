.. _enterprise_agreement_pt:

=======================================
Acordo da Assinatura do Odoo Enterprise
=======================================

.. only:: html

    `Download PDF <https://www.odoo.com/documentation/{CURRENT_BRANCH}/odoo_enterprise_agreement.pdf>`_

.. warning::
    Esta é uma tradução em português do Contrato “Odoo Enterprise Subscription Agreement”.
    A tradução é fornecida com o intuito de facilitar a sua compreensão, mas não tem
    valor legal. A única referência oficial aos termos do Contrato “Odoo Enterprise Subscription Agreement”
    é a :ref:`versão original em inglês <enterprise_agreement>`.

.. note:: Versão 10b - 2023-12-20

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
.. v10b: Minor rewording on Section 5, 6.2 and 8 for clarity on PT-Br; overall adaptation of terms
         for accuracy of the legal jargon on PT-Br (Agreement, Charges, Governing Law)

Ao assinar os serviços do Odoo Enterprise ("Serviços") fornecidos pela Odoo SA e as suas afiliadas
(coletivamente, "Odoo SA") em relação ao Odoo Enterprise Edition ou Odoo Community Edition
("Software"), hospedados nas plataformas de nuvem da Odoo SA ("Plataforma de nuvem") ou no local
("Hospedagem própria"), você ("Cliente") concorda com o cumprimento dos seguintes termos e condições
(o "Acordo").

.. _term_pt:

1 Vigência do Acordo
====================

A duração do presente Acordo ("Vigência") será especificada por escrito aquando da celebração do
mesmo, com início na data de celebração. O acordo é automaticamente renovado por igual período,
exceto se uma das partes notificar a outra da cessação do acordo por escrito, no mínimo 30 dias
antes do fim da vigência.

.. _definitions_pt:

2 Definições
============

Usuário
    Qualquer conta de usuário indicada como ativa no software, com acesso ao modo de criação e/ou
    edição. As contas de usuário desativadas e as contas utilizadas por pessoas (ou sistemas)
    externas que apenas têm acesso limitado ao Software através dos recursos do portal (designadas
    como "Usuários do portal") não são contadas como Usuários.

Aplicativo
    Um “Aplicativo” é um grupo específico de recursos disponíveis para instalação no Software.

Parceiro Odoo
    Um Parceiro Odoo é uma empresa ou indivíduo terceiro, escolhido por e que trabalha com o Cliente
    nos serviços relacionados ao Odoo. O Cliente pode decidir, a qualquer momento, trabalhar com um
    Parceiro Odoo diferente ou trabalhar diretamente com a Odoo SA (sujeito a aviso prévio).

Módulo Extra
    Um módulo extra é um diretório de arquivos de código-fonte, ou um conjunto de personalizações
    baseadas em Python criadas em uma base de dados (por exemplo, com o Estúdio do Odoo), que
    adiciona funcionalidades ou altera o comportamento padrão do Software. Pode ser desenvolvido
    pelo Cliente, pela Odoo SA, por um Parceiro Odoo em nome do Cliente ou por terceiros.

Módulo Extra Coberto
    Um Módulo Extra Coberto é um Módulo Extra para o qual o Cliente opta por pagar uma taxa de
    manutenção a fim de obter serviços de suporte, atualização e correção de bugs.

Bug
    É considerado um Bug qualquer falha do Software ou de um Módulo Extra Coberto que resulte em
    violação de segurança, rastreamento de erros ou interrupção total, e que não seja diretamente
    causado por uma instalação ou configuração incorreta. A não conformidade com as especificações
    ou requisitos será considerada como Bugs a critério da Odoo SA (normalmente, quando o Software
    não produz os resultados ou o desempenho para os quais foi desenvolvido, ou quando uma
    caraterística específica de um país já não cumpre os requisitos legais de contabilidade).

Versões Cobertas
    Exceto se indicado o contrário, os Serviços fornecidos sob o presente Acordo são aplicáveis
    apenas às Versões Cobertas do Software, que incluem as três versões principais lançadas mais
    recentemente.

Plano de Assinatura
    Um Plano de Assinatura define o conjunto de Aplicativos, recursos e soluções de hospedagem
    abrangidos pelo presente Contrato, e é definido por escrito na celebração do presente Contrato.

.. _enterprise_access_pt:

3 Acesso ao Software
====================

O Cliente pode utilizar o Software hospedado na Plataforma de nuvem, ou escolher a opção de
Hospedagem própria. A Plataforma de nuvem é hospedada e totalmente administrada pela Odoo SA, e
acessada remotamente pelo Cliente. Com a opção de Hospedagem própria, o Cliente hospeda o Software
em sistemas computacionais da sua escolha, que não estão sob o controle da Odoo SA.

Durante a vigência do presente Acordo, a Odoo SA concede ao Cliente uma licença não exclusiva e
intransferível para utilizar (executar, modificar, executar após modificação) o software Odoo
Enterprise Edition, nos termos estabelecidos no :ref:`9 Anexo A: Licença do Odoo Enterprise Edition
<appendix_a_pt>`.

O Cliente concorda em tomar todas as medidas necessárias para garantir a execução não modificada da
parte do Software que verifica a validade da utilização do Odoo Enterprise Edition e coleta
estatísticas para esse fim, incluindo, mas não limitado a, a execução de uma instância, o número de
Usuários, os Aplicativos instalados e o número de linhas de código dos Módulos Extras Cobertos.

A Odoo SA se compromete a não divulgar dados individuais ou nominativos a terceiros sem o
consentimento do Cliente, e a tratar todos os dados coletados em conformidade com a Política de
Privacidade oficial, publicada em https://www.odoo.com/privacy.

Após a expiração ou rescisão do presente Acordo, a presente licença é imediatamente revogada e o
Cliente compromete-se a deixar de utilizar o software Odoo Enterprise Edition e a Plataforma de
nuvem.

Caso haja violação dos termos desta seção por parte do Cliente violar, o mesmo concorda em pagar à
Odoo SA uma taxa extra igual a 300% do preço tabelado aplicável para o número real de Usuários.

.. _services_pt:

4 Serviços
==========

.. _bugfix_pt:

4.1 Serviço de correção de bugs
-------------------------------

Durante a vigência do presente Acordo, a Odoo SA se compromete a envidar todos os esforços razoáveis
para solucionar qualquer Bug do Software e dos Módulos Extras Cobertos submetido pelo Cliente
através do canal adequado (normalmente, o formulário web ou os números de telefone listados em
https://www.odoo.com/help, ou, ao trabalhar com um Parceiro Odoo, o canal fornecido pelo parceiro),
e a começar a tratar tais submissões do Cliente no prazo de dois dias úteis.

Assim que o Bug for corrigido, a solução apropriada será comunicada ao Cliente. Se o Cliente estiver
utilizando uma Versão Coberta, não será solicitado fazer a atualização para uma Versão Coberta mais
recente do Software como solução para um Bug.

Quando um Bug é corrigido em qualquer Versão Coberta, a Odoo SA se compromete a corrigir o Bug em
todas as Versões Cobertas mais recentes do Software.

Ambas as partes reconhecem que, tal como especificado na licença do Software e na seção :ref:`7.3
Limitação de Responsabilidade <liability_pt>` do presente Acordo, a Odoo SA não pode ser
responsabilizada por Bugs no Software ou em Módulos Extras Cobertos.

4.2 Serviço de atualizações de segurança
----------------------------------------

.. _secu_self_hosting_pt:

Hospedagem própria
~~~~~~~~~~~~~~~~~~

Durante a vigência do presente Acordo, a Odoo SA se compromete a enviar um "Aviso de Segurança" ao
Cliente para qualquer Bug de segurança que seja descoberto nas Versões Cobertas do Software (isto
exclui Módulos Extra), pelo menos duas semanas antes de tornar o Aviso de Segurança público, a menos
que o Bug já tenha sido divulgado publicamente por terceiros. Os Avisos de Segurança incluem uma
descrição completa do Bug, a sua causa, os possíveis impactos nos sistemas do Cliente e a solução
correspondente para cada Versão Coberta.

O Cliente entende que o Bug e as informações no Aviso de segurança devem ser tratados como
Informações Confidenciais, conforme descrito em :ref:`6.4 Confidencialidade <confidentiality_pt>`,
durante o período de embargo precedente à divulgação pública.


.. _secu_cloud_platform_pt:

Plataforma de nuvem
~~~~~~~~~~~~~~~~~~~

A Odoo SA se compromete a aplicar as soluções de segurança para qualquer Bug de segurança descoberto
em versões do Software hospedadas na Plataforma de Nuvem, em todos os sistemas sob o seu controle,
assim que a solução estiver disponível, sem exigir qualquer ação manual do Cliente.

.. _upgrade_pt:

4.3 Serviços de atualização
---------------------------

.. _upgrade_odoo_pt:

Serviço de atualização do Software
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Durante a vigência do presente Acordo, o Cliente pode submeter solicitações de atualização pelo
canal adequado (normalmente o website do serviço de atualização da Odoo SA), de modo a converter uma
base de dados do Software de qualquer versão do Software para uma Versão Coberta mais recente
("Versão alvo").

Para a Plataforma de nuvem, os pedidos de atualização são submetidos diretamente a do painel de
controle da Plataforma de nuvem e não requerem carregamentos de dados. Para Hospedagem própria, os
pedidos de atualização devem incluir uma cópia da base de dados do Cliente e dos dados associados
(normalmente obtidos no menu Backup do Software).

Este serviço é prestado através de uma plataforma automatizada, de modo a permitir ao Cliente
efetuar atualizações sem supervisão, quando uma versão anterior da base de dados do Cliente tiver
sido atualizada com êxito para uma Versão Coberta.

O Serviço de Atualização limita-se à conversão técnica e à adaptação da base de dados do Cliente
para a tornar compatível com a Versão Alvo, à correção de erros causados diretamente pela operação
de atualização e que não ocorram normalmente na Versão Alvo, e à conversão do código-fonte e dos
dados dos Módulos Extras Cobertos para a Versão Alvo.

É da responsabilidade do Cliente verificar e validar a base de dados atualizada para a detectar
Bugs, analisar o impacto das alterações e dos novos recursos implementados na Versão Alvo, e
converter e adaptar para a Versão Alvo extensões de terceiros do Software que tenham sido instaladas
na base de dados antes da atualização (ex.: Módulos Extra não cobertos). O Cliente pode enviar
várias solicitações de atualização para uma base de dados, até obter um resultado aceitável.

.. _cloud_hosting_pt:

4.4 Serviços de hospedagem na nuvem
-----------------------------------

Durante a vigência do presente Acordo, quando o Cliente optar por utilizar a Plataforma de nuvem, a
Odoo SA compromete-se a fornecer, pelo menos, os seguintes serviços:

- Opção de várias regiões de hospedagem (mínimo 3: Europa, América, Ásia/Pacífico)
- Hospedagem em centros de dados Tier-III ou equivalente, com 99,9% de tempo de atividade da rede
- Criptografia de comunicações SSL (HTTPS) de grau A
- Backups de segurança totalmente automatizadas e verificadas, replicadas em várias regiões
- Plano de recuperação de desastres, testado regularmente

Os detalhes dos Serviços de Alojamento em Nuvem estão descritos na página do Acordo de Nível de
Serviço em https://www.odoo.com/cloud-sla.

.. _support_service_pt:

4.5 Serviços de suporte
-----------------------

Escopo
~~~~~~

Durante a vigência do presente Acordo, o Cliente pode abrir um número ilimitado de chamados de
suporte gratuitos, exclusivamente para questões relacionadas com Bugs (ver :ref:`bugfix_pt`) ou
orientação relativa à utilização das funcionalidades padrão do Software e dos Módulos Extras
Cobertos.

Outros solicitações de assistência, tais como questões de desenvolvimento ou personalizações, podem
ser cobertos através da aquisição de um acordo de serviço independente. Caso não esteja claro se uma
solicitação está coberta pelo presente Acordo, a decisão fica a critério da Odoo SA.

Disponibilidade
~~~~~~~~~~~~~~~

Os chamados podem ser enviados através do formulário web ou dos números de telefone listados em
https://www.odoo.com/help, ou, ao trabalhar com um Parceiro Odoo, o canal fornecido pelo parceiro,
sujeito ao horário de funcionamento local.

.. _maintenance_partner_pt:

4.6 Trabalhar com um Parceiro Odoo
----------------------------------

Para serviços de correção de bugs, suporte e atualização, o Cliente pode trabalhar com um Parceiro
Odoo como ponto de contato principal ou trabalhar diretamente com a Odoo SA.

Se o Cliente decidir trabalhar com um Parceiro Odoo, os serviços relacionados aos Módulos Extras
Cobertos serão subcontratados pela Odoo SA com o Parceiro Odoo, que se torna o principal ponto de
contato do cliente. O Parceiro Odoo pode se comunicar com a Odoo SA em nome do cliente para obter
assistência de segundo nível relativa aos recursos padrão do Software.

Se o Cliente decidir trabalhar diretamente com a Odoo SA, os serviços relacionados aos Módulos
Extras Cobertos são fornecidos se, e apenas se, o Cliente tiver hospedagem na Plataforma de nuvem do
Odoo.

.. _charges_pt:

5 Encargos e taxas
==================

.. _charges_standard_pt:

5.1 Encargos padrão
-------------------

Os encargos padrão para os Serviços e a assinatura do Odoo Enterprise se baseiam no número de
Usuários e no Plano de Assinatura utilizado pelo Cliente, e são especificados por escrito na
celebração do Acordo.

Se, durante o período de Vigência, o Cliente tiver mais Usuários ou utilizar recursos que exijam um
Plano de Assinatura diferente do especificado no presente Acordo, o Cliente concorda em pagar uma
taxa adicional equivalente ao preço tabelado aplicável (no momento do desvio do número especificado
de Usuários ou do Plano de Assinatura) pelos Usuários adicionais ou pelo Plano de Assinatura
necessário, durante o resto do período de Vigência.

Para além disso, os serviços para os Módulos Extras Cobertos são cobrados com base no número de
linhas de código destes módulos. Quando o Cliente opta pela manutenção de Módulos Extras Cobertos, o
custo é uma taxa mensal por cada 100 linhas de código (arredondada para a centena seguinte),
conforme especificado por escrito na conclusão do Contrato. As linhas de código serão contadas com o
comando  cloc do Software, e incluem todas as linhas de texto no código-fonte desses módulos,
independentemente da linguagem de programação (Python, Javascript, XML, etc.), excluindo linhas em
branco, linhas de comentário e arquivos que não são carregados na instalação ou execução do
Software.

Quando o Cliente solicita uma atualização, para cada Módulo Extra Coberto que não tenha sido coberto
por uma taxa de manutenção nos últimos 12 meses, a Odoo SA pode cobrar uma taxa extra única por cada
mês em falta.

.. _charges_renewal_pt:

5.2 Encargos de renovação
-------------------------

Aquando da renovação prevista na seção :ref:`1 Vigência do Acordo <term_pt>`, se os encargos aplicados durante o
período de Vigência anterior forem inferiores ao preço tabelado aplicável mais atual, esses encargos
aumentarão em até 7%.

.. _taxes_pt:

5.3 Impostos
------------

Todas as taxas e encargos excluem os impostos, taxas ou encargos federais, provinciais, estatais,
locais ou outros impostos governamentais aplicáveis (coletivamente, "Impostos"). O Cliente é
responsável pelo pagamento de todos os Impostos associados às compras efetuadas pelo Cliente sob o
presente Acordo, exceto quando a Odoo SA for legalmente obrigada a pagar ou cobrar Impostos pelos
quais o Cliente é responsável.

.. _conditions_pt:

6 Condições dos serviços
========================

6.1 Obrigações do cliente
-------------------------

O Cliente compromete-se a:

- pagar à Odoo SA todos os encargos aplicáveis aos Serviços do presente Acordo, de acordo com as
  condições de pagamento especificadas na assinatura do presente contrato;
- notificar imediatamente a Odoo SA quando o seu número real de Usuários exceder o número
  especificado no Acordo e, nesse caso, pagar a taxa adicional aplicável, conforme descrito na
  secção :ref:`5.1 Encargos padrão <charges_standard_pt>`;
- tomar todas as medidas necessárias para garantir a execução inalterada da parte do Software que
  verifica a validade da utilização do Odoo Enterprise Edition, tal como descrito em :ref:`3 Acesso ao
  Software <enterprise_access_pt>`;
- nomear uma pessoa como contato dedicado do Cliente durante toda a vigência do Acordo;
- notificar por escrito a Odoo SA 30 dias antes de alterar o seu ponto principal de contato para
  trabalhar com outro Parceiro Odoo ou para trabalhar diretamente com a Odoo SA.

Quando o Cliente opta por utilizar a Plataforma de nuvem, o Cliente também se compromete a:

- tomar todas as medidas razoáveis para manter as suas contas de usuário seguras, inclusive
  definindo uma senha forte e não a compartilhando com mais ninguém;
- fazer uso razoável dos Serviços de Hospedagem, excluindo quaisquer atividades ilegais ou abusivas,
  e respeitar rigorosamente as regras descritas na Política de Uso Aceitável publicada em
  https://www.odoo.com/acceptable-use.

Quando o Cliente escolhe a opção de Hospedagem própria, o Cliente também se compromete a:

- tomar todas as medidas razoáveis para proteger os arquivos e bases de dados do Cliente e para
  garantir que os dados do Cliente estejam seguros e protegidos, reconhecendo que a Odoo SA não pode
  ser responsabilizada por qualquer perda de dados;
- conceder à Odoo SA o acesso necessário para verificar a validade da utilização da Odoo Enterprise
  Edition mediante solicitação (ex.: se a validação automática for considerada inoperante para o
  Cliente).

6.2 Proibição de solicitação ou contratação
-------------------------------------------

Exceto quando a outra parte fornecer consentimento por escrito, cada parte, as suas filiais e
representantes concordam em não solicitar ou oferecer emprego a qualquer funcionário da outra parte
que esteja envolvido na execução ou utilização dos Serviços sob o presente Acordo, durante a
vigência do Acordo e por um período de 12 meses a contar da data de rescisão ou expiração do
presente Acordo. No caso de violação das condições desta seção que leve à rescisão do referido
funcionário para esse fim, a parte infratora concorda em pagar à outra parte um valor de EUR (€)
30.000,00 (trinta mil euros).

.. _publicity_pt:

6.3 Publicidade
---------------

Salvo notificação escrita do contrário, cada uma das partes concede à outra uma licença
intransferível, não exclusiva, isenta de direitos autorais e de âmbito global para reproduzir e
exibir o nome, os logotipos e as marcas comerciais da outra parte, exclusivamente para efeitos de
referência à outra parte como cliente ou fornecedor, em sites, comunicados de imprensa e outros
materiais de marketing.

.. _confidentiality_pt:

6.4 Confidencialidade
---------------------

Definição de "Informação Confidencial":
    Todas as informações divulgadas por uma parte (a "Parte divulgadora") à outra parte (a "Parte
    receptora"), oralmente ou por escrito, que sejam designadas como confidenciais ou que devam ser
    razoavelmente entendidas como confidenciais, dada a natureza das informações e as circunstâncias
    da divulgação. Em particular, qualquer informação relacionada com a empresa, negócios, produtos,
    desenvolvimentos, segredos comerciais, especialidades, funcionários, clientes e fornecedores de
    qualquer das partes deve ser considerada confidencial. Relativamente a todas as informações
    confidenciais recebidas durante o período de vigência do presente Acordo, a Parte receptora
    utilizará o mesmo grau de cuidado que utiliza para proteger a confidencialidade das suas
    próprias informações confidenciais semelhantes, mas não menos do que um cuidado razoável.

A Parte receptora pode divulgar Informações Confidenciais da Parte divulgadora na medida que for
obrigada por lei a fazê-lo, desde que a Parte receptora notifique previamente a Parte divulgadora da
divulgação obrigatória, conforme permitido por lei.

.. _data_protection_pt:

6.5 Proteção de dados
---------------------

Definições
    "Dados pessoais", "Responsável pelo tratamento", "Tratamento" têm o mesmo significado que no
    Regulamento (UE) 2016/679 e na Diretiva 2002/58/CE, bem como em qualquer regulamento ou
    legislação que os altere ou substitua (a seguir designados por "Legislação de proteção de
    dados")

Tratamento de dados pessoais
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As partes reconhecem que a base de dados do Cliente pode conter Dados Pessoais, dos quais o Cliente
é o Responsável pelo Tratamento. Estes dados serão processados pela Odoo SA quando o Cliente assim o
instruir, pela utilização de qualquer um dos Serviços que requerem uma base de dados (ex.: Serviços
de hospedagem em nuvem ou o serviço de atualização da base de dados), ou se o Cliente transferir a
sua base de dados ou uma parte da sua base de dados para a Odoo SA por qualquer motivo relacionado
com o presente Acordo.

Este processamento será realizado em conformidade com a Legislação de proteção de dados. Em
particular, a Odoo SA compromete-se a:

- (a) apenas processar os Dados Pessoais quando e como instruído pelo Cliente, e com o objetivo de
  executar um dos Serviços sob o presente Acordo, salvo se tal for exigido por lei, caso em que a
  Odoo SA notificará previamente o Cliente, a menos que a lei o proíba ;
- (b) garantir que todas as pessoas da Odoo SA autorizadas a processar os Dados Pessoais se
  comprometam com a confidencialidade;
- (c) implementar e manter medidas técnicas e organizacionais adequadas para proteger os Dados
  Pessoais contra o processamento não autorizado ou ilegal e contra perda acidental, destruição,
  dano, roubo, alteração ou divulgação;
- (d) encaminhar prontamente ao Cliente qualquer solicitação de proteção de dados que tenha sido
  submetida à Odoo SA em relação à base de dados do Cliente;
- (e) notificar o Cliente imediatamente após tomar conhecimento e confirmar qualquer processamento,
  divulgação ou acesso acidental, não autorizado ou ilegal aos Dados Pessoais;
- (f) notificar o Cliente se as instruções de processamento violam a Legislação de proteção de dados
  aplicável, na opinião da Odoo SA;
- (g) disponibilizar ao Cliente todas as informações necessárias para demonstrar a conformidade com
  a Legislação de proteção de dados, permitir e contribuir razoavelmente para auditorias, incluindo
  inspeções conduzidas ou mandatadas pelo Cliente;
- (h) apagar permanentemente todas as cópias da base de dados do Cliente na posse da Odoo SA, ou
  devolver esses dados, à escolha do Cliente, após a rescisão do presente Acordo, sujeito aos prazos
  especificados na `Política de Privacidade <https://www.odoo.com/ar/privacy>`_ da Odoo SA;

No que diz respeito às alíneas (d) a (f), o Cliente concorda em fornecer à Odoo SA informações de
contato precisas em qualquer momento, conforme necessário para notificar o responsável pela proteção
de dados do Cliente.

Subprocessadores
~~~~~~~~~~~~~~~~

O Cliente reconhece e aceita que, para prestar os Serviços, a Odoo SA pode recorrer a terceiros
prestadores de serviços (Subprocessadores) para o tratamento de Dados Pessoais. A Odoo SA se
compromete a utilizar apenas Subprocessadores em conformidade com a Legislação de proteção de dados.
Esta utilização será coberta por um contrato entre a Odoo SA e o Subprocessador que fornece
garantias para o efeito. A Política de Privacidade da Odoo SA, publicada em
https://www.odoo.com/privacy, fornece informações atualizadas sobre os nomes e as finalidades dos
Subprocessadores atualmente utilizados pela Odoo SA para a execução dos Serviços.

.. _termination_pt:

6.6 Rescisão
------------

No caso de uma das Partes não cumprir qualquer das suas obrigações decorrentes do presente Acordo, e
se tal descumprimento não tiver sido sanado no prazo de 30 dias corridos, a contar da notificação
por escrito de tal descumprimento, o presente Acordo pode ser imediatamente rescindido pela
não infratora.

Além disso, a Odoo SA pode rescindir o Acordo imediatamente no caso de o Cliente não pagar as taxas
aplicáveis aos Serviços no prazo de 21 dias após a data de vencimento especificada na fatura
correspondente, e após um mínimo de três avisos.

Disposições remanescentes:
  As seções ":ref:`confidentiality_pt`", “:ref:`disclaimers_pt`",   “:ref:`liability_pt`",
  e “:ref:`general_provisions_pt`" serão remanescentes a qualquer rescisão ou expiração do presente
  Acordo.

.. _warranties_disclaimers_pt:

7 Garantias, responsabilidade e isenções de responsabilidade
============================================================

.. _warranties_pt:

7.1 Garantias
-------------

Odoo SA detém os direitos de autor ou um equivalente [#cla_pt1]_ sobre 100% do código do Software e
confirma que todas as bibliotecas de software necessárias para utilizar o Software estão disponíveis
sob uma licença compatível com a licença do Software.

Durante a vigência do presente Acordo, a Odoo SA se compromete a envidar esforços comercialmente
razoáveis para executar os Serviços de acordo com os padrões geralmente aceitos do setor, desde que:

- os sistemas computacionais do Cliente estejam em boas condições de funcionamento e, no caso de
  Hospedagem própria, que o Software esteja instalado em um ambiente de operação adequado;
- o Cliente forneça informações adequadas para a resolução de problemas e, no caso do Hospedagem
  própria, qualquer acesso que a Odoo SA possa necessitar para identificar, reproduzir e resolver
  problemas;
- todos os valores devidos à Odoo SA tenham sido pagos.

O único e exclusivo recurso do Cliente e a única obrigação da Odoo SA por qualquer infração a esta
garantia é que a Odoo SA retome a execução dos Serviços sem custos adicionais.

.. [#cla_pt1] As contribuições externas são cobertas por um `Contrato de Licença de Direitos
              Autorais <https://www.odoo.com/cla>`_ que fornece uma licença permanente, gratuita e
              irrevogável de direitos autorais e patentes para a Odoo SA.

.. _disclaimers_pt:

7.2 Isenções de responsabilidade
--------------------------------

Exceto quando expressamente previsto neste documento, nenhuma das partes oferece qualquer tipo de
garantia, seja expressa, implícita, estatutária ou outra, e cada parte renuncia especificamente a
todas as garantias implícitas, incluindo qualquer garantia implícita de comercialização, adequação a
um determinado fim ou não infração, na extensão máxima permitida pela lei aplicável.

A Odoo SA não garante que o Software esteja em conformidade com qualquer lei ou regulamento local ou
internacional.

.. _liability_pt:

7.3 Limitação de responsabilidade
---------------------------------

Na medida máxima permitida por lei, a responsabilidade agregada de cada parte, juntamente com as
suas afiliadas, decorrente ou relacionada com o presente Acordo, não excederá 50% do valor total
pago pelo Cliente sob o presente Acordo durante os 12 meses imediatamente anteriores à data do
evento que deu origem à reivindicação.  Reivindicações múltiplas não aumentarão esta limitação.

Em caso algum qualquer das partes ou as suas afiliadas serão responsáveis por quaisquer danos
indiretos, especiais, exemplares, incidentais ou consequenciais de qualquer tipo, incluindo, mas não
se limitando a, perda de receita, lucros, poupanças, perda de negócios ou outras perdas financeiras,
custos de paralisação ou atraso, dados perdidos ou corrompidos, decorrentes ou relacionados com o
presente Acordo, independentemente da forma de ação, seja em contrato, delito ou outro, mesmo que
uma parte ou as suas afiliadas tenham sido avisadas da possibilidade de tais danos, ou se o recurso
de uma parte ou das suas filiais falhar de outra forma em seu objetivo essencial.

.. _force_majeure_pt:

7.4 Força maior
---------------

Nenhuma das partes será responsável perante a outra parte pelo atraso em qualquer execução ou pela
falta de execução de qualquer prestação sob o presente Acordo, quando essa falta ou atraso tiver
como causa um evento de força maior, tal como regulamentos governamentais, incêndio, greve, guerra,
inundação, acidente, epidemia, embargo, apropriação de instalações ou produtos, no todo ou em parte,
por qualquer governo ou autoridade pública, ou qualquer outra causa ou causas, de natureza
semelhante ou diferente, fora do controle razoável desta parte, enquanto a causa ou causas
existirem.

.. _general_provisions_pt:

8 Disposições gerais
====================

.. _governing_law_pt:

8.1 Legislação aplicável
------------------------

O presente Acordo e todas as ordens do Cliente estão sujeitos à lei belga. Qualquer litígio
decorrente ou relacionado com o presente Contrato ou com qualquer ordem do Cliente estará sujeito à
jurisdição exclusiva do Tribunal de Comércio de Nivelles.

.. _severability_pt:

8.2 Divisibilidade
------------------

No caso de uma ou mais disposições do presente Acordo ou da sua aplicação serem inválidas, ilegais
ou inaplicáveis sob qualquer aspecto, a validade, a legalidade e a aplicabilidade das restantes
disposições do Acordo e da sua aplicação não serão de modo algum afetadas ou prejudicadas. Ambas as
partes se comprometem a substituir qualquer disposição inválida, ilegal ou não aplicável do presente
Acordo por uma disposição válida com os mesmos efeitos e objetivos.

.. _appendix_a_pt:

9 Apêndice A: Licença do Odoo Enterprise Edition
================================================

A versão Enterprise do Odoo tem a licença Odoo Enterprise Edition v1.0, que é definida da seguinte
forma:

.. warning::
   Esta é uma tradução em português da "Licença Odoo Enterprise Edition v1.0". A tradução é
   fornecida com o intuito de facilitar a sua compreensão, mas não tem valor legal. A única
   referência oficial aos termos da "Licença Odoo Enterprise Edition" é a :ref:`versão original em
   inglês <odoo_enterprise_license>`

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
