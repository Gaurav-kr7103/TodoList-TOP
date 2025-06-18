import "./styles.css";
import { AddDialogBox } from "./btnCreateTask";

const btn = document.createElement("button");
btn.setAttribute("id", "addTask");
btn.textContent = "Add New Task";
btn.addEventListener("click", ()=> {
    AddDialogBox();
});

const body = document.querySelector("body");
body.append(btn);