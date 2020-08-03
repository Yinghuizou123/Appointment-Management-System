package TangChaoSpa.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import TangChaoSpa.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Integer>{
	 List<Customer> findByPhone(String phone);
	 List<Customer> findByName(String name);
}
