import { Box } from '@mui/system'
import React from 'react'
import { Card } from './Card'

export const Restaurants = ({ data }) => {

    console.log(data,"react")

    return (
        <>
            <Box sx={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap:"20px"}}>
                {data.map((el) => {
                    return <Card key={el.id} 
                    name={el.name} 
                    star= {el.rating.star}
                    type= {el.categories}
                    cost= {el.costForTwo}
                    payment = {el.payment}
                    />
                })}
            </Box>
        </>
    )
}
