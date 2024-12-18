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
      <div className='flex justify-center items-center '>
        <div className='min-h-[300px] w-[40%] bg-orange-950  flex flex-col justify-center items-center'>
          {
            taskStore.task.map((el, index) => (

              <div key={Date.now() * index} className=' my-1 w-11/12 flex justify-around rounded-1 bg-[#fff]'>

                <p className='w-10/12 pl-2'>{el}</p>


                <button onClick={() => { editTask(index) }} className='rounded border border-gray-600 px-6'>Edit</button>

                <button onClick={() => { deleteTask(index) }} className='rounded border border-gray-600  px-6'>Delete</button>
              </div>

            ))
          }
        </div>
      </div>

    </>
  )
}
