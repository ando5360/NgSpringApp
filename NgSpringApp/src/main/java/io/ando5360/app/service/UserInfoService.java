package io.ando5360.app.service;
import javax.naming.directory.Attributes;
import org.springframework.ldap.NamingException;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.LdapClient;
import org.springframework.stereotype.Service;

import io.ando5360.app.entity.User;
import io.ando5360.app.pojo.UserMetaData;
import io.ando5360.app.repo.UserRepo;

@Service
public class UserInfoService{

    private LdapClient ldapClient;
    private UserRepo userRepo;

   public void setLdapClient(LdapClient ldapClient) {
      this.ldapClient = ldapClient;
   }

    private class UserAttributesMapper implements AttributesMapper<UserInfo> {
       public UserInfo mapFromAttributes(Attributes attrs) throws NamingException {
          ldapClient.authenticate();
          UserInfo userDetails = new UserInfo();
          try {
            userDetails.setDescription((String)attrs.get("sn").get());
            userDetails.setFavouriteFood((String)attrs.get("sn").get());
            userDetails.setDescription((String)attrs.get("description").get());
            userDetails.setNickname((String)attrs.get("hometown").get());
            userDetails.setFunfact((String)attrs.get("nickname").get());
         } catch (javax.naming.NamingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         }
          return userDetails;
       }
    }
   
    public Iterable<User> getAllUsers() {
       return this.userRepo.findAll();
    }
 }