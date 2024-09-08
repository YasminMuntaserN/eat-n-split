import { useState } from "react";
import { Button } from "./Button.js";


export function FormSplitBill({selectedFriend ,onSetExpense ,onDeterminatWhoOwes }){
  const [bill, setBill]=useState(0);
  const [userExpense, setUserExpense]=useState(0);
  const FriendExpense =bill -userExpense  ;

  function handleWhoOwens(e) {
    if (e.target.value === "user") {
      onSetExpense(userExpense);
      onDeterminatWhoOwes("user");
    } else {
      onSetExpense(FriendExpense);
      onDeterminatWhoOwes(selectedFriend.name);
    }
  }

  
  return (
    <form className="form-split-bill" >
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>💰 Bill value</label>
    <input
      type="text" value={bill} onChange={(e)=>{setBill(Number(e.target.value))}}
    />

    <label >🧍‍♀️ Your expense</label>
    <input
      type="text"
      onChange={(e)=>setUserExpense(Number(e.target.value))}
    />

    <label>👫 {selectedFriend.name}'s expense</label>
    <input type="text"
      disabled value={FriendExpense} />
      
    <label>🤑 Who is paying the bill</label>
    <select onChange={handleWhoOwens} >
      <option value="user">You</option>
      <option value="friend">{selectedFriend.name}</option>
    </select>

    <Button>Split bill</Button>
  </form>
  )
}