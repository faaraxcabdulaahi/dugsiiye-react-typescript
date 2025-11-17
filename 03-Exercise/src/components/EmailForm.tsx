import React, { useState } from "react";

interface IEmail  {
    onSubmit : (email:string) => void;
}

const EmailForm = ({onSubmit}:IEmail) => {
    const [email, setEmail] = useState("");
    const handleSubmit = (event:React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        onSubmit(email);
        setEmail("");
    }
  return <div>
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter you email" value={email} onChange={event=>setEmail(event.target.value)}/>
        <button type="submit">send</button>
    </form>
  </div>;
};

export default EmailForm;
