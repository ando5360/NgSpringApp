package io.ando5360.app.controller;
import io.ando5360.app.dto.app.UserDTO;
import io.ando5360.app.dto.app.UserPasswordDTO;
import io.ando5360.app.dto.app.UserPostDTO;
import io.ando5360.app.dto.app.UserPostSubmissionDTO;
import io.ando5360.app.dto.vault.VaultResponseDTO;
import io.ando5360.app.service.VaultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.ando5360.app.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GuestbookApiController{
    @Autowired
    private UserService userService;
    @Autowired
    private VaultService vaultService;

    @GetMapping
    String testApi()
    {
        return "app is live";
    }

    @PostMapping("/auth/users/{username}")
    UserDTO loginUser(@PathVariable String username, @RequestBody String password) throws Exception {
        VaultResponseDTO usr = this.vaultService.loginUser(username, password);
        UserDTO userDTO = new UserDTO();
        userDTO.setEntityId(usr.getAuth().getEntity_id());
        userDTO.setAccessorId(usr.getAuth().getAccessor());
        return userDTO;
    }

    @PostMapping("/auth/users/create/{username}")
    UserDTO createUser(@PathVariable String username,  @RequestBody UserPasswordDTO password) throws Exception {
        VaultResponseDTO usr = this.vaultService.createUser(username, password.getPassword());
        if (this.userService.insertNewUser(usr) > 0){
            UserDTO userDTO = new UserDTO();
            userDTO.setEntityId(usr.getAuth().getEntity_id());
            userDTO.setAccessorId(usr.getAuth().getAccessor());
            return userDTO;
        }else{
            throw new Exception();
        }
    }

    @PostMapping("/content/users/post")
    void submitUserPost(@RequestBody UserPostSubmissionDTO usrPost) throws Exception {
        // TODO: CHECK IF USER HAS ACTIVE SESSION
        // GET USERID FOR ENTITYID
        // WRITE POST TO THE DB
        System.out.println(usrPost.getEntityId());
        this.userService.insertUserPost(
                this.userService.findUserIdByEntityId(usrPost.getEntityId()),
                usrPost

        );
    }

    @GetMapping("/content/users/post/all")
    List<UserPostDTO> submitUserPost() throws Exception {
        // TODO: CHECK IF USER HAS ACTIVE SESSION
        return this.userService.getUserPosts();

    }
}