import { useState } from "react";

function EmployeeValidationForm() {
  const [name, setName] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const nameRegex = /^[A-Za-z\s]+$/;
    if (name.length < 4 || !nameRegex.test(name)) {
      setError(
        "Name must be at least 4 characters long and only contain letters and spaces"
      );
      return;
    }
    setSubmittedData({
      name,
    });
    setName("");
  };

  return (
    <>
      <h1>Employee Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submittedData && (
        <div>
          <h2>Submitted Information</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
        </div>
      )}
    </>
  );
}

export default EmployeeValidationForm;
