package org.hsbc;

import org.springframework.context.ApplicationContext;
import org.hsbc.client.AccountClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Boot4JdbcApplication {

	public static void main(String[] args) {

		ApplicationContext ctx = SpringApplication.run(Boot4JdbcApplication.class, args);
		AccountClient client = ctx.getBean("accountClient", AccountClient.class);
		client.testDao();
	}

}
