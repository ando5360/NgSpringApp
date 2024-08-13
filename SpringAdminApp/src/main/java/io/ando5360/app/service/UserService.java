package io.ando5360.app.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.ando5360.app.dto.UserDTO;
import io.ando5360.app.entity.Role;
import io.ando5360.app.entity.User;
import io.ando5360.app.repo.UserRepository;

@Service
public class UserService implements UserDetailsService {

	private static Logger log 
	= LogManager.getLogger(UserService.class);

	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) 
		throws UsernameNotFoundException 
	{
		Optional<User> user = 
		userRepository
			.findByUserName(userName);

		user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));
		return user
				.map(UserDetails::new)
				.get();
	}

	/**
	 * @param userName
	 * @return
	 * @throws UsernameNotFoundException
	 */
	public User findUserByUsername(String userName) throws UsernameNotFoundException {
		log.debug("findUserByUsername() function call");
		return userRepository.findByUserName(userName)
				.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));
	}

	/**
	 * @param user
	 * @return
	 * @throws Exception
	 */
	public User createUser(UserDTO user) throws Exception {

		Optional<User> userOpt = userRepository.findByUserName(user.getUserName());
		if (userOpt.isPresent())
			throw new Exception("Record already exists! Please try different User name");

		User entity = new User();
		entity.setUserName(user.getUserName());
		entity.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		entity.setActive(Boolean.TRUE);
		Set<Role> roles = new HashSet<>();
		roles.add(new Role(2L));
		entity.setRoles(roles);
		User save = userRepository.saveAndFlush(entity);
		BeanUtils.copyProperties(save, user);

		return user;
	}

	
    @Override
    public UserDetails getUserDetails(String email)
      throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return new userdetails.User(
              " ", " ", true, true, true, true, 
              getAuthorities(Arrays.asList(
                roleRepository.findByName("ROLE_USER")))
			);
        }

        return new userdetails.User(
									user.getEmail(), 
									user.getPassword(), 
									user.isEnabled(), 
									true, 
									true, 
									true, getAuthorities(user.getRoles())
									);
    }

    private Collection<? extends GrantedAuthority> getAuthorities(
      Collection<Role> roles) {
        
        return getGrantedAuthorities(getPrivileges(roles));
    }
	public User getLoggerInUser() throws Exception {
		Principal principal 
			= Optional.ofNullable(getPrincipal())
			.orElseThrow(() -> new Exception("User not found"));

		return userService.findUserByUsername(principal.getUserName());
	}

}