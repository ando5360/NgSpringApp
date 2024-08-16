package io.ando5360.app.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import io.ando5360.app.entity.UserPost;
import io.ando5360.app.service.secure.SecurityService;
import io.ando5360.app.service.UserPostService;
import io.ando5360.app.service.UserService;
import java.util.List;
import java.util.stream.Stream;


@Controller
public class GuestbookApiController<PostService, PostStatus> {
    private UserService userService;
    private UserPostService userPostService;
    private SecurityService securityService;
    private 

    @RequestMapping("/api/posts/")
    UserPost getPostById(@PathVariable Long id)
    {
        return this.userPostService.getPostById(id);
    }

    @RequestMapping("/api/posts/")
     List<UserPost> getAllPosts() throws Exception
    {
        return this.userPostService.getAllPosts();
    }

    @RequestMapping("/api/posts/")
    public List<UserPost> getPostsByStatus(@PathVariable PostStatus status)
    {
        return this.getPostsByStatus(status);
    }

    @RequestMapping("/api/posts/")
    public UserPost createPost(@RequestBody UserPost post)
    {
        return this.createPost(post);
    }

    @RequestMapping("/api/posts/")
    public UserPost updatePostStatus(@PathVariable Long id, @RequestBody PostStatus status)
    {
        return this.updatePostStatus(id, status);
    }
}