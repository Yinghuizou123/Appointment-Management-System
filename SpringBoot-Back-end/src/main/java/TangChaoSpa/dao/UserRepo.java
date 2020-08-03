package TangChaoSpa.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import TangChaoSpa.model.User;

public interface UserRepo extends JpaRepository<User,Long>{
	User findByUsername(String username);
}
