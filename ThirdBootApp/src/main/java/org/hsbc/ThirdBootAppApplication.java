package org.hsbc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ThirdBootAppApplication {

	public static void main(String[] args) {

//		SpringApplication.run(ThirdBootAppApplication.class, args);
		ApplicationContext ctx = SpringApplication.run(ThirdBootAppApplication.class, args);


	}

}
