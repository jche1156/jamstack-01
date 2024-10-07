import { useState } from 'react'

export default function ScheduleManager() {
  const [calendar, setCalendar] = useState('8AM: Rise and Grind!')
  const [todoList, setTodoList] = useState('Walk the Dog\nTake out Trash\nClean Fridge\nCook Dinner\nMake Checklist\nPolish Resume\nFix Faucet\nApply Sunscreen\n')
  const [suggestedTasks, setSuggestedTasks] = useState([])

  const generateSuggestedTasks = () => {
    const allTasks = todoList.split('\n').filter(task => task.trim() !== '')
    const selectedTasks = []
    for (let i = 0; i < 6 && allTasks.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * allTasks.length)
      selectedTasks.push(allTasks.splice(randomIndex, 1)[0])
    }
    setSuggestedTasks(selectedTasks)
  }

  return (
    <div>
      <h1>Personal Schedule Manager</h1>
      <section>
        <h2>Input Your Schedule</h2>
        <form>
          <div className="grid">
            <div>
              <label>Calendar Entries:</label>
              <textarea id="calendar" 
                value={calendar}
                onChange={e => setCalendar(e.target.value)}
                rows="8"
                cols="40" 
              /><br />
            </div>
            <div>
              <label>To-Do List:</label>
              <textarea 
                id="todo" 
                value={todoList}
                onChange={e => setTodoList(e.target.value)}  
                rows="8" 
                cols="40" 
              /><br />
            </div>
          </div>
          <input type="button" value="Suggest Tasks" onClick={generateSuggestedTasks} />
        </form>
      </section>
      <section>
        <h2>Life Tasks</h2>
        <div className="grid">
          {suggestedTasks.slice(0,3).map((task, index) => (
            <article key={index}>
              <header style={{"background-color": "#55C21E", color: "white"}}>
                {task}
              </header>
              <p>{task}</p>
            </article>
          ))}
          {suggestedTasks.length === 0 && (
            <p>No tasks suggested yet. Please enter your schedule and to-do list, then click "Generate Suggested Tasks".</p>
          )}
        </div>
        <h2>Work Tasks</h2>
        <div className="grid">
          {suggestedTasks.slice(4,6).map((task, index) => (
            <article key={index}>
              <header style={{"background-color": "#B7D9FC"}}>
                {task}
              </header>
              <p>{task}</p>
            </article>
          ))}
          {suggestedTasks.length === 0 && (
            <p>No tasks suggested yet. Please enter your schedule and to-do list, then click "Generate Suggested Tasks".</p>
          )}
        </div>
      </section>
    </div>
  )
}
