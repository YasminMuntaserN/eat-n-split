import { Button } from "./Button"
export function FormAddFrined(){
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type="text"/>

      <label>📷 Image URL</label>
      <input type="text"/>

      <Button>Add</Button>
    </form>
  )
}