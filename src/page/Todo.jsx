import React from "react";
import User from './../components/Todo/User';
import Tasks from "../components/Todo/Tasks";

const Todo = () => {
  return (
    <div className="px-10 py-6">
      <User/>
      <Tasks/>
    </div>
  );
};

export default Todo;
