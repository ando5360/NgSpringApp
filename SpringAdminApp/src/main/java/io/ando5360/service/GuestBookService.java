package io.ando5360.app.service;


import java.util.List;

import com.guestbook.dto.PostsDto;


@Controller
public interface GuestBookController {

	List<PostsDto> getAllPosts() throws Exception;

	PostsDto createPost(PostsDto post) throws Exception;

	PostsDto getPostsById(Long id) throws Exception;

	void updatePosts(PostsDto post) throws Exception;

	void deletePost(Long id);

	void approvePost(Long id) throws Exception;

}