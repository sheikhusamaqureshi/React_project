import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();

        // Prevent adding empty tasks
        if (input.trim() === "") return;

        setTaskList([...taskList, input.trim()]);
        setInput("");
    };

    return (
        <form className="d-flex flex-row gap-3 align-items-center mb-3" onSubmit={handleAddTask}>
            <input
                className="form-control me-2"
                type="text"
                placeholder="Add a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ maxWidth: '500px' }}
            />
            <button
                type="submit"
                className="btn btn-primary fw-semibold px-4 py-2 w-100"
                style={{
                    fontSize: '1.1rem',
                    maxWidth: '180px',
                    boxShadow: '0 4px 12px rgba(0, 123, 255, 0.15)',
                    borderRadius: '30px',
                    letterSpacing: '0.5px'
                }}
            >
                <i className="bi bi-plus-circle me-2"></i>
                Add Task
            </button>
        </form>
    );
};

export default Input;
