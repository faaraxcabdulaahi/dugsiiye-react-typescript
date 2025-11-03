import React from "react";

interface IUser {
  username: string;
  isPremium: boolean;
}

const Welcome = (props: IUser) => {
  return (
    <div>
      Welcome {props.username}, you are {props.isPremium ? "a premium" : "a regular"} user
    </div>
  );
};

export default Welcome;
