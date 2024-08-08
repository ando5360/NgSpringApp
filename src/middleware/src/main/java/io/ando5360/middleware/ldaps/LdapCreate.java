package io.ando5360.middleware.ldaps;

import javax.naming.ldap.LdapName;

import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.support.LdapNameBuilder;

public class LdapCreate {
    
    LdapTemplate ldapTemplate;

    public  void create(String username, String password) {
        LdapName name = LdapNameBuilder
        .newInstance()
        .add("ou", "users")
        .add("cn", username)
        .build();

        DirContextAdapter context = new DirContextAdapter(name);

        context.setAttributeValues(
        "objectclass", 
        new String[] 
            { "top", 
            "person", 
            "organizationalPerson", 
            "inetOrgPerson" });
        context.setAttributeValue("cn", username);
        context.setAttributeValue("sn", username);
        context.setAttributeValue("userPassword", password);

        ldapTemplate.bind(context);
    }
}
