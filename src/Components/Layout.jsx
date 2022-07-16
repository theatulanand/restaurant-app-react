import { Restaurants } from '../Components/Restaurants.jsx'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import item from "../Data/db.json"
import { Form } from "./Form"




export default function Layout() {

  let [data, setData] = useState([...item])

  const addData = (payload) => {
    setData([...data,payload]);
  }

  const handleSort = (type) => {
    if(type === "lth"){
      const sortedData = data.sort((a, b) => a.costForTwo - b.costForTwo);
      setData([...sortedData]);
    }else{
      const sortedData = data.sort((a, b) => b.costForTwo - a.costForTwo);
      setData([...sortedData]);
    }
  }

  const handleFilter = (star) => {
    const filteredData = item.filter((el) => el.rating.number >= star);
    setData([...filteredData]);
  }

  const handlePaymentFilter = (type) => {
    if (type === "cash") {
      const filteredData = item.filter((el) => el.payment.cash === true);
      setData([...filteredData]);
    } else if (type === "card"){
      const filteredData = item.filter((el) => el.payment.card === true);
      setData([...filteredData]);
    } else if(type === "upi"){
      const filteredData = item.filter((el) => el.payment.upi === true);
      setData([...filteredData]);
    }else{
      setData([...item]);
    }
  }

  return (
    <>
      <Box sx={{ padding: "50px", display: "flex", justifyContent: "space-between" }}>
        <Box sx={{
          width: "30%",
          height: "500px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "20px"
        }}>
          <Form sort={handleSort} filter={handleFilter} paymentFilter={handlePaymentFilter} addData={addData}/>
        </Box>

        <Box sx={{
          width: "65%",
          height: "500px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          overflow: "scroll",
          scrollbarWidth: "none"
        }}>
          <Restaurants data={data} />
        </Box>
      </Box>
    </>
  )
}
