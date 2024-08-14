package io.ando5360.app.controller;
import org.springframework.web.bind.annotation.*;

import io.ando5360.app.entity.UserPost;
import io.ando5360.app.service.secure.SecurityService;
import io.ando5360.app.service.UserPostService;
import io.ando5360.app.service.UserService;
import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api")
public class GuestbookApiController<PostService, PostStatus> {
    private UserService userService;
    private UserPostService userPostService;
    private SecurityService securityService;
    private 

    @GetMapping("/api/posts/")
    UserPost getPostById(@PathVariable Long id) {
        return this.userPostService.getPostById(id);
    }

    @GetMapping("/posts")
    Stream<UserPost> getAllPosts() throws Exception {
        return this.userPostService.getAllPosts().stream();
    }

    @GetMapping("/posts/status/{status}")
    public List<UserPost> getPostsByStatus(@PathVariable PostStatus status) {
        return this.getPostsByStatus(status);
    }

    @PostMapping("/posts")
    public UserPost createPost(@RequestBody UserPost post) {
        return this.createPost(post);
    }

    @PutMapping("/posts/{id}/status")
    public UserPost updatePostStatus(@PathVariable Long id, @RequestBody PostStatus status) {
        return this.updatePostStatus(id, status);
    }
}