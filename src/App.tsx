import React, { useState } from "react";
import { type Task, type TaskStatus } from "./components/TaskList/TaskItem";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "6/20/2025",
      isActive: true
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "6/18/2025",
      isActive: true
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can't log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "6/14/2025",
      isActive: true
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "6/22/2025",
      isActive: true
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "6/10/2025",
      isActive: true
    },
  ]);
  const [tasksCopy, setCopiedTasks] = useState<Task[]>(tasks)

  function onDelete(taskToDelete: Task) {
    taskToDelete.isActive = false
    setTasks(tasks.filter(task => task.isActive))
  }
  function setPriorityColor(task: Task): string {
    switch (task.priority) {
      case 'high':
        return '#d10001'
      case 'medium':
        return '#d08700'
      case 'low':
        return '#00943e'
    }
  }
  function setDropdownColor(task: Task): string {
    if (task.status == 'pending') {
      return '#fef9c2'
    }
    else {
      return '#ffffff'
    }
  }
  function setStatus(e: React.ChangeEvent<HTMLSelectElement>, task: Task) {
    let newStatus = e.target.value as TaskStatus
    setTasks(prev => prev.map(item => item.status === task.status ? { ...item, status: newStatus } : item))
    //filterByStatus(e)
  }
  function filterByStatus(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value != 'all') {
      const filterStatus = e.target.value as TaskStatus
      setCopiedTasks(tasks.filter(task => task.isActive && task.status === filterStatus))
    }
    else {
      setCopiedTasks(tasks)
    }
  }

  const listOfTasks = tasksCopy.map(task =>
    <TaskList key={task.id} task={task} priorityColor={setPriorityColor(task)}
      dropdownColor={setDropdownColor(task)} onStatusChange={(e) => setStatus(e, task)} onDelete={() => onDelete(task)} />
  )
  // const taskList = tasks.map(task =>
  //   <div key={task.id} className="w-full bg-[#000000] border-[2px] border-[#364153] rounded-[8px] p-[10px] text-left p-[20px] mb-[15px]">
  //     <div className="flex justify-between">
  //       <div className="ml-[25px]">
  //         <select defaultValue={task.status} onChange={(e) => setStatus(e, task)} style={{ backgroundColor: setDropdownColor(task) }} className="px-[5px] text-[18px] h-[30px] text-[#ab4b00] rounded-[4px]" name="" id="">
  //           <option value="pending">Pending</option>
  //           <option value="in-progress">In Progress</option>
  //           <option value="completed">Completed</option>
  //         </select>
  //         <button className="text-[#cb2c36] ml-[10px]" onClick={() => onDelete(task)}>Delete</button>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <>
    <section className="mb-[10px]"> {/* Task Addition Section, Need: Title, Description, Status, Priority, Due Date */}
    <form action="">
      <label htmlFor="" className="block text-left">Task Title</label>
      <input type="text" className="block border-[2px] rounded-full"/>
      <label htmlFor="" className="block text-left">Task Description</label>
      <input type="text" className="block border-[2px] rounded-full"/>
      <input type="submit" value="Create" className="bg-[#ffee03]"/>
    </form>
    </section>
      <div className="flex mb-[30px]">
        <div>
          <p className="text-[15px] text-left mb-[5px]">Status</p>
          <select onChange={(e) => filterByStatus(e)} className="px-[10px] text-[18px] h-[35px] bg-[#1e2939] rounded-[4px]" name="" id="">
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <section>{listOfTasks}</section>
    </>
  )
}

export default App
