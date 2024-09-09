import React from 'react';
import { Friend } from './Friend';

export function FriendsList({
  friendList,
  selectedFriend,
  whoOwes,
  expense,
  clickSplitBillButton,
  onSelection
}) {
  return (
    <div className="sidebar">
      <ul>
        {friendList.map((friend) => (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            whoOwes={whoOwes}
            expense={expense}
            key={friend.id}
            clickSplitBillButton={clickSplitBillButton}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
}
