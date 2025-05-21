import { useRef, useState } from "react"
import { Button } from "./components/button"
import { InputBox } from "./components/input"
import { List } from "./components/List"

function App() {

    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState("")
    const [editIndex, setEditIndex] = useState<number | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    
    function addOrUpdateTodo (){
      if (value.trim()=== "") {
        return;
      }
      if (editIndex !== null){
        const updatedTodo = [...todo];
        updatedTodo[editIndex] = value;
        setTodo(updatedTodo);
        setEditIndex(null)
      } else {
        setTodo([...todo, value])
      }
      setValue("")
    }

    function deleted(num : number){
        setTodo(todo.filter((_, id) => id !== num))
    }
 
    function updated(num : number){
        setValue(todo[num]);
        setEditIndex(num);
        inputRef.current.focus()
    }

    return <div className="h-screen flex flex-col  items-center gap-4">
    <div className= "m-20 p-6 border shadow-md rounded-md flex gap-2">
      <InputBox value={value} onchange={(e)=> setValue((e.target.value))} reference={inputRef} placeholder="type ur todo" />
      <Button
      onclick={addOrUpdateTodo}
       text={editIndex !== null ? "Update Todo" : "Add Todo"}
     />
    </div>

    {todo.map((item, id)=> <div key={id} className="shadow-lg bg-gray-50 border rounded-md p-6 w-max">
      <div className="p-8 m-2 border-none bg-blue-200 rounded-md h-12 flex items-center justify-between shadow-md w-full">
        <List title={item} />
        <div className="ml-2" >
        <button onClick={()=> {deleted(id)}}  className="bg-blue-400 mr-2 p-2 rounded-md">Delete</button>
        <button onClick={()=> {updated(id)}}  className="bg-blue-400 p-2 rounded-md">Update</button>
        </div>
      </div>
    </div>)}
  </div>
  
   

}

export default App
