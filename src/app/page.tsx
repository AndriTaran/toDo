"use client";

import React, { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import axios from "axios";
import TaskList from "@/components/TaskList";

export interface Task {
  id: string;
  completed: boolean;
  title: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAndSaveInitialTask = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
      );
      if (response.status === 200) {
        setTodos(response.data);
        localStorage.setItem("todos", JSON.stringify(response.data));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedList = localStorage.getItem("todos");
      if (!savedList || !JSON.parse(savedList)) {
        getAndSaveInitialTask();
      } else {
        setTodos(JSON.parse(savedList));
        setIsLoading(false);
      }
    }
  }, []);

  const addTodo = (todo: { title: string }) => {
    const newTodos = [
      ...todos,
      {
        id: Math.random().toString(),
        title: todo.title,
        completed: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="flex justify-center items-start pt-[20px] min-h-screen max-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  justify-center max-h-screen overflow-hidden">
        <AddTaskForm addTodo={addTodo} />
        <TaskList todos={todos} setTodos={setTodos} isLoading={isLoading} />
      </main>
    </div>
  );
}
