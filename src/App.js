import React, { useState } from "react";
import "./App.css";

function Form() {
  const [fileInput, setFileInput] = useState(null);
  const [dropdownInput, setDropdownInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [subformInputs, setSubformInputs] = useState([]);

  const handleFileInputChange = (event) => {
    setFileInput(event.target.files[0]);
  };

  const handleDropdownInputChange = (event) => {
    setDropdownInput(event.target.value);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSaveButtonClick = () => {
    const newSubformInputs = [...subformInputs, { fileInput, dropdownInput, textInput }];
    setSubformInputs(newSubformInputs);
    setFileInput(null);
    setDropdownInput("");
    setTextInput("");
  };

  const handleDeleteButtonClick = (index) => {
    const newSubformInputs = [...subformInputs];
    newSubformInputs.splice(index, 1);
    setSubformInputs(newSubformInputs);
  };

  return (
    <div style={{ backgroundColor: "#f1f1f1", padding: "20px" }}>
      <h2 style={{ color: "#333" }}>Form</h2>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="file-input" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>File Input:</label>
        <input type="file" id="file-input" style={{ padding: "5px", border: "1px solid #ccc" }} onChange={handleFileInputChange} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="dropdown-input" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Dropdown Input:
        </label>
        <select id="dropdown-input" value={dropdownInput} onChange={handleDropdownInputChange} style={{ padding: "5px", border: "1px solid #ccc" }}>
          <option value="">Please select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="text-input" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Text Input:
        </label>
        <input type="text" id="text-input" value={textInput} onChange={handleTextInputChange} style={{ padding: "5px", border: "1px solid #ccc" }} />
      </div>
      <button onClick={handleSaveButtonClick} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Save
      </button>
      <h2 style={{ color: "#333", marginTop: "20px" }}>Subform</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {subformInputs.map((input, index) => (
          <li key={index}>
            <div>File Input: {input.fileInput ? input.fileInput.name : "N/A"}</div>
            <div>Dropdown Input: {input.dropdownInput}</div>
            <div>Text Input: {input.textInput}</div>
            <button onClick={() => handleDeleteButtonClick(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
