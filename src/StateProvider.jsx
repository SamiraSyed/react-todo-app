import { createContext, useState } from "react";

export const TodoStore = createContext();

export const StateProvider = ({children}) => {
    const [task, setTask] = useState([]);
    const [editTask, setEditTask] = useState({ task: '', index: null});

    return (
        <TodoStore.Provider value={{ task, setTask, editTask, setEditTask }}>
            {children}
        </TodoStore.Provider>
    );
}