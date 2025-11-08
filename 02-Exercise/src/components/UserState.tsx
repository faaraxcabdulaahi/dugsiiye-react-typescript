import React, { useState } from "react";

 type User = {
        username:string;
        email:string;
    }

const UserState = () => {
   
const [user, setUser] = useState<User | null>(null);
const userInfo = {username: "Faarax", email: "faarax@gmail.com"}

  return (
    <div>
      {user ? (
        <>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            setUser(userInfo)
          }
        >
          Login
        </button>
      )}
    </div>)};

export default UserState;
