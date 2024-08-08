package io.ando5360.middleware.ldaps;

import java.util.List;
import javax.naming.ldap.LdapName;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.ldap.support.LdapNameBuilder;

import io.netty.handler.codec.base64.Base64;

import org.springframework.ldap.core.LdapTemplate;

public class LdapModify {

    LdapTemplate ldapTemplate;

    public void modify(String username, String password) {
        LdapName dn = LdapNameBuilder.newInstance()
        .add("ou", "users")
        .add("cn", username)
        .build();
        DirContextOperations context 
        = ldapTemplate.lookupContext(dn);

        context.setAttributeValues
        ("objectclass", 
            new String[] 
                { "top", 
                "person", 
                "organizationalPerson", 
                "inetOrgPerson" });
        context.setAttributeValue("cn", username);
        context.setAttributeValue("sn", username);
        context.setAttributeValue("userPassword", password);

        ldapTemplate.modifyAttributes(context);
    }

    public List<String> search(String username) {
        return ldapTemplate
        .search(
            "ou=users", 
            "cn=" + username, 
            (AttributesMapper<String>) attrs -> (String) attrs.get("cn").get());
    }

}
