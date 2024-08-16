package io.ando5360.app.repo;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import io.ando5360.app.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo 
extends CrudRepository<User, Long> {
	
	Optional<User> findByUsername(String username);
	User findByUserId(long id);
}