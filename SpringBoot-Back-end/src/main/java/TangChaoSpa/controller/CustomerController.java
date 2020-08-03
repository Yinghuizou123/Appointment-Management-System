package TangChaoSpa.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TangChaoSpa.dao.CustomerRepo;
import TangChaoSpa.model.Customer;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

	@Autowired
	CustomerRepo repo;

	// Get information about customer
	@GetMapping(path = "/allCustomer", produces = "application/json")
	public List<Customer> getCustomers() {
		return repo.findAll();
	}

	@GetMapping(path = "/getbyPhone/{phone}")
	public List<Customer> getbyPhone(@PathVariable("phone") String phone) {
		return repo.findByPhone(phone);
	}

	@GetMapping(path = "/getbyName/{name}")
	public List<Customer> getbyName(@PathVariable("name") String name) {
		return repo.findByName(name);
	}

	@GetMapping(path = "/getbyId/{id}")
	public Optional<Customer> getbyName(@PathVariable("id") int id) {
		return repo.findById(id);
	}

	// add new customer
	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer) {
		customer.setCompleted(false);
		repo.save(customer);
		return customer;
	}

	// update new customer
	@PutMapping(path = "/updateCustomer")
	public Customer SaveOrUpdateCustomer(@RequestBody Customer customer) {
		customer.setCompleted(false);
		repo.save(customer);
		return customer;
	}

	@PutMapping(path = "/changeCustomerCompleted/{id}")
	public String ChangeCompletedStatus(@PathVariable("id") int id) {
		Customer customer = repo.getOne(id);
		customer.setCompleted(!customer.isCompleted());
		repo.save(customer);
		return "Customer Completed status get update";
	}

	// delete new customer
	@DeleteMapping("/deleteCustomer/{id}")
	public String deleteCustomer(@PathVariable("id") int id) {
		Customer customer = repo.getOne(id);
		repo.delete(customer);
		return "Customer get delete";
	}

	private Date getDate() {
		Date date = new Date();
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		formatter.setTimeZone(TimeZone.getTimeZone("EST"));
		String temp = formatter.format(date);
		try {
			date = formatter.parse(temp);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return date;
	}

}