// import FORM from "./createTask.js";
import "./dialogPop-styles.css";


const allTasks = [];
class Task {
    constructor (title, desc, deadline, priority, notes) {
        this.title = title;
        this.desc = desc;
        this.deadline = deadline;
        this.priority = priority;
        this.notes = notes;
        this.uniqueTaskID = crypto.randomUUID();
        this.uniqueProjectID = null;
    }
    info() {
        return {
            title: this.title,
            desc: this.desc,
            deadline: this.deadline,
            priority: this.priority,
            notes: this.notes,
            uniqueTaskID: this.uniqueTaskID,
            uniqueProjectID : this.uniqueProjectID
        };
    }
    setProjectId(val) {
        this.uniqueProjectID = val;
    }
}



export function AddDialogBox () {
    const dialog = document.querySelector("dialog");
    dialog.showModal();

    const addTask = document.querySelector("#confirm-task");
    addTask.addEventListener("click", (event)=> {
        event.preventDefault();
        
            const title = document.querySelector("#task-title").value;
            const desc = document.querySelector("#task-desc").value;
            const deadline = document.querySelector("#task-deadline").value;
            let priority = "";
            document.querySelectorAll("#priorities > div > input").forEach((node) => {if (node.checked) priority = node.value});
            const notes = document.querySelector("#task-notes").value;
            // priority is set inside the constructor
            const task = new Task(title, desc, deadline, priority, notes);
            allTasks.push(task);
            console.log(task.info());
            dialog.close();
    });

    const cancelTask = document.querySelector("#cancel-task");
    cancelTask.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close();
    });
}
