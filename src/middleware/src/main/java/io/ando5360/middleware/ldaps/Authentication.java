package io.ando5360.middleware.ldaps;

import org.springframework.core.env.Environment;
import org.springframework.ldap.core.support.LdapContextSource;

public class Authentication {
    private Environment env;
    private LdapContextSource contextSource;

    public void authenticate(String username, String password) {
        contextSource
            .getContext(
                "cn=" + 
                username + 
                ",ou=users," + 
            env.getRequiredProperty("ldap.partitionSuffix"), password);
    }
}
