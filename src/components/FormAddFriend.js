import { useState } from "react";
import { Button } from "./Button"
export function FormAddFrined(){
  const[name , setName] =useState("");
  const[image , setImage] =useState("https://i.pravatar.cc/48?u=499476");
  const id=crypto.randomUUID();
 
  function handleSubmit(e){
    e.preventDefault();

    if(!name || !image) return;

    const newFriend={
      name,
      image: `${image}?=${id}`,
      balance:0,
      id
    };

    console.log(newFriend); 
    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

      <label>📷 Image URL</label>
      <input type="text"value={image} onChange={(e)=>setImage(e.target.image)}/>

      <Button>Add</Button>
    </form>
  )
}