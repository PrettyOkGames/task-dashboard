import { type Task } from "./TaskItem";

export interface TaskListProps{
    task: Task
    priorityColor: string
    dropdownColor: string
    onStatusChange: (event: React.ChangeEvent<HTMLSelectElement>, task: Task) => void
    onDelete: (taskToDelete: Task) => void
}

function TaskList({task, priorityColor, dropdownColor, onStatusChange, onDelete}: TaskListProps) {
    return (
        <div key={task.id} className="w-full bg-[#000000] border-[2px] border-[#364153] rounded-[8px] p-[10px] text-left p-[20px] mb-[15px]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[20px]">{task.title}</h2>
          <br />
          <p className="text-gray-600">{task.description}</p>
          <br />
          <div className="flex">
            <p style={{ color: priorityColor }} className="">Priority: {task.priority}</p>
            <p className="text-[#696a6e] ml-[10px]">Due: {task.dueDate}</p>
          </div>
        </div>
        <div className="ml-[25px]">
          <select defaultValue={task.status} onChange={(e) => onStatusChange(e, task)} style={{ backgroundColor: dropdownColor }} className="px-[5px] text-[18px] h-[30px] text-[#ab4b00] rounded-[4px]" name="" id="">
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className="text-[#cb2c36] ml-[10px]" onClick={() => onDelete(task)}>Delete</button>
        </div>
      </div>
    </div>
    )
    
}

export default TaskList