package org.hsbc.dao;


import org.hsbc.model.Account;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccountDao implements AccountDaoIntf {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void init(){
        System.out.println("jdbcTemplate : " + jdbcTemplate);
        String sql1 = "DROP TABLE accounts IF EXISTS";
        String sql2 = "CREATE TABLE accounts(acctid number(3), aname VARCHAR(20), type varchar(15), bal number(7, 2))";
        jdbcTemplate.execute(sql1);
        jdbcTemplate.execute(sql2);
    }


    public int save(Account ac) {
        String sql = "insert into accounts values(?,?,?,?)";
        return jdbcTemplate.update(sql, ac.getAcctId(), ac.getAcctName(),
                ac.getType(), ac.getBal());
    }

    public int update(Account ac) {
        String sql = "update accounts set bal = ? where acctid = ?";
        return jdbcTemplate.update(sql, ac.getBal(), ac.getAcctId());
    }

    public int deleteById(int id) {
        return jdbcTemplate.update("delete from accounts where acctid = ?", id);
    }

    public List<Account> findAll() {
        return jdbcTemplate.query("select * from accounts", (rs, rowno) ->
                new Account(rs.getInt("acctid"), rs.getString("aname"),
                        rs.getString("type"), rs.getDouble("bal")));
    }
    public int count() {
        String sql = "select count(*) from accounts";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    @Override
    public String getNameById(int id) {
        String sql = "select * from accounts where acctid=?";
        Account ac = jdbcTemplate.queryForObject(sql , new Object[] {id},
                (rs, rowNum) ->  new Account(rs.getInt("acctid"),
                        rs.getString("aname"),  rs.getString("type"), rs.getDouble("bal")));
        return ac.getAcctName();
    }

    @Override
    public List<Account> findByName(String name) {
        String sql = "select * from accounts where aname=?";
        List<Account> list = jdbcTemplate.query(sql , new Object[] {name},
                (rs, rowNum) -> new Account(rs.getInt("acctid"),
                        rs.getString("aname"), rs.getString("type"), rs.getDouble("bal")));
        return list;
    }

}
