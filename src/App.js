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
  const [friends,setFriends]=useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null); // useState to handle the selected friend
  const [expense, setExpense] = useState(0); // State to track expense
  const [whoOwes, setWhoOwes] = useState(""); // State to track who owes
  const [clickSplitBillButton, setClickSplitBillButton] = useState(false); // State to track split bill button click
  const[showAddFriend ,setShowAddFriend]= useState(false); // State to trackAdd friend button

  function handleAddFriend(newFriend){
    setFriends(friends=>[...friends,newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend){
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
      <FriendsList
        friendList={friends}
        onSelectedFriend={setSelectedFriend} // Pass the function to change selected friend
        selectedFriend={selectedFriend}
        expense={expense} // Passing the current expense state
        whoOwes={whoOwes} // Passing the current "who owes" state
        clickSplitBillButton={clickSplitBillButton}
        onSelection={handleSelection}
      />
      {showAddFriend && <FormAddFrined OnAddFriend={handleAddFriend}/>}
      <Button action={()=>setShowAddFriend(!showAddFriend)}>{showAddFriend?"close" :"Add Friend"}</Button>
      </div>


      {selectedFriend && (
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


