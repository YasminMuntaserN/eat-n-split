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
  const [selectedFriend, setSelectedFriend] = useState(null);
  const[showAddFriend ,setShowAddFriend]= useState(false); 

  function handleAddFriend(newFriend){
    setFriends(friends=>[...friends,newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend){
    setSelectedFriend((curr) => curr?.id === friend?.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value){
    setFriends((friends) =>
        friends.map((friend) =>
            friend.id === selectedFriend.id ?
              {...friends , balance:friends.balance + value } : friend
            )
        );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
      <FriendsList
        friendList={friends}
        onSelectedFriend={setSelectedFriend} // Pass the function to change selected friend
        selectedFriend={selectedFriend}
        onSelection={handleSelection}
      />
      {showAddFriend && <FormAddFrined OnAddFriend={handleAddFriend}/>}
      <Button action={()=>setShowAddFriend(!showAddFriend)}>{showAddFriend?"close" :"Add Friend"}</Button>
      </div>


      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}


