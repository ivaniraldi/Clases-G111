import { useState } from "react"

export default function TodoList() {
    const [newTask, setNewTask] = useState("")
    const [taskList, setTaskList] = useState(["Sacar la basura", "Alimentar al perro"])

    function handleSubmit(e){
        e.preventDefault()

        if(!newTask.trim()) return
        
        setTaskList([...taskList, newTask])
        setNewTask("")
    }


  return (
    <section>
        <form action="submit" onSubmit={(e)=> handleSubmit(e) }>
            <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)} /> <button type="submit">Enviar</button>
        </form>
        <ul>
            {taskList.map((t, i)=>{
                return(
                    <li key={i}> {t} </li>
                )
            })}
        </ul>
    </section>
  )
}
