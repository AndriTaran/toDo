import React from "react";
import { Task } from "@/app/page";
import { TrashIcon, BoxIcon, CheckboxIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-row items-start justify-between w-[370px] border border-gray-200 mb-2 p-2 rounded shadow"
    >
      <div className="flex flex-col w-full items-start justify-between">
        <p
          className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : "text-black"} font-bold`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.title}
        </p>
        <p
          className={`cursor-pointer line-clamp-1 "text-black" font-bold`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed ? "completed" : ""}
        </p>
      </div>

      <div className="flex flex-col items-center justify-between">
        <button
          onClick={() => toggleComplete(task.id)}
          className="p-1 bg-blue-500/75 text-white rounded hover:bg-blue-600/90 mb-1"
        >
          {task.completed ? <CheckboxIcon /> : <BoxIcon />}
        </button>
        <button
          onClick={() => deleteTodo(task.id)}
          className="p-1 bg-red-500/75 text-white rounded hover:bg-red-600/90"
        >
          <TrashIcon />
        </button>
      </div>
    </motion.div>
  );
};
