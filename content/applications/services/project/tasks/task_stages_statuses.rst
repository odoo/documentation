========================
Étapes et statuts des tâches
========================

Étapes des tâches
=================

Les étapes des tâches sont affichées sous forme de colonnes dans la vue Kanban du projet et permettent de mettre à jour l'avancement des tâches par glisser-déposer. Dans la plupart des projets, les étapes seront similaires à **Nouveau**, **En cours**, **Backlog**, etc.

Par défaut, les étapes des tâches sont spécifiques à un projet, mais peuvent être partagées entre plusieurs projets suivant le même flux de travail.

Création d'étapes de tâches
---------------------------

Odoo Projet ne fournit pas d'étapes par défaut, mais permet plutôt de créer des étapes personnalisées adaptées à vos besoins métiers spécifiques. Vous êtes invité à le faire immédiatement après la :ref:`création d'un nouveau projet <project_management/configuration>`.

Pour créer une étape, saisissez son nom dans le champ :guilabel:`Étape...`, puis cliquez sur :guilabel:`Ajouter`.

.. tip::
   Cliquez sur :guilabel:`Voir les exemples` pour trouver des idées de noms d'étapes applicables à votre secteur d'activité.

Édition des étapes de tâches
----------------------------

Pour modifier une étape de tâche, cliquez sur l'icône :icon:`fa-cog` (:guilabel:`rouage`) à côté de son nom. À partir de là, cliquez sur l'une des options suivantes :

 - :guilabel:`Replier` : pour masquer l'étape de tâche et toutes les tâches de cette étape dans la vue Kanban.
 - :guilabel:`Modifier` :

   - :guilabel:`Nom` : pour changer le nom de l'étape.
   - :guilabel:`Modèle SMS/Email` : pour envoyer automatiquement une notification par email ou SMS au client lorsqu'une tâche atteint cette étape.
   - :guilabel:`Replié` : pour masquer l'étape de tâche et toutes les tâches de cette étape dans la vue Kanban.
   - :guilabel:`Projets` : pour partager cette étape de tâche entre plusieurs projets.
 
 - :guilabel:`Automatisations` : pour créer des :doc:`règles personnalisées déclenchant des actions automatiques <../../../studio/automated_actions>` (par exemple, créer des activités, ajouter des suiveurs ou envoyer des notifications via webhook). Notez que cela activera Studio dans votre base de données, ce qui peut avoir un impact sur votre forfait tarifaire.
 - :guilabel:`Supprimer` : pour supprimer cette étape.
 - :guilabel:`Archiver/Tout désarchiver` : pour archiver ou désarchiver toutes les tâches de cette étape.

.. _project/tasks/task_stages_statuses/statuses:

Statuts des tâches
==================

Les statuts des tâches permettent de suivre l'état des tâches au sein de l'étape Kanban, ainsi que de clore la tâche lorsqu'elle est terminée ou annulée. Contrairement aux étapes Kanban, ils ne peuvent pas être personnalisés ; cinq statuts de tâche existent dans Odoo et sont utilisés comme suit :

 - :guilabel:`En cours` : il s'agit de l'état par défaut de toutes les tâches, indiquant que le travail nécessaire pour passer à l'étape Kanban suivante est en cours.
 - :guilabel:`Changements demandés` : pour indiquer que des modifications, demandées par le client ou en interne, sont nécessaires avant que la tâche ne passe à l'étape Kanban suivante.
 - :guilabel:`Approuvé` : pour indiquer que la tâche est prête à passer à l'étape suivante.
 - :guilabel:`Annulé` : pour annuler la tâche.
 - :guilabel:`Terminé` : pour clore la tâche une fois qu'elle est achevée.

.. note::

   - Les statuts de tâche :guilabel:`Changements demandés` et :guilabel:`Approuvé` sont réinitialisés dès que la tâche est déplacée vers une autre étape Kanban. Le statut de la tâche revient au statut par défaut :guilabel:`En cours`, de sorte que les statuts :guilabel:`Changements demandés` ou :guilabel:`Approuvé` puissent être réappliqués une fois le travail nécessaire terminé dans cette étape Kanban.
   - Les statuts :guilabel:`Terminé` et :guilabel:`Annulé` sont indépendants de l'étape Kanban. Une fois qu'une tâche est marquée comme :guilabel:`Terminé` ou :guilabel:`Annulé`, elle est close. Si nécessaire, elle peut être rouverte en modifiant son statut.
