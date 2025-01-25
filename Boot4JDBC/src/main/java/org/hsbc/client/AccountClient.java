package org.hsbc.client;

import org.hsbc.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import org.hsbc.dao.AccountDao;

import java.util.Arrays;
import java.util.List;

@Component
public class AccountClient {
    @Autowired
    AccountDao accountDao;

    public void testDao(){
        List<Account> acctList = Arrays.asList(
                new Account(1,"aaa","savings",100),
                new Account(2,"bbb","current",200),
                new Account(3,"ccc","savings",300),
                new Account(4,"ddd","current",400)
        );
        acctList.forEach(accountDao::save);
        System.out.println(accountDao.count());
        accountDao.findAll().forEach(System.out::println);
        System.out.println(accountDao.getNameById(3));
        System.out.println("------ deleteting account id 3 -----");
        accountDao.deleteById(3);
        accountDao.findAll().forEach(System.out::println);
    }


}
