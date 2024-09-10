import { useState } from "react";
import { Button } from "./Button.js";


export function FormSplitBill({selectedFriend ,onSplitBill}){
  const [bill, setBill] = useState(0); // State to track the bill amount
  const [userPaying, setUserPaying] = useState(0); // State to track user Paying
  const friendPaying =bill?bill - userPaying :""; // Calculate the friend's Paying
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e){
    e.preventDefault();

    if(!bill || !userPaying) return;

    onSplitBill(whoIsPaying ==="user" ?friendPaying :-userPaying);
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
        value={userPaying}
        onChange={(e) =>
          setUserPaying(
            Number(e.target.value) > bill ? userPaying  : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendPaying} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
