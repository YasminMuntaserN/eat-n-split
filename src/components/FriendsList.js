export function FriendsList({frindList}){
    return (
    <sidebar>
      <ul>
      {frindList.map((friend) => (
        <li>
          <div className="button">
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.img}</h3>
          <p>tebd bnfv</p>
          <button>setect</button>
          </div>
        </li> 
      ))
    }
      </ul>
    </sidebar>
    );
}