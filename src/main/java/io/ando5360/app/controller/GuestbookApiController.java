package io.ando5360.app.controller;
import io.ando5360.app.entity.UserSecret;
import io.ando5360.app.service.VaultService;
import org.springframework.web.bind.annotation.*;

import io.ando5360.app.entity.UserPost;
import io.ando5360.app.service.UserService;
import java.util.List;


@RestController
public class GuestbookApiController{
    private UserService userService;
    private VaultService vaultService;

    @RequestMapping("/api")
    void loginUser()
    {
        System.out.println("app is live");
    }

    @RequestMapping("/api/posts/:username")
    void loginUser(@PathVariable String username,  @RequestBody UserSecret password)
    {
        this.vaultService.loginUser(username, password);
    }


}