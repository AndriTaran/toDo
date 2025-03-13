import React, { useRef } from "react";

interface AddTaskFormProps {
  addTodo: (task: { title: string }) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTodo }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    const text: string = formData.get("title") as string;

    if (text.trim()) {
      addTodo({ title: text });
      formRef.current?.reset(); // ✅ Clear input after submission
    }
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <input
        type="text"
        name="title"
        required
        maxLength={20}
        placeholder="Title"
        className="w-full border p-1 border-gray-200 rounded-md text-sm leading-tight mb-1"
      />
      <button
        type="submit"
        className="p-1 min-w-[370px] border border-gray-600/50 bg-blue-500/75 rounded-md text-sm leading-tight cursor-pointer mb-2"
      >
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
