package io.ando5360.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.ando5360.app.entity.UserPost;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class SpringGuestBookAppController<PostService> {
    private final PostService postService;

    public SpringGuestBookAppController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/posts/{id}")
    public Optional<UserPost> getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @GetMapping("/posts")
    public List<UserPost> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/posts/status/{status}")
    public List<UserPost> getPostsByStatus(@PathVariable PostStatus status) {
        return postService.getPostsByStatus(status);
    }

    @PostMapping("/posts")
    public UserPost createPost(@RequestBody UserPost post) {
        return postService.createPost(post);
    }

    @PutMapping("/posts/{id}/status")
    public UserPost updatePostStatus(@PathVariable Long id, @RequestBody PostStatus status) {
        return postService.updatePostStatus(id, status);
    }
}