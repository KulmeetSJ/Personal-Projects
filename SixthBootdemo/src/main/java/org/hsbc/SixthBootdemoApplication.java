package org.hsbc;

import org.hsbc.client.TestEmpDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SixthBootdemoApplication {

    public static void main(String[] args) {

        ApplicationContext ctx = SpringApplication.run(SixthBootdemoApplication.class, args);
        TestEmpDao dao = ctx.getBean("testEmpDao", TestEmpDao.class);
        dao.testDao();
    }

}
