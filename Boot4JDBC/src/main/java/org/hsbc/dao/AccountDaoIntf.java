package org.hsbc.dao;

import org.hsbc.model.Account;

import java.util.List;

public interface AccountDaoIntf {
    public int count();
    public int save(Account account);
    public int update(Account account);
    public int deleteById(int id);
    public List<Account> findAll();
    public List<Account> findByName(String name);
    public String getNameById(int i);

}
