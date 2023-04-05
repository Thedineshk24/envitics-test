import React, { useEffect, useState } from 'react'
import { employeeData } from '../static/employeeData';

const useGetEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = () => {
            // const data = await fetch("http://dummy.restapiexample.com/api/v1/employees");
            // const res = await data.json();
            // console.log("res",res)
            setEmployees(employeeData.data);
        }
        getEmployees()
    },[]);

    return employees;
}

export default useGetEmployees;
