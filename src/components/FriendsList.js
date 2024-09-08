import {Friend} from "./Friend.js";
export function FriendsList({frindList ,onSelectedFriend ,expense}){
    return (
    <div className="sidebar">
      <ul>
      {frindList.map((friend) => (
            <Friend friend={friend}
              onSelectedFriend={onSelectedFriend}
              key={friend.id}
              expense={expense}/>
      ))}
      </ul>
    </div>
    );
}