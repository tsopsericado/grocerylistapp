//initialising empty array to store list items

var groceryList = 0;

// get input value
function addItems() {
  var item = document.getElementById("item").value;

  // checking if input is not empty
  if (item !== "") {
    // add item to array
    groceryList.push(item);

    // clair input field
    document.getElementById("item").value = "";

    // display update
    displayList();
  }
}

// Initialising unordered list tag

function displayList() {
  var list = "<ul>"; 
  for (var i = 0; i < groceryList.length; i++) {
    list +=
      "<li>" +
      groceryList[i] +
      " <button onclick='editItem(" +
      i +
      ")'>Edit</button> <button onclick='deleteItem(" +
      i +
      ")'>Delete</button></li>";
    // add list item with edit and delete buttons
  }
    //close unordered list tag
   list += "</ul>"
   //display list on page 
   document.getElementById("list").innerHTML = list;
}
  function deleteItem(index) {
    // remove item from array at specified index
    groceryList.splice(index, 1);
    // display updated list
    displayList();
  }
