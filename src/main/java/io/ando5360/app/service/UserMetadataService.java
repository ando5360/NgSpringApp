package io.ando5360.app.service;
import org.springframework.context.annotation.Bean;
import org.springframework.ldap.core.LdapClient;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.stereotype.Service;

import io.ando5360.app.entity.User;
import io.ando5360.app.repo.UserRepo;

@Service
public class UserMetadataService{

    private LdapClient ldapClient;
    private UserRepo userRepo;

    @Bean
    public LdapContextSource contextSource() {
        LdapContextSource contextSource = new LdapContextSource();

        contextSource.setUrl(env.getRequiredProperty("ldap.urls"));
        contextSource.setBase(
                env.getRequiredProperty("ldap.partitionSuffix"));
        contextSource.setUserDn(
                env.getRequiredProperty("ldap.principal"));
        contextSource.setPassword(
                env.getRequiredProperty("ldap.password"));
        return contextSource;
    }


   public void setLdapClient(LdapClient ldapClient) {
      this.ldapClient = ldapClient;
   }

   
    public Iterable<User> getAllUsers() {
       return this.userRepo.findAll();
    }
 }