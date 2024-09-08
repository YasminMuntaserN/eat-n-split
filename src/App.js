import {FriendsList} from "./components/FriendsList.js";
import {FormSplitBill} from "./components/FormSplitBill.js";
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
  const [selectedFriend, select]=useState(initialFriends[0]);
  const [expense, setExpense]=useState(0);
    console.log(expense);
  return (
    <div className="app">

          <FriendsList
              frindList={initialFriends} 
              onSelectedFriend ={select}
              expense={expense}/>

          <FormSplitBill
              selectedFriend={selectedFriend} 
              onSetExpense={setExpense}
          />
    </div>
  );
}


