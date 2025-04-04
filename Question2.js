const createBtn = document.querySelector(".crt-btn");
const container = document.querySelector(".container");

// Load notes from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(content => createNote(content));
});

function createNote(content = "") {
    const box = document.createElement("div");
    box.classList.add("box");

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Write your notes here!";
    textarea.value = content;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("dlt-btn");
    deleteBtn.textContent = "Delete";

    box.appendChild(textarea);
    box.appendChild(deleteBtn);
    container.appendChild(box);

    // Save on input
    textarea.addEventListener("input", saveNotes);

    // Delete on click
    deleteBtn.addEventListener("click", () => {
        box.remove();
        saveNotes();
    });
}

function saveNotes() {
    const allTextareas = document.querySelectorAll("textarea");
    const notes = Array.from(allTextareas).map(t => t.value);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Create button click
createBtn.addEventListener("click", () => {
    createNote();
});
