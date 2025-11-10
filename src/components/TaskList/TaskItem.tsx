export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
    isActive: boolean
}

export interface TaskItemProps {
    task: Task;
    onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: () => void;
}