import React from "react";
function InputFields({ title, setTitle, setDescription, description }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default InputFields;
