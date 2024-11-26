===================
LDAP authentication
===================

To configure :abbr:`LDAP (Lightweight Directory Access Protocol)` authentication in Odoo:

#. Open the Settings app, scroll down to the :guilabel:`Integrations` section, and enable
   :guilabel:`LDAP Authentication`.
#. Click :guilabel:`Save`, then go back to the :guilabel:`Integrations` section and click
   :guilabel:`LDAP Server`.
#. In the :guilabel:`Set up your LDAP Server` list, click :guilabel:`New`, then select the required
   company in the dropdown list.
#. In the :guilabel:`Server information` section, enter the server's IP address and port in the
   :guilabel:`LDAP server address` and :guilabel:`LDAP Server port` fields, respectively.
#. Enable :guilabel:`Use TLS` to request secure TLS/SSL encryption when connecting to the LDAP
   server, providing the server has StartTLS enabled.
#. In the :guilabel:`Login information` section, enter the ID and password of the account used to
   query the server in the :guilabel:`LDAP binddn` and :guilabel:`LDAP password` fields,
   respectively. If the fields are left empty, the server will perform the query anonymously.
#. In the :guilabel:`Process parameter` section, enter:

   - the LDAP server's name in the :guilabel:`LDAP base` field using LDAP format
     (e.g., ``dc=example,dc=com``);
   - ``uid=%s`` in the :guilabel:`LDAP filter` field.

#. In the :guilabel:`User information` section:

   - Enable :guilabel:`Create user` to create a user profile in Odoo the first time someone logs in
     using LDAP;
   - Select the :guilabel:`User template` to be used to create the new user profiles. If no template
     is selected, the administrator's profile is used.

.. note::
   When using Microsoft Active Directory (AD) for LDAP authentication, if users experience login
   issues despite using valid credentials, create a new system parameter to disable referral chasing
   in the LDAP client:

    #. :ref:`Activate the developer mode. <developer-mode>`
    #. Go to :menuselection:`Settings --> Technical --> System Parameters` and click
       :guilabel:`New`.
    #. Fill in the fields:

       - :guilabel:`Key`: ``auth_ldap.disable_chase_ref``
       - :guilabel:`Value`: ``True``
