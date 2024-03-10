import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDes = descRef.current.value;
    const enteredDate = dateRef.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDes.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      //show the error modal
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDes,
      dueDate: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4 ">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops.. looks like you forgot to entere a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provid a valid value for every input field.{" "}
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descRef} label="Description" textarea />
          <Input type="date" ref={dateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
