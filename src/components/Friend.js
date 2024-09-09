import React from 'react';
import { Button } from './Button';

export function Friend({
  friend,
  selectedFriend,
  clickSplitBillButton,
  onSelection
}) {
  const isSelected =selectedFriend?.id ===friend.id;

  function handleWhoOwesText() {
    if (clickSplitBillButton) {
      if (friend.balance < 0) {
        return { text: `You owe ${friend.name} ${Math.abs(friend.balance)} $`, className: "red" };
      } else  {
        return { text: `${friend.name} owes you ${Math.abs(friend.balance)} $`, className: "green" };
      }
    }
    return { text: `You and ${friend.name} are even`, className: "" };
  }

  const { text, className } = handleWhoOwesText() || {};

  return (
    <li className ={isSelected? "selected":""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={className}>{text}</p>
      <Button action={() => onSelection(friend)}>{isSelected? "Close":"Select"}</Button>
    </li>
  );
}