drop table if exists employee;

create table employee(
    empid       int primary key,
    ename       varchar(30),
    designation varchar(20),
    salary      decimal(7, 2)
);