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
    if(taskStore.editTask.task){
      const index = taskStore.editTask.index;
      
      const updatedTaskList = taskStore.task.map((el, i) => {
        if(i === index){
          el = newTask.current.value;
        }
        return el;
      });

      taskStore.setTask(updatedTaskList);
      taskStore.setEditTask({task: '', index: null});
      newTask.current.value = '';
    }
    else if(newTask.current.value){
      taskStore.setTask([...taskStore.task, newTask.current.value]);  
      newTask.current.value = '';
    }
    else{
      alert("fill input field");
    }
  }
 
  return (
    <>
      <input type="text" ref={newTask} className='border border-black h-10' />
      <button onClick={addTodo} className='rounded border border-gray-600  px-6'>Create Task</button>
    </>
  )
}

export default TodoInput;


