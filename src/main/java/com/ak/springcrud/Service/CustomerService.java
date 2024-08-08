package com.ak.springcrud.Service;


import com.ak.springcrud.DTO.CustomerDTO;
import com.ak.springcrud.DTO.CustomerSaveDTO;
import com.ak.springcrud.DTO.CustomerUpdateDTO;

import java.util.List;


public interface CustomerService {

    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomer(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}
