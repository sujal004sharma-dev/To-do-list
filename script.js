let btn = document.querySelector("button");
let input = document.querySelector("#text-input");
let list = document.querySelector("#TaskList");

localStorage.setItem("list", "value");

btn.addEventListener("click", function (dets) {
    const tasktext = input.value.trim();
    if (tasktext !== "") {
        const li = document.createElement("li");
        li.textContent = tasktext;

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.className = "delete";
        deletebtn.classList.add("delete")

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.className = "edit"
        editbtn.classList.add("edit");

        li.appendChild(editbtn);
        li.appendChild(deletebtn);

        list.appendChild(li);
        deletebtn.addEventListener("click", () => {
            li.remove();
        })

        editbtn.addEventListener("click", () => {
            const currenttask=li.firstChild.textContent;
            const newText = prompt("edit your task", currenttask);
            if (newText !== null && newText.trim() !== "") {
                li.firstChild.textContent = newText.trim();
            }
        })


        input.value = "";
    }
});


