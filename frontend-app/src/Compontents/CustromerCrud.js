import axios from "axios";
import { useEffect, useState } from "react";

function CustomerCrud() {
    const [customerid, setID] = useState('');
    const [Customername, setName] = useState("");
    const [customeraddress, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [customers, setUsers] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {
        try {
            const result = await axios.get("http://localhost:8090/api/v1/customer/getAllCustomer");
            setUsers(result.data);
            console.log(result.data);
        } catch (err) {
            console.error("Error loading customers:", err);
        }
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8090/api/v1/customer/save", {
                customername: Customername,
                customeraddress: customeraddress,
                mobile: mobile
            });
            alert("Customer Registration Successfully!!!");
            setID("");
            setName("");
            setAddress("");
            setMobile("");
            Load();
        } catch (err) {
            alert("User Registration Failed!!");
            console.error("Error saving customer:", err.response ? err.response.data : err.message);
        }
    }

    async function editcustomers(customer) {
        setName(customer.Customername);
        setAddress(customer.customeraddress);
        setMobile(customer.mobile);
        setID(customer.customerid);
    }

    async function DeleteCustomer(customerid) {
        try {
            await axios.delete("http://localhost:8090/api/v1/customer/deletecustomer/" + customerid);
            alert("Customer Deleted Successfully!!!");
            Load();
        } catch (err) {
            console.error("Error deleting customer:", err.response ? err.response.data : err.message);
        }
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8090/api/v1/customer/update", {
                customerid: customerid,
                customername: Customername,
                customeraddress: customeraddress,
                mobile: mobile
            });
            alert("Registration Updated!!!");
            setID("");
            setName("");
            setAddress("");
            setMobile("");
            Load();
        } catch (err) {
            alert("User Registration Update Failed!!!");
            console.error("Error updating customer:", err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
            <h1>Customer Details</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="customerid" hidden
                            value={customerid}
                            onChange={(event) => {
                                setID(event.target.value);
                            }}
                        />

                        <label>Customer Name</label>
                        <input type="text" className="form-control" id="customername"
                            value={Customername}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Customer Address</label>
                        <input type="text" className="form-control" id="customeraddress"
                            value={customeraddress}
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" id="mobile"
                            value={mobile}
                            onChange={(event) => {
                                setMobile(event.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <button className="btn btn-primary mt-4" onClick={save}>Register</button>
                        <button className="btn btn-warning mt-4" onClick={update}>Update</button>
                    </div>
                </form>
            </div>

            <table className="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Customer Id</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Customer Mobile</th>
                        <th scope="col">Option</th> 
                    </tr>
                </thead>
                    {customers.map( function fn(customer) {
                        return (
                            <tbody key={customer.customerid}>
                                <tr>
                                    <th scope="row">{customer.customerid}</th>
                                    <td>{customer.customername}</td>
                                    <td>{customer.customeraddress}</td>
                                    <td>{customer.mobile}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning" onClick={() => editcustomers(customer)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => DeleteCustomer(customer.customerid)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
            </table>
        </div>
    );
}

export default CustomerCrud;
