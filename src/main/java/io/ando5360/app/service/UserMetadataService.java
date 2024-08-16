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
 }