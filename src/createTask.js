//so the task is to make a dialog box inside which a form must be

function createNewSection (labelName, type, ID) {
    
    const label = document.createElement("label");
    label.textContent = labelName;
    const input = document.createElement("input");
    input.type = type;
    input.id = ID;
    input.className = ID;
    input.placeholder = labelName;
    label.setAttribute("for", ID);

    const wrapper = document.createElement("div");
    wrapper.append(label);
    wrapper.append(input);

    return wrapper;
}

function createNewTextField (labelName, ID) {
    const label = document.createElement("label");
    label.textContent = labelName;
    const textArea = document.createElement("textarea");
    textArea.id = ID;
    textArea.placeholder = labelName;
    label.setAttribute("for", ID);

    const wrapper = document.createElement("div");
    wrapper.append(label);
    wrapper.append(textArea);

    return wrapper;
}

function createForm() {
    const form = document.createElement("form");

    const title = createNewSection("Title", 'text', 'title');
    const desc = createNewSection("Description", "text", "desc");
    const dueDate = createNewSection("Due Date", "date", "dueDate");

    const priority = document.createElement("fieldset");
    priority.textContent = "Priority";
    const priorities = [createNewSection("High Priority", "radio", "high"),
                        createNewSection("Med Priority", "radio", "med"),
                        createNewSection("Low Priority", "radio", "low")
                    ];
    priorities.forEach((p)=>priority.appendChild(p));
    const notes = createNewTextField("Notes", 'note');

    const sections = [title, desc, dueDate, priority, notes];

    sections.forEach((section) => {
        form.append(section);
    });
}
export default createForm();