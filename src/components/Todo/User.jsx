import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/todoSlice";
const User = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userFilterList, setUserFilterList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserList(res.data);
        setUserFilterList(res.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);
  const filterUsers = (key) => {
    setUserFilterList(
      userList.filter((x) => x.name.toLowerCase().includes(key.toLowerCase()))
    );
  };
  return (
    <div>
      <div className="">
        <div className="flex items-center my-4">
          <span className="mr-4 font-semibold text-base">User</span>
          <hr className="flex-grow border-t-[2px] border-slate-150" />
        </div>

        <div className="text-sm w-[226px]">
          <div className="relative">
            <input
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                filterUsers(e.target.value);
              }}
              onFocus={() => setIsFocused(true)}
              placeholder="select user"
              type="text"
              className="  border border-gray-300 rounded-md py-2 pl-2  pr-4 focus:outline-none focus:border-blue-500"
            />
            {isFocused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute w-4 h-4 top-3 right-8 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute w-4 h-4 top-3 right-8 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            )}
          </div>
          {isFocused && (
            <div className=" absolute flex flex-col mt-1 w-48 bg-white  shadow-lg max-h-60 overflow-auto rounded-md scroll-smooth transition-opacity duration-300 ease-in">
              {userFilterList.length > 0 ? (
                userFilterList.map((user) => {
                  return (
                    <span
                      onClick={() => {
                        dispatch(selectUser(user.id));
                        setSearchInput(user.name);
                        setIsFocused(false);
                      }}
                      key={user.id}
                      className="cursor-pointer py-1 my-1 px-2 mx-1 rounded-lg hover:bg-neutral-100"
                    >
                      {user.name}
                    </span>
                  );
                })
              ) : (
                <div className="w-48 h-28 flex flex-col justify-center items-center opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  <span className="">No User</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
