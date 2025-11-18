===========
Commissions
===========

.. |SOs| remplacer par : :abbr:`SOs (Commandes Client)`

Les commissions sont un outil puissant pour motiver les membres de l'équipe commerciale. Elles stimulent les performances, augmentent la
productivité et encouragent une concurrence saine. La fonctionnalité *Commissions* de l'application **Ventes** d'Odoo
permet de récompenser les commerciaux ou les équipes commerciales en fonction de leurs performances. Cette
fonctionnalité prend en charge la création de structures de commissions flexibles et mesurables qui s'alignent sur les objectifs commerciaux,
qu'il s'agisse d'augmenter le chiffre d'affaires, le volume, les bénéfices ou les contrats récurrents.

Configuration
=============

Pour activer la fonctionnalité *Commissions*, accédez à :menuselection:`Application de vente --> Configuration -->
Paramètres`. Faites défiler jusqu'à la section :guilabel:`Facturation` et cochez la case :guilabel:`Commissions`.
Cliquez ensuite sur :guilabel:`Enregistrer`. Un nouveau menu :guilabel:`Commissions` apparaît alors
dans la barre de menu. Pour créer un nouveau plan de commission, accédez à :menuselection:`Commissions -->
Plans de commission` et cliquez sur :guilabel:`Nouveau`.

Structure du plan de commission
===============================

Chaque plan de commission comprend plusieurs éléments :

- :guilabel:`Basé sur` : détermine si les commissions sont attribuées en fonction des progrès réalisés par rapport aux
:guilabel:`objectifs` ou aux :guilabel:`réalisations`
- :guilabel:`par` : indique si le plan s'applique à des commerciaux individuels ou à l'ensemble d'une équipe commerciale.
- :guilabel:`Fréquence des objectifs` : définit la fréquence de réinitialisation des objectifs : **Mensuelle**, **Trimestrielle** ou
**Annuelle**.
- :guilabel:`Réalisations` : détermine ce qui est pris en compte pour le calcul des commissions.


.. image:: commissions/new-commission-plan.png
:alt: Formulaire détaillé du nouveau plan de commission.

Plans de commission basés sur des Objectifs
-------------------------------------------

Dans un plan de commission basé sur des *Objectifs*, les commissions sont attribuées en fonction du pourcentage des objectifs de vente atteints.
Les plans basés sur des objectifs sont idéaux pour fixer des objectifs clairs et mesurables, tels que la facturation 
d'un montant spécifique de ventes par trimestre, puis récompenser progressivement les commerciaux en fonction 
de leur proximité avec l'atteinte ou le dépassement de cet objectif.


.. remarqu :
Les plans basés sur des objectifs diffèrent des plans basés sur les *résultats* car ils reposent sur la réalisation d'un
objectif fixe et prédéfini. Ils se concentrent sur des incitations basées sur les objectifs et les étapes de performance.


Pour configurer un nouveau plan de commission basé sur les objectifs, accédez à :menuselection:`Application Ventes -->
Commissions --> Plans de commission`, puis cliquez sur :guilabel:`Nouveau`. Cliquez dans le menu déroulant :guilabel:`Basé sur`
et sélectionnez :guilabel:`Objectifs`. Ensuite, sélectionnez une option dans le champ :guilabel:`par`.

Dans le champ :guilabel:`Commission sur objectif`, définissez le montant du paiement pour atteindre `100 %` de l'
objectif. Mettez à jour les champs :guilabel:`Période de validité` pour confirmer les dates de ce plan. Ensuite,
mettez à jour le champ :guilabel:`Fréquence des objectifs` en fonction de la fréquence à laquelle les objectifs doivent être fixés et
évalués.

- *Mensuel* : objectifs à court terme avec des paiements fréquents.
- *Trimestriel* : s'aligne sur les cycles économiques et fournit des objectifs à moyen terme.
- *Annuel* : objectifs de vente à long terme pour la planification stratégique.

Une fois le champ :guilabel:`Fréquence cible` mis à jour, l'onglet :guilabel:`Cibles` s'actualise avec une
liste des délais appropriés. Pour chaque :guilabel:`Période`, saisissez un objectif :guilabel:`Cible`.

Dans l'onglet :guilabel:`Accomplissements`, ajoutez une ou plusieurs :ref:`mesures d'Accomplissements
<ventes/commissions/accomplissements>` pour ce plan en cliquant sur :guilabel:`Ajouter une nouvelle Accomplissement`.

Cliquez sur l'onglet :guilabel:`Vendeurs` pour attribuer ce plan au personnel approprié. Cliquez soit sur
:guilabel:`Ajouter un nouveau vendeur` pour les ajouter individuellement, soit sur :guilabel:`Ajouter plusieurs
vendeurs` pour en ajouter plusieurs à la fois.

.. remarque :
Le bouton :guilabel:`Ajouter plusieurs commerciaux` n'est disponible que si
:doc:`../../general/developer_mode` est actif.

Niveaux
-------

Pour offrir une incitation supplémentaire, des *niveaux de commission* peuvent être ajoutés aux plans basés sur des *objectifs*. Ces
niveaux permettent aux commerciaux de gagner des montants de commission variables en fonction de leurs performances. Les niveaux
peuvent commencer à `0 %` et augmenter progressivement. Cela permet aux commerciaux de gagner une commission même s'ils
n'atteignent pas `100 %` de l'objectif, ainsi que la possibilité d'atteindre plus de `100 %` de l'
objectif. Les niveaux de commission peuvent être définis à partir de l'onglet :guilabel:`Commissions` lors de la création d'un plan de commission.

Si aucun niveau n'est ajouté au-dessus de 100 %, les commerciaux ne peuvent **pas** gagner plus que la commission indiquée.

.. exemple::
Dans le plan ci-dessous, les niveaux commencent à `0 %` et vont jusqu'à `300 %`. Si un commercial dépasse
`100 %` de l'objectif prévu, sa rémunération prévue continue d'augmenter jusqu'à `300 %`.

  .. image:: commissions/commission-levels.png
      :alt: Exemple de niveaux de commission, avec des niveaux supérieurs à 100 %.

Plans de commission basés sur les accomplissements
--------------------------------------------------

Dans un plan de commission basé sur les *accomplissements*, les commerciaux gagnent un pourcentage de la valeur de leur facture sous forme de
commission. Les plans basés sur des objectifs sont idéaux pour récompenser les activités commerciales de manière cohérente, indépendamment des
objectifs spécifiques. Par exemple, offrir une commission de « 5 % » sur tous les montants facturés, quel que soit le
montant des ventes.

.. tip::
Les plans basés sur les résultats diffèrent des plans basés sur les *objectifs* car ils sont calculés sur la base des
résultats réels à l'aide d'un taux fixe et constant. Ils sont avantageux pour les plans de rémunération continus et non basés sur des objectifs.

Pour configurer un nouveau plan de commission basé sur des objectifs, accédez à :menuselection:`Application Ventes -->
Commissions --> Plans de commission`, puis cliquez sur :guilabel:`Nouveau`. Cliquez dans le menu déroulant :guilabel:`Basé sur`
et sélectionnez :guilabel:`Réalisations`. Ensuite, sélectionnez une option dans le champ :guilabel:`par`.

Mettez à jour les champs :guilabel:`Période de validité` pour confirmer les dates de ce plan. Ensuite, mettez à jour le champ
:guilabel:`Fréquence des objectifs` en fonction de la fréquence à laquelle les objectifs doivent être fixés et évalués.

Dans l'onglet :guilabel:« Réalisations », ajoutez une ou plusieurs :ref:« Mesures de réalisation
<ventes/commissions/accomplissement> » pour ce plan en cliquant sur :guilabel:« Ajouter une nouvelle réalisation ».

Cliquez sur l'onglet :guilabel:`Vendeurs` pour attribuer ce plan au personnel approprié. Cliquez sur
:guilabel:`Ajouter un nouveau vendeur` pour les ajouter individuellement, ou sur :guilabel:`Ajouter plusieurs
vendeurs` pour en ajouter plusieurs à la fois.

.. _ventes/commissions/accomplissement:

Accomplissement
---------------

La performance peut être mesurée de plusieurs façons dans les plans de performance. Ceux-ci sont configurés dans l'onglet
:guilabel:`Accomplissements` de chaque plan.

- :guilabel:`Montant vendu` : la valeur totale des commandes client (SO).
- :guilabel:`Montant facturé` : la valeur totale des factures confirmées.
- :guilabel:`Quantité vendue` : le nombre total d'unités vendues via les |SOs|.
- :guilabel:`Quantité facturée` : le nombre total d'unités facturées.
- :guilabel:`Marge` : la marge bénéficiaire (prix de vente moins prix de revient).
- :guilabel:`MRR` : le nouveau *revenu mensuel récurrent* provenant des ventes d'abonnements. Cette option n'est
**disponible que** si l'application :doc:`Subscriptions <../../sales/subscriptions>` est installée.

.. note::
   Regardless of what the plan is :guilabel:`Based on`, each plan needs both *Achievements* and
   *Targets* configured.

.. remarque :
Quel que soit le plan :guilabel:`Basé sur`, chaque plan doit comporter à la fois des *Accomplissements* et des
*Objectifs* configurés.

Approbation du plan
===================

Après avoir confirmé les détails du nouveau plan, cliquez sur :guilabel:`Approuver`. Cela fait passer le plan de l'
étape :guilabel:`Brouillon` à l'étape :guilabel:`Approuvé`.

.. important::
Les plans de commissions au stade :guilabel:`Approuvé` **ne peuvent pas** être modifiés. Pour modifier un plan approuvé
, il doit d'abord être :guilabel:`Réinitialisé en brouillon`.

Une fois le plan approuvé, Odoo suit automatiquement les performances et calcule les commissions en fonction des
paramètres établis.

.. voir aussi ::
:doc:`Commissions <../../hr/payroll/commissions>`
