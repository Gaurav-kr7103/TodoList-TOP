//include input styles
//wrapper styles for taking input

//Storage Array of Number of Projects created
let projects = [[]];

function addProjectSlide () {
    const parent = document.querySelector(".project-list");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Project Name ..";
    input.value = "";
    const uniqueID = crypto.randomUUID();

    const confirm = document.createElement("button");
    confirm.textContent = "✔️";
    const cancel = document.createElement("button");
    cancel.textContent = "❌";

    const wrapper = document.createElement("div");
    wrapper.append(input);
    wrapper.append(confirm);
    wrapper.append(cancel);
    parent.append(wrapper);
    wrapper.setAttribute("id", uniqueID);
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "space-between";
    
    confirm.addEventListener("click", () => {
        if (input.value.length > 3) {
            projects.push(uniqueID);
            const para = document.createElement("p");
            para.textContent = `${input.value}`;
            wrapper.removeChild(input);
            wrapper.removeChild(confirm);
            wrapper.removeChild(cancel);
            wrapper.appendChild(para);
            wrapper.appendChild(cancel);
            //styling
            wrapper.style.justifyContent = "space-between";
            para.style.marginLeft = "1em";
            cancel.style.marginRight = "4px";
        } else {
            alert("Enter Minimum 4 characters");
        }
    });

    cancel.addEventListener("click", ()=> {
        parent.removeChild(wrapper);
        //also need to remove from array projects
        projects.splice(projects.findIndex(id => id===uniqueID), 1);
    });
}

export {addProjectSlide, projects};
// const list = document.createElement("li");
