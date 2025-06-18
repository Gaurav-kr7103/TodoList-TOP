import FORM from "./createTask.js";

export function AddDialogBox() {
    const dialog = document.createElement("dialog");
    dialog.append(FORM);
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "AddTask";
    dialog.append(addTaskBtn);
    document.querySelector("body").append(dialog);
    dialog.showModal();

    addTaskBtn.addEventListener("click", ()=>{
        dialog.close();
    });
}
