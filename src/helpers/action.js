"use server";
import { redirect } from "next/navigation";
import axios from "axios";
export async function counterTrigger() {
  console.log(" Conter trigger");
}
export async function addEmployee(formState, formdata) {
  try {
    const fullname = formdata.get("fullname");
    const position = formdata.get("position");
    const age = formdata.get("age");
    if (!fullname) {
      return { message: "The fullname is empty" };
    }
    if (!position) {
      return { message: "The position is empty" };
    }
    if (!age) {
      return { message: "The age is empty" };
    }
    await axios.post("http://localhost:8000/employees", {
      fullname: formdata.get("fullname"),
      position: formdata.get("position"),
      age: formdata.get("age"),
    });
  } catch (e) {
    return { message: "something wrong" };
  }
  redirect("/");
  //   await axios.post("http://localhost:8000/employees", {
  //     fullname: formdata.get("fullname"),
  //     position: formdata.get("position"),
  //     age: formdata.get("age"),
  //   });
  //   redirect("/");
}
