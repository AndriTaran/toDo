import React from "react";
import { TaskItem } from "@/components/TaskItem";
import { Task } from "@/app/page";
import { AnimatePresence } from "framer-motion";
import { SkeletonItem } from "@/components/SkeletonItem";

interface TaskListProps {
  todos: Task[];
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
  isLoading: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ todos, setTodos, isLoading }) => {
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem(
      "todos",
      newTodos.length ? JSON.stringify(newTodos) : "",
    );
  };

  const toggleComplete = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const placeholderArray  = Array(7)

  return (
    <div className={"mb-[100px] overflow-scroll no-scrollbar"}>
      <AnimatePresence>
        {isLoading ? (
          <>
            {placeholderArray.map((el: number) => <SkeletonItem key={el}/>)}
          </>
        ) : null}
        {todos.map((todo) => (
          <TaskItem
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
