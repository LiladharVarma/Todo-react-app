import React, { useState , useRef } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Task = (props) => {
  // const ref = useRef(props.containerLimit);
  // const {containerLimit} = props ; 
  const [taskStatus, setTaskStatus] = useState(false);
  const [taskEditable, setTaskEditable] = useState(false);

  const handleClick = () => {
    // setTaskStatus((prev) => {
    //   return !prev;
    // });
  };

  const handleEdit = () => {
    setTaskStatus((prev) => !prev);
  };

  return (
    <div  className="flex justify-between items-center pl-4   bg-zinc-200 border-[1.5px] border-solid border-black shadow-md rounded-lg font-Quicksand font-semibold"
    
   
     
    >
      {/* {taskStatus ? (
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" onClick={handleClick} className="p-6 bodrer" />
          <p className="line-through">{task}</p>
        </div>
      ) : (
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" onClick={handleClick} className="p-6 bodrer" />
          <p className="">{task}</p>
        </div>
      )} */}
      {taskStatus ? (
        <div className="flex justify-start items-center gap-2  cursor-pointer">
          <RadioButtonCheckedIcon onClick={handleEdit} />
          <p contentEditable={taskEditable} className="line-through">
            {props.task}
          </p>
        </div>
      ) : (
        <div className="flex justify-start items-center gap-2 cursor-pointer">
          {" "}
          <RadioButtonUncheckedIcon onClick={handleEdit} />
          <p contentEditable={taskEditable}>{props.task}</p>
        </div>
      )}
      <div className="flex">
        <IconButton color="secondary" aria-label="edit" size="large">
          {taskEditable ? (
            <TaskAltIcon
              onClick={() => {
                setTaskEditable(false);
              }}
            />
          ) : (
            <EditIcon
              onClick={() => {
                setTaskEditable(true);
              }}
            />
          )}
        </IconButton>
        {/* <input type="checkbox" onClick={handleClick} /> */}
        <IconButton aria-label="delete" size="large">
          <DeleteIcon
            fontSize="inherit"
            color="error"
            onClick={() => {
              props.onDelete(props.id);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

// {taskStatus ? (
//     <div className="flex justify-start items-center gap-2">
//       <RadioButtonCheckedIcon />
//       <p className="line-through">{task}</p>
//     </div>
//   ) : (
//     <div className="flex justify-start items-center gap-2">
//       {" "}
//       <RadioButtonUncheckedIcon />
//       <p>{task}</p>
//     </div>
//   )}

export default Task;
