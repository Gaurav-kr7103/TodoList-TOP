import "./styles.css";
import { AddDialogBox } from "./btnCreateTask";
import { addProjectSlide } from "./addProjectSlide";

const addProjectBtn = document.querySelector("#btn-project-add");
addProjectBtn.addEventListener("click", () => {
    addProjectSlide();
});

const addTaskBtn = document.querySelector("#addTask");
addTaskBtn.addEventListener("click", ()=> {
    AddDialogBox();
});
