package com.ak.springcrud.DTO;

public class CustomerUpdateDTO {



    private int customerid;
    private String customername;
    private String customeraddress;
    private int mobile;

    public CustomerUpdateDTO( int mobile, String customeraddress, String customername) {

        this.mobile = mobile;
        this.customeraddress = customeraddress;
        this.customername = customername;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public CustomerUpdateDTO() {

    }


    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    public String getCustomeraddress() {
        return customeraddress;
    }

    public void setCustomeraddress(String customeraddress) {
        this.customeraddress = customeraddress;
    }

    public String getCustomername() {
        return customername;
    }

    public void setCustomername(String customername) {
        this.customername = customername;
    }

    @Override
    public String toString() {
        return "CustomerDTO{" +
                ", customername='" + customername + '\'' +
                ", customeraddress='" + customeraddress + '\'' +
                ", mobile=" + mobile +
                '}';
    }

}
