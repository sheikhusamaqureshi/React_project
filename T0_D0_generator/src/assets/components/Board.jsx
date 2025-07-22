const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDeleteTask = () => {
        setTaskList((currentTasks) =>
            currentTasks.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="card shadow-sm text-center mb-3">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                <p className="card-text fs-5 mb-3">{task}</p>
                <button
                    className="btn btn-danger fw-semibold px-4 py-2"
                    onClick={handleDeleteTask}
                >
                    <i className="bi bi-trash me-2"></i>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Board;
