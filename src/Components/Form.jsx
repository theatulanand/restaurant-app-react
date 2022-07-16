import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { v4 as uuid } from 'uuid';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Form = ({ sort, filter, paymentFilter, addData }) => {
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [votes, setVotes] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [cash,setCash] = React.useState(false);
  const [card,setCard] = React.useState(false);
  const [upi,setUpi] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(name === "" || cost === "" || votes === "" || rating === "" || categories === ""){
      alert("Fill all details");
      return;
    }

    if(rating > 5 || rating <= 0){
      alert("Enter Correct Rating");
      return;
    }
    createPayload();
  };

  const createPayload = () => {
    var str = "";

    for (let i = 0; i < rating; i++) {
      str += "⭐"
    }

    alert(name + " added")
    const payload = {
      id: uuid(),
      name: name,
      costForTwo: cost,
      categories: categories,
      votes: votes,
      rating: {
        number: rating,
        star: str
      },
      payment: {
        card: card,
        cash: cash,
        upi: upi
      }
    }

    addData(payload)
  }


  return (
    <div>
      <h2>Sort</h2>
      <div style={{ display: "flex", gap: "5px" }}>
        <Button variant="contained" onClick={() => { sort("lth") }}>Low To High</Button>
        <Button variant="contained" onClick={() => sort("htl")}>High To Low</Button>
      </div>
      <br />
      <h2>Filter By Ratings</h2>
      <div style={{ display: "flex", gap: "5px" }}>
        <Button variant="contained" onClick={() => filter(1)}>⭐</Button>
        <Button variant="contained" onClick={() => filter(2)}>⭐⭐</Button>
        <Button variant="contained" onClick={() => filter(3)}>⭐⭐⭐</Button>
        <Button variant="contained" onClick={() => filter(4)}>⭐⭐⭐⭐</Button>
      </div>
      <br />
      <h2>Filter By Payment</h2>
      <div style={{ display: "flex", gap: "5px" }}>
        <Button variant="contained" onClick={() => paymentFilter("cash")}>Cash</Button>
        <Button variant="contained" onClick={() => paymentFilter("card")}>Card</Button>
        <Button variant="contained" onClick={() => paymentFilter("upi")}>UPI</Button>
        <Button variant="contained" onClick={() => paymentFilter("all")}>All</Button>
      </div>
      <br />
      <div>
        <Button onClick={() => handleClickOpen()} sx={{ marginLeft: "20%", marginTop: "10%", backgroundColor: "green" }} variant="contained">Add Restaurant</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Restaurant</DialogTitle>
          <DialogContent>
            <TextField
              required
              fullWidth
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br />
            <TextField
              required
              fullWidth
              autoFocus
              margin="dense"
              id="name"
              label="Cost for two"
              type="number"
              variant="standard"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            /><br />
            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              id="name"
              label="Categories"
              type="email"
              variant="standard"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            /><br />
            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              id="name"
              label="Votes"
              type="number"
              variant="standard"
              value={votes}
              onChange={(e) => setVotes(e.target.value)}
            /><br />
            <TextField
              required
              fullWidth
              autoFocus
              margin="dense"
              id="name"
              label="Rating"
              type="number"
              variant="standard"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            /><br />
            <h4>Payment Method</h4>
            <FormControlLabel
              value={cash}
              onChange={() => {
                setCash(!cash);
              }}
              control={<Checkbox />}
              label="Cash"
            />
            <FormControlLabel
              value={card}
              onChange={() => {
                setCard(!card);
              }}
              control={<Checkbox />}
              label="Card"
            />
            <FormControlLabel
              value={upi}
              onChange={() => {
                setUpi(!upi);
              }}
              control={<Checkbox />}
              label="UPI"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Add</Button>
            <Button onClick={()=>{
              setOpen(false);
            }}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
