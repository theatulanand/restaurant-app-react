import { Box } from '@mui/material'
import React from 'react'

export function Card({name,star,type,cost,payment}) {
  return (
    <Box sx={{padding: "5px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Box sx={{display: "flex",gap:"20px"}}>
            <Box>
                <img style={{width: "140px", height: "180px" , borderRadius: "10px"}} src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </Box>
            <Box>
                <h3 style={{height: "10px"}}>{name}</h3>
                <p style={{height: "10px"}}>{star}</p>
                <p style={{height: "10px", color:"gray"}}>{type}</p>
                <p style={{height: "10px", color:"gray"}}>Cost ₹{cost/2} for one</p>
                <p style={{color: "red"}}>Accept {payment.cash === true ? "cash,": ""}{payment.card === true ? " card &": ""} {payment.upi === true ? " UPI": ""}</p>
            </Box>
        </Box>
        <Box>
            <div style={{display:"flex", flexDirection: "row-reverse"}}>
                <button style={{
                    border: "none",
                    fontSize: "18px",
                    backgroundColor : "#E7FCE5",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "#126D02"
                }}>Order Online</button>
            </div>
        </Box>
    </Box>
  )
}
