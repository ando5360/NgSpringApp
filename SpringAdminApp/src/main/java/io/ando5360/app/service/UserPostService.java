package io.ando5360.app.service;

import java.util.List;
import org.springframework.stereotype.Service;
import io.ando5360.app.dto.UserPostDTO;

@Service
public interface UserPostService {

	List<UserPostDTO> getAllPosts() throws Exception;
	UserPostDTO createPost(UserPostDTO  post) throws Exception;
	UserPostDTO getPostsById(Long id) throws Exception;
	void updatePosts(UserPostDTO  post) throws Exception;
	void deletePost(Long id);

	void approvePost(Long id) throws Exception;

}