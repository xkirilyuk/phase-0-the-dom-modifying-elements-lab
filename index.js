const element = document.querySelector('main');
element.remove();

// const newHeader = document.createElement("h1");
//document.body.append(newHeader);
//const victory1 = document.createTextNode("victory");
//newHeader.appendChild(victory1)

//const champion = document.createTextNode("YOUR-NAME is the champion");

//victory.innerHTML = "<h1>YOUR-NAME is the champion</h1>";

//const victory = document.getElementById("victory");

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);