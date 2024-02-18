import React, { useState, useRef, useEffect } from "react";

import { Stack } from "@mui/material";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";/
import Task from "./Task";
import { motion } from "framer-motion";
// import Quote from "./Quote";

const Hero = (props) => {
  const ref = useRef(null);
  const [input, setInput] = useState("");
  const [addTask, setAddTask] = useState(false);

  const [todo, setTodo] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const handleTask = () => {
    setAddTask(true);
    if (input !== "") {
      // const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTodo((prev) => {
        const newTodo = [...prev, input];
        localStorage.setItem("todo", JSON.stringify(newTodo));
        return newTodo;
      });
    }
    setInput("");
  };

  //   const UpdateTodo = (updatedTask)=>{
  //     setTodo((prev) => [...prev, updatedTask]);
  //   }

  const deleteTask = (id) => {
    // setTodo((prev) => {
    //   const UpdateTodo =  prev.filter((item, index) => {
    //     return index !== id;
    //   });
    //   localStorage.setItem('todo' , JSON.stringify(UpdateTodo)) ;

    // });
    setTodo((prev) => {
      const updatedTodo = prev.filter((item, index) => index !== id);
      localStorage.setItem("todo", JSON.stringify(updatedTodo));
      return updatedTodo;
    });
  };

  // useEffect(() => {
  //   setTodo(JSON.parse(localStorage.getItem("todo")));
  // }, []);
  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todo"));
    setTodo(storedTodo || []);
  }, []);

  // const onDragEnd = (result) => {
  //   if (!result.destination) {
  //     return;
  //   }

  //   console.log("drag") ;

  //   const newTodo = Array.from(todo);
  //   const [reorderedTask] = newTodo.splice(result.source.index, 1);
  //   newTodo.splice(result.destination.index, 0, reorderedTask);

  //   setTodo(newTodo);
  // }

  return (
    <div
      className="  w-full flex-auto flex  flex-col justify-center gap-4 items-center "
      ref={ref}
    >
      {/* <div className="mt-4">
        <Quote />
      </div> */}
      <motion.div
        className=" w-[auto] h-auto p-4  rounded-lg customShadow bg-white   "
        drag
        dragConstraints={ref}
      >
        <div className="text-2xl mb-2  font-bold font-Quicksand">
          <h2>Tasks</h2>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <input
            placeholder="Enter the task"
            onChange={handleInput}
            value={input}
            className="  p-[10px] w-[80%] bg-transparent focus:outline-none  shadow-md rounded-lg font-Quicksand placeholder:font-Quicksand placeholder:font-semibold  font-semibold text-black placeholder:text-black border-[1.5px] border-solid border-black"
          />
          <button
            onClick={handleTask}
            className="bodrer-solid border-[1.5px] border-black p-[9px] w-24 rounded-lg font-Quicksand font-semibold shadow-lg"
          >
            Add
          </button>
          {/* <Fab color="none" aria-label="add" onClick={handleTask}>
            <AddIcon />
          </Fab> */}
        </div>

       {todo.length > 0 &&  <Stack
          spacing={1.5}
          color={"black"}
          marginTop={"20px"}
          style={{
            maxHeight: "310px",
            overflowY: "auto",
          }}
          paddingRight={"10px"}
        >
          {todo.map((item, index) => (
            <Task key={index} id={index} task={item} onDelete={deleteTask} />
          ))}
        </Stack>}
      </motion.div>
    </div>
  );
};

export default Hero;
