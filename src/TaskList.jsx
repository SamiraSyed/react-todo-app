import { useContext } from 'react';
import { TodoStore } from './StateProvider';

export default function taskList() {
  const taskStore = useContext(TodoStore);

  const editTask = (index) => {
    const task = taskStore.task.find((el, i) => {
      if (i === index) 
        return el;
    });

    // const task = taskStore.task[index];
    taskStore.setEditTask({ task, index });

  }
  console.log(taskStore.editTask);

  const deleteTask = (id) => {
    const remainingTask = taskStore.task.filter((el, index) => {
      if (index !== id)
        return el;

    });

    taskStore.setTask(remainingTask);
  }

  return (
    <>
      {
        taskStore.task.map((el, index) => (

          <div key={Date.now() * index} className=' mt-4'>
            
            <p>{el}</p>

            <button onClick={() => { editTask(index) }} className='rounded border border-gray-600 px-6'>Edit</button>

            <button onClick={() => { deleteTask(index) }} className='rounded border border-gray-600  px-6'>Delete</button>
          </div>

        ))
      }
    </>
  )
}
