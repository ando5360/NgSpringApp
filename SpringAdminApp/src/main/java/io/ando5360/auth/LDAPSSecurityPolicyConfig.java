package io.ando5360.auth;
package com.example.authenticatingldap;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.Customizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;


@Configuration
public class LDAPSSecurityPolicyConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
      .authorizeHttpRequests((authorize) -> authorize
        .anyRequest().fullyAuthenticated()
      )
      .formLogin(Customizer.withDefaults());

    return http.build();
  }

  /*
   *  TODO: change this to ldaps://
   */

  @Autowired
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth
      .ldapAuthentication()
        .userDnPatterns("uid={0},ou=people")
        .groupSearchBase("ou=groups")
        .contextSource()
          .url("ldap://openldaps-container:8389/dc=btdigital,dc=uk")
          .and()
        .passwordCompare()
          .passwordEncoder(new BCryptPasswordEncoder())
          .passwordAttribute("userPassword");
  }
}

//@Configuration
//public class WebSecurityConfig {

//  @Bean
//  public SecurityFilterChain configure(HttpSecurity http) throws Exception {
//    return http
//      .authorizeRequests()
//      .anyRequest().authenticated()
//      .and()
//      .formLogin(Customizer.withDefaults())
//      .build();
//  }
//}