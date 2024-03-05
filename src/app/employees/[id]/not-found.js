import Link from "next/link";

export default function EmployeeNotFound() {
  return (
    <div>
      <h1>Sorry, we could not found Employee</h1>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
}
