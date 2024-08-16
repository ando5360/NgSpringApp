package io.ando5360.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimerTask;

@SpringBootApplication
public class SpringGuestBookApp {
	public static void main(String[] args) {
		SpringApplication.run(SpringGuestBookApp.class, args);
	}

	TimerTask repeatedTask = new TimerTask() {
		public void run() {
			syncState();
		}
	};
}
