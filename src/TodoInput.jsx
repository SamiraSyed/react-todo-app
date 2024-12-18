import { useContext, useEffect, useRef } from 'react'
import { TodoStore } from './StateProvider';
import taskList from './TaskList';

const TodoInput = () => {
  const taskStore = useContext(TodoStore);
  const newTask = useRef();

  useEffect(() => {
    newTask.current.value = taskStore.editTask.task;
  }, [taskStore.editTask.task]);

  const addTodo = () => {
    if (taskStore.editTask.task) {
      const index = taskStore.editTask.index;

      const updatedTaskList = taskStore.task.map((el, i) => {
        if (i === index) {
          el = newTask.current.value;
        }
        return el;
      });

      taskStore.setTask(updatedTaskList);
      taskStore.setEditTask({ task: '', index: null });
      newTask.current.value = '';
    }
    else if (newTask.current.value) {
      taskStore.setTask([...taskStore.task, newTask.current.value]);
      newTask.current.value = '';
    }
    else {
      alert("fill input field");
    }
  }

  return (
    <>
      <div className='flex justify-center items-center font-extrabold text-5xl font-serif'><u><h1>Todo-App</h1></u></div>

      <div className='flex justify-center items-center pt-8  '>

        <div className='h-[100px] w-[40%] bg-orange-950  flex justify-center items-center  '>

          <input type="text" ref={newTask} className='w-[70%] h-10  bg-gray-500 font-bold text-stone-950  text-2xl rounded-3xl' />

          <button onClick={addTodo} className=' bg-gray-500 h-10 px-6 text-white font-bold rounded-3xl text-2xl ml-6'>Add -Task</button>
          
        </div>
      </div>
    </>
  )
}

export default TodoInput;


