package io.ando5360.app.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import io.ando5360.app.entity.UserPost;
import io.ando5360.app.repo.UserPostRepo;

@Service
public class UserPostService{
	UserPostRepo repo;

	public List<UserPost> getAllPosts()
	{
		return new ArrayList<UserPost>()
		{
			{
				repo.findAll()
					.iterator()
					.forEachRemaining(
						(x) -> this.add(x)
				);
			}
		};
	}

	public UserPost getPostById(Long id)
	{
		return repo.getPostById(id);
	};

	public boolean updatePosts(UserPost  post)
	{
		return updatePosts(post);

	};

	public void deletePost(Long id)
	{
		// CHECK CALLER IS DELETIGN THERE OWN POST OR HAS 
		// correct auth with security context first
		repo.deleteById(id);
	};

	public void approvePost(Long id){
		//Check caller has correct auth with security context first

	};
}