import React, { useState } from "react";

function TaskForm() {

    const [taskTitle, setTitle] = useState('')
    const [taskDesc, setDesc] = useState('')
    const [taskStatus, setStatus] = useState('')
    const [taskPriority, setPriority] = useState('')
    const [taskDueDate, setDueDate] = useState('')

    return <section className="mb-[10px]">
        <h1 className="text-[40px]">Task Dashboard</h1>
        <form>
            <label className="block text-left text-[20px]" htmlFor="task-title">Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} className="block border-[2px] rounded-full w-[100%] h-[40px] pl-[15px] mt-[10px]" id="task-title" />
            <label className="block text-left mt-[15px] text-[20px]" htmlFor="task-desc">Description</label>
            <input type="text" onChange={(e) => setDesc(e.target.value)} className="block border-[2px] rounded-full w-[100%] h-[40px] pl-[15px] mt-[10px]" id="task-desc" />
            <label className="block text-left mt-[15px] text-[20px]" htmlFor="task-desc">Status</label>
            <select onChange={(e) => setStatus(e.target.value)} className="px-[10px] text-[18px] h-[35px] bg-[#1e2939] rounded-[4px] block mt-[10px] border" name="" id="task-status">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <label className="block text-left mt-[15px] text-[20px]" htmlFor="task-desc">Priority</label>
            <select onChange={(e) => setPriority(e.target.value)} className="px-[10px] text-[18px] h-[35px] bg-[#1e2939] rounded-[4px] block mt-[10px] border" name="" id="task-status">
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <label className="block text-left mt-[15px] text-[20px]" htmlFor="task-dueDate">Set Due Date</label>
            <input type="date" onChange={(e) => setDueDate(e.target.value)} className="block text-[20px] border-[1px] rounded-[8px] p-[5px] mt-[10px]" id="task-dueDate"></input>
            <button className="mt-[20px] bg-[#0687d1] hover:bg-[#045e91] active:bg-[#033d5e] rounded-full w-[25%] h-[40px] text-[20px]">Create</button>
        </form>
    </section>
}

export default TaskForm