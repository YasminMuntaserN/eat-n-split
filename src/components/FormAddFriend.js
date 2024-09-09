import { useState } from "react";
import { Button } from "./Button";


export function FormAddFrined({OnAddFriend}){
  // State to hold the name and image of the new friend
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");
  const id = crypto.randomUUID();  // Generate a unique ID for the new friend

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();  // Prevent the form from refreshing the page

    // Return if name or image is empty
    if (!name || !image) return;

    // Create a new friend object
    const newFriend = {
      name,
      image: `${image}?=${id}`,  // Append unique ID to the image URL
      balance: 0,  // Set initial balance to 0
      id
    };

    OnAddFriend(newFriend);  // Call the parent function to add the friend

    // Reset form fields
    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    // Form for adding a friend
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}  // Update name state when input changes
      />

      <label>📷 Image URL</label>
      <input 
        type="text"
        value={image} 
        onChange={(e) => setImage(e.target.value)}  // Update image state when input changes
      />

      {/* Button to submit the form */}
      <Button action={(e) => handleSubmit}>Add</Button>
    </form>
  );
}
