package com.ak.springcrud.Service;

import com.ak.springcrud.CustomerRepo.CustomerRepo;
import com.ak.springcrud.DTO.CustomerDTO;
import com.ak.springcrud.DTO.CustomerSaveDTO;
import com.ak.springcrud.DTO.CustomerUpdateDTO;
import com.ak.springcrud.Entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceIMPL implements CustomerService{

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public String addCustomer(CustomerSaveDTO customerSaveDTO)
    {
        Customer customer = new Customer(

                customerSaveDTO.getCustomername(),
                customerSaveDTO.getCustomeraddress(),
                customerSaveDTO.getMobile() );

        customerRepo.save(customer);
        return customer.getCustomername();
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> getCustomers = customerRepo.findAll();
        List<CustomerDTO> customerDTOList = new ArrayList<>();
        for (Customer a: getCustomers)
        {
            CustomerDTO customerDTO = new CustomerDTO(
                    a.getCustomerid(),
                    a.getCustomername(),
                    a.getCustomeraddress(),
                    a.getMobile()
            );
            customerDTOList.add(customerDTO);
        }

        return customerDTOList;
    }

    @Override
    public String updateCustomer(CustomerUpdateDTO customerUpdateDTO)
    {
        if(customerRepo.existsById(customerUpdateDTO.getCustomerid()))
        {
            Customer customer = customerRepo.getById(customerUpdateDTO.getCustomerid());

            customer.setCustomername(customerUpdateDTO.getCustomername());
            customer.setMobile(customerUpdateDTO.getMobile());
            customer.setCustomeraddress(customerUpdateDTO.getCustomeraddress());

            customerRepo.save(customer);

        }
        else
        {
            System.out.println("Customer ID do not Exit");

        }

        return null;
    }

    @Override
    public boolean deleteCustomer(int id)
    {
        if(customerRepo.existsById(id))
        {
            customerRepo.deleteById(id);
        }
        else{
            System.out.println("Customer ID not found");
        }
        return false;
    }
}
