export function Friend({friend ,onSelectedFriend ,whoOwes ,expense}){
  function handleWhoOwens(){
    return( whoOwes===friend.name ?
      `You and ${friend.name} are even `: whoOwes===friend.name ?
      ` ${friend.name } owes you ${expense} $`:
      `  you owe ${friend.name } ${expense} $`
    );
  }
  return (
    <div onClick={()=>onSelectedFriend(friend)}> 
        <li>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>
          <p>{handleWhoOwens}</p>
          <button className="button">setect</button>
        </li> 
    </div>
  )
}