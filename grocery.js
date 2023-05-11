//initialising empty array to store list items 

var groceryList = 0;
 
// get input value
function addItems() {
    var item = document.getElementById("item").value;
    
    // checking if input is not empty
    if (item !==""){
    
        // add item to array    
        groceryList.push(item);
        
        // clair input field
        document.getElementById("item").value ="";
        
        // display update
        displayList();
    }
}