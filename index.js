// Setting Up Variables
let theInput = document.querySelector(".add input");
let plusButton = document.querySelector(".add .plus");
let container = document.querySelector(".content");
let count = document.querySelector(".count span");
let complet = document.querySelector(".completed span");
// Focus On Input Field
window.onload = function () {
  theInput.focus();
};
// Adding The Task
plusButton.onclick = function () {
  // If Input is Empty
  if (theInput.value === "") {
    console.log("No Value");
  } else {
    let noMsg = document.querySelector(".no-message");
    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(document.querySelector(".no-message"))) {
      // Remove No Message
      noMsg.remove();
    }
    // Create Main Span Element
    let mainSpan = document.createElement("span");
    // Create Delete Button
    let deleteButton = document.createElement("span");
    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);
    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");
    // Add Text To Main Span
    mainSpan.appendChild(text);
    // Add Class To Main Span
    mainSpan.className = "box";
    // Add Text To Delete Button
    deleteButton.appendChild(deleteText);
    // Add Class To Delete Button
    deleteButton.className = "delete";
    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteButton);
    // Add The Task To The Container
    container.appendChild(mainSpan);
    // Empty The Input
    theInput.value = "";
    // Focus On Field
    theInput.focus();
    // Calculate Tasks
    calculatetasks();
  }
};
document.addEventListener("click", function (e) {
  // Delete Task
  if (e.target.className == "delete") {
    // Remove Current Task
    e.target.parentNode.remove();
    // Check Number Of Tasks Inside The Container
    if (container.childElementCount == 0) {
      createNoMessage();
    }
  }
  // Finish Task
  if (e.target.classList.contains("box")) {
    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
  }
  // Calculate Tasks
  calculatetasks();
});
// Function To Create No Tasks Message
function createNoMessage() {
  // Create Message Span Element
  let msgSpan = document.createElement("span");
  // Create The Text Message
  let msgtext = document.createTextNode("No Tasks To Show");
  // Add Text To Message Span Element
  msgSpan.appendChild(msgtext);
  // Add Class To Message Span
  msgSpan.className = "no-message";
  // Append The Message Span Element To The Task Container
  container.appendChild(msgSpan);
}
// Function To Calculate Tasks
function calculatetasks() {
  // Calculate All Tasks
  count.innerHTML = document.querySelectorAll(".content .box").length;
  // Calculate Completed Tasks
  complet.innerHTML = document.querySelectorAll(".content .finished").length;
}
