let btn = document.querySelector("button"); 
let ul = document.querySelector("ul"); 
let inp = document.querySelector("input"); 

// Function to add task
function addTask() {
  let inputValue = inp.value.trim(); 

  if (inputValue === "") {
    alert("Input cannot be empty!"); 
    return; 
  }

  let item = document.createElement("li"); 
  item.innerText = inputValue; 
  ul.appendChild(item);

  
  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);

  console.log(inputValue); 
  inp.value = ""; 
}



// Add click event listener to the button
btn.addEventListener("click", addTask);

// Add delete functionality for dynamic delete buttons inside the unordered list
ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove(); // Remove the parent list item when delete button is clicked
  }
});

// Add 'Enter' key press functionality
document.getElementById("myInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default Enter key action (like form submission)
    addTask(); // Call the addTask function when Enter is pressed
  }
});
