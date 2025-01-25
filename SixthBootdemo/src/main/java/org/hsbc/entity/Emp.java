package org.hsbc.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class Emp {
    @Id
    private int empid;
    private String ename;
    private double salary;
    private String designation;

    public Emp(){
    }

    public Emp(int empid, String ename, double salary, String designation) {
        this.empid = empid;
        this.ename = ename;
        this.salary = salary;
        this.designation = designation;
    }

    public int getEmpid() {
        return empid;
    }

    public void setEmpid(int empid) {
        this.empid = empid;
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    @Override
    public String toString() {
        return "Emp{" + "empid=" + empid + ", ename=" + ename + ", salary=" + salary + ", designation=" + designation + '}';
    }
}
