"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2, FiEye} from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo, ViewTodo} from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalView, setOpenModalView] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
    console.log(task.id, '123');
    
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
  const handleModalView = async (id: string) => {
    await ViewTodo({
      id: task.id,
      text: taskToEdit,
    });;
    setOpenModalView(false);
    router.refresh();
    console.log(id,'anu');
    
  }

  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-5'>
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor='pointer'
          className='text-blue-500'
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>Edit task</h3>
            <div className='modal-action'>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
              <button type='submit' className='hover:shadow-form rounded-md btn btn bg-emerald-800'>
                Save
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor='pointer'
          className='text-red-500'
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-lg'>
            Are you sure, you want to delete this task?
          </h3>
          <div className='modal-action'>
            <button onClick={() => handleDeleteTask(task.id)} className='hover:shadow-form rounded-md btn btn bg-emerald-800'>
              Yes
            </button>
          </div>
        </Modal>
        <FiEye 
         onClick={() => setOpenModalView(true)}
         cursor='pointer'
         className='text-blue-500'
         size={25}/>
         <Modal modalOpen={openModalView} setModalOpen={setOpenModalView}>
          <h3 className='text-lg'>
            {taskToEdit}
            {console.log(taskToEdit, 'hi')}
          </h3>
          <div className='modal-action'>
            <button onClick={() =>{ handleModalView(task.id), router.push('app/task')}} className='hover:shadow-form rounded-md btn btn bg-emerald-800'>
              View
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
