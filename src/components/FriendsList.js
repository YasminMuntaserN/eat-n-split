import React from 'react';
import { Friend } from './Friend';

export function FriendsList({
  friendList,
  onSelectedFriend,
  whoOwes,
  expense,
  clickSplitBillButton,
  onclickSelectButton
}) {
  return (
    <div className="sidebar">
      <ul>
        {friendList.map((friend) => (
          <Friend
            friend={friend}
            onSelectedFriend={onSelectedFriend}
            whoOwes={whoOwes}
            expense={expense}
            key={friend.id}
            clickSplitBillButton={clickSplitBillButton}
            onclickSelectButton={onclickSelectButton}
          />
        ))}
      </ul>
    </div>
  );
}
