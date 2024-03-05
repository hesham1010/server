import Counter from "@/components/Counter";
import Link from "next/link";
async function getEmployees() {
  const res = await fetch("http://localhost:8000/employees");
  if (!res.ok) {
    throw new Error("OOppps, no Employees");
  }
  return res.json();
}
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const employees = await getEmployees();

  const showEmployee = employees.map((employee) => (
    <div key={employee.id} className="col">
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">{employee.fullname}</h3>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="card-text">{employee.position}</p>
            <p className="card-text">{employee.age}</p>
          </div>
          <Link href={`/employees/${employee.id}`} className="btn btn-primary">
            Go to Employee
          </Link>
        </div>
      </div>
    </div>
  ));
  // const counterTrigger = async () => {
  //   "use server";
  //   console.log("tets");
  // };

  return (
    <>
      <h1>Home Page</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {showEmployee}
      </div>
      <Counter />
    </>
  );
}
