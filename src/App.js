import {FriendsList} from "./components/FriendsList.js";
import {FormSplitBill} from "./components/FormSplitBill.js";
import{FormAddFrined}from "./components/FormAddFriend.js";
import{Button}from "./components/Button.js";
import { useState } from "react";


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(null); // useState to handle the selected friend
  const [expense, setExpense] = useState(0); // State to track expense
  const [whoOwes, setWhoOwes] = useState(""); // State to track who owes
  const [clickSplitBillButton, setClickSplitBillButton] = useState(false); // State to track split bill button click
  const [clickSelectButton, setClickSelectButton] = useState(false); // State to track select button click

  console.log(`Expense from App: ${expense}`);
  console.log(`whoOwes from App: ${whoOwes}`);
  console.log(`selectedFriend: ${selectedFriend?.name}`);
  console.log(`clickSplitBillButton: ${clickSplitBillButton}`);


  return (
    <div className="app">
      <div className="sidebar">
      <FriendsList
        friendList={initialFriends}
        onSelectedFriend={setSelectedFriend} // Pass the function to change selected friend
        selectedFriend={selectedFriend}
        expense={expense} // Passing the current expense state
        whoOwes={whoOwes} // Passing the current "who owes" state
        clickSplitBillButton={clickSplitBillButton}
        onclickSelectButton={setClickSelectButton}
      />
      <FormAddFrined/>
      <Button>Add Friend</Button>
      </div>


      {clickSelectButton && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSetExpense={setExpense}
          onDetermineWhoOwes={setWhoOwes}
          onclickSplitBillButton={setClickSplitBillButton}
        />
      )}
    </div>
  );
}


