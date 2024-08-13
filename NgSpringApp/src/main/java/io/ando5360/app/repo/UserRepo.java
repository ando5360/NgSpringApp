package io.ando5360.app.repo;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import io.ando5360.app.entity.User;

public interface UserRepo 
extends CrudRepository<User, Long> {
	
	Optional<User> findByUserName(String userName);
	User findByUserId(long id);
}