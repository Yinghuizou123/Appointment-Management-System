package TangChaoSpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@CrossOrigin(origins = "*")
public class TangChaoSpaController {
	@RequestMapping("/")
	public String home() {
		return "Hello World!";
	}
	@RequestMapping("/admin")
	public String admin() {
		return "logout.jsp";
	}
	@RequestMapping("/login")
	public String loginpage() {
		return "login.jsp";
	}
	@RequestMapping("/logout-success")
	public String logoutpage() {
		return "logout.jsp";
	}
}
