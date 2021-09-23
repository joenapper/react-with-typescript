import React, { useState } from "react";
import { ImportsNotUsedAsValues } from "typescript";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        className="AddToList-input"
        type="text"
        placeholder="Name"
        name="name"
        value={input.name}
        id=""
        onChange={handleChange}
      />
      <input
        className="AddToList-input"
        type="text"
        placeholder="Age"
        name="age"
        value={input.age}
        id=""
        onChange={handleChange}
      />
      <input
        className="AddToList-input"
        type="text"
        placeholder="Image URL"
        name="img"
        value={input.img}
        id=""
        onChange={handleChange}
      />
      <textarea
        className="AddToList-input"
        placeholder="Notes"
        name="note"
        value={input.note}
        id=""
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
