import React, { useState } from "react";

interface IAge {
  onSubmit: (age: number) => void;
}

const AgeForm = ({ onSubmit }: IAge) => {
  const [age, setAge] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const theAge = +age;
    if (!theAge || theAge < 18) {
      alert("age must a number and also must be above 18");
    }
    onSubmit(theAge);
    setAge("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="please enter your age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">Submit Age</button>
      </form>
    </div>
  );
};

export default AgeForm;
