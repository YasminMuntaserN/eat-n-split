import React from 'react';
import { Button } from './Button';

export function Friend({
  friend,
  onSelectedFriend,
  clickSplitBillButton,
  onclickSelectButton
}) {
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

  function handleSelectButton() {
    onclickSelectButton(true);
    onSelectedFriend(friend);
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={className}>{text}</p>
      <Button action={() => handleSelectButton()}>Select</Button>
    </li>
  );
}