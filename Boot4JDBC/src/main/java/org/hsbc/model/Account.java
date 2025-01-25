package org.hsbc.model;

public class Account {
    int acctId;
    String acctName, type;
    double bal;

    public Account() {
    }

    public Account(int acctId, String acctName, String type, double bal) {
        this.acctId = acctId;
        this.acctName = acctName;
        this.type = type;
        this.bal = bal;
    }

    public int getAcctId() {
        return acctId;
    }

    public void setAcctId(int acctId) {
        this.acctId = acctId;
    }

    public String getAcctName() {
        return acctName;
    }

    public void setAcctName(String acctName) {
        this.acctName = acctName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getBal() {
        return bal;
    }

    public void setBal(double bal) {
        this.bal = bal;
    }
}
