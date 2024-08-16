package io.ando5360.app.service;

import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import io.ando5360.app.entity.User;
import io.ando5360.app.repo.UserRepo;

@Service
public class UserService extends UserMetadataService {
	UserRepo userRepository;


	public User loadUserByUsername(String username) 
		throws UsernameNotFoundException 
	{
		User user = userRepository
			.findByUsername(username)
			.get();
		return user;

	}

	public User createUser(User user) throws Exception {

		Optional<User> userOpt = userRepository.findByUsername(user.getUsername());
		if (userOpt.isPresent())
		{
			throw new Exception("Record already exists! Please try different User name");
		}
		User entity = new User();
		entity.setUsername(user.getUsername());
		entity.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		entity.setActive(Boolean.TRUE);
		User save = userRepository.save(entity);
		BeanUtils.copyProperties(save, user);

		return user;
	}


	public User getLoggerInUser() throws Exception 
	{
		return null;
	}

}