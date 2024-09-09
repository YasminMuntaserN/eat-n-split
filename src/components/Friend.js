import React from 'react';
import { Button } from './Button';

export function Friend({
  friend,
  onSelectedFriend,
  whoOwes,
  expense,
  clickSplitBillButton,
  onclickSelectButton
}) {
  function handleWhoOwesText() {
    console.log(`whoOwes: ${whoOwes}` );
    if (clickSplitBillButton) {
      if (whoOwes === "user") {
        return { text: `You owe ${friend.name} ${expense} $`, className: "red" };
      } else if (whoOwes === friend.name) {
        return { text: `${friend.name} owes you ${expense} $`, className: "green" };
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