package io.ando5360.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.TimerTask;

@SpringBootApplication
public class SpringGuestBookApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringGuestBookApp.class, args);
	}

}
