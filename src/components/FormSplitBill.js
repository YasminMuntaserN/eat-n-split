import { useState } from "react";
import { Button } from "./Button.js";


export function FormSplitBill({selectedFriend ,onSetExpense ,onDetermineWhoOwes,onclickSplitBillButton }){
  const [bill, setBill] = useState(0); // State to track the bill amount
  const [userExpense, setUserExpense] = useState(0); // State to track user expense
  const friendExpense = bill - userExpense; // Calculate the friend's expense

  // Function to handle the selection of who pays
  function handleWhoOwes(e) {
    if (e.target.value === "user") {
      onSetExpense(userExpense); // Set the expense for the user
      onDetermineWhoOwes("user"); // Mark that the user is paying
    } else {
      onSetExpense(friendExpense); // Set the friend's expense
      onDetermineWhoOwes(selectedFriend.name); // Mark that the friend is paying
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))} // Update the bill amount
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        onChange={(e) => setUserExpense(Number(e.target.value))} // Update the user expense
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} /> {/* Friend's expense is calculated */}

      <label>🤑 Who is paying the bill</label>
      <select onChange={handleWhoOwes}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

          <Button action={()=> onclickSplitBillButton(true)}>Split bill</Button>
    </form>
  );
}
