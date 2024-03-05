"use client";
import { addEmployee } from "@/helpers/action";
import { useFormState } from "react-dom";
const AddPage = () => {
  const initialState = { message: null };
  const [state, formAction] = useFormState(addEmployee, initialState);
  return (
    <div>
      <h1>Add Employee</h1>
      <form action={formAction}>
        <input
          type="text"
          className="form-control mb-3 "
          id="fullname"
          placeholder="Enter the fullname"
          name="fullname"
        />
        <input
          type="text"
          className="form-control mb-3 "
          id="position"
          placeholder="Enter the position"
          name="position"
        />
        <input
          type="text"
          className="form-control mb-3 "
          id="age"
          placeholder="Enter the age"
          name="age"
        />
        {state.message && (
          <div className="alert alert-danger" role="alert">
            {state.message}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
