import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const userId = useSelector((state) => state.todo.userId);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((res) => {
          res.data.sort(function (x, y) {
            return Number(x.completed) - Number(y.completed);
          });
          setTasks(res.data);
        })
        .catch((err) => console.log("Error: " + err));
    }
  }, [userId]);
  const SetCompleteTask = (taskObj) => {
    setTasks((tasks) => {
      const task = tasks.filter((task) => task.id !== taskObj.id);
      return [...task, taskObj];
    });
  };
  return (
    <div>
      <div className="">
        <div className="flex items-center my-4">
          <span className="mr-4 font-semibold text-base">Tasks</span>
          <hr className="flex-grow border-t-[2px] border-slate-150" />
        </div>

        <div className="border-[2px] border-slate-150 rounded-md h-96 overflow-auto">
          {tasks.length > 0 ? (
            <div className="text-sm">
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    SetCompleteTask={SetCompleteTask}
                  />
                );
              })}
            </div>
          ) : (
            <div className=" flex justify-center text-sm text-gray-400 items-center center p-4">
              <span className="">No data</span>
            </div>
          )}
        </div>
        <div className="text-sm py-2">
          Done
          <span> {tasks?.filter((x) => x.completed).length}</span>/
          <span>{tasks.length}</span> Tasks
        </div>
      </div>
    </div>
  );
};

export default Tasks;
