var myList = [];
for (let i = 0; i < 5; i++) {
    myList[i] = window.prompt("Crea la tua lista con 5 oggetti\nOggetto no."+(i + 1));
    console.log(myList);
}
//node chiedere 
var divHTML = document.getElementById("main");
var listHTML = document.createElement("ol");
listHTML.classList.add("list-group");
listHTML.classList.add("list-group-numbered");
divHTML.append(listHTML);
for (let i = 0; i < 5; i++) {
    var listItem = document.createElement("li")
    listItem.classList.add("list-group-item")
    listHTML.appendChild (listItem);
    listItem.innerHTML = myList[i];
}

// document.createElement("ul");
// listHTML.classList.add("list-group list-group-numbered");
// document.body.appendChild(listHTML);
// let index = 0;
// while (index < 5) {
//     var listItem = document.createElement("li")
//     listItem.classList.add("list-group-item");
//     listHTML.appendChild (listItem);
//     listItem.innerHTML = myList[index];
//     index++;
// }