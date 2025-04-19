// Select elements
const input = document.getElementById("myInput");
const addBtn = document.getElementById("btn1");
const mainDiv = document.querySelector(".main1");

// Add event listener to Add button
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText !== "") {
        // Create a new task container
        const task = document.createElement("div");
        task.className = "task";

        // Create paragraph for task text
        const para = document.createElement("p");
        para.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "DELETE";

        // Add delete functionality
        deleteBtn.addEventListener("click", () => {
            task.remove(); // Remove the task from DOM
        });

        // Append paragraph and button to the task div
        task.appendChild(para);
        task.appendChild(deleteBtn);

        // Append the task to main container
        mainDiv.appendChild(task);

        // Clear input
        input.value = "";
    }
});
