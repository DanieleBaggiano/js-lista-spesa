const listElem = [];

listElem.push("latte", "uova", "pomodori", "mozzarelle");
console.log(listElem);

const containerElem = document.getElementById("container");

const ulElem = document.createElement("ul");
containerElem.append(ulElem);
console.log(containerElem);

let i = 0;

while (i < listElem.length) {
    const liElem = document.createElement("li");
    ulElem.append(liElem);
    const elem = listElem[i];
    liElem.append(elem);

    i++;
}