import {Friend} from "./Friend.js";
export function FriendsList({frindList ,onSelectedFriend,whoOwes ,expense }){
  console.log(`whoOwes from FriendsList: ${whoOwes}`); 
    return (
    <div className="sidebar">
      <ul>
      {frindList.map((friend) => (
            <Friend friend={friend}
              onSelectedFriend={onSelectedFriend}
              whoOwes={whoOwes}
              expense={expense}
              key={friend.id}
              />
      ))}
      </ul>
    </div>
    );
}