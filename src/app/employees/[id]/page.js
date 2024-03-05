import React from "react";
import axios from "axios";
import { notFound } from "next/navigation";
async function getEmployee(pageId) {
  const res = await fetch(`http://localhost:8000/employees/${pageId}`);
  if (!res.ok) {
    // throw new Error("could not found employeee");
    return notFound();
  }
  return res.json();
}
export default async function EmployeeByIdPage(props) {
  const pageId = props.params.id;
  const employee = await getEmployee(pageId);
  return (
    <div>
      <h1>EmployeeByIdPage</h1>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">{employee.fullname}</h3>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="card-text">{employee.position}</p>
            <p className="card-text">{employee.age}</p>
          </div>
          {/* <Link href={`/employees/${employee.id}`} className="btn btn-primary">
            Go to Employee
          </Link> */}
        </div>
      </div>
    </div>
  );
}
