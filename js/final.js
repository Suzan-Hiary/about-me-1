'use strict';


let form = document.getElementById('form');
let table = document.getElementById('table');


function tables() {

    let tr = document.createElement('tr')
    table.appendChild(tr);

    let td = document.createElement('td')
    tr.appendChild(td);
    td.textContent = 'User Name';

    let td1 = document.createElement('td')
    tr.appendChild(td1);
    td1.textContent = 'place';

    let td2 = document.createElement('td')
    tr.appendChild(td2);
    td2.textContent = 'image';

    let td3 = document.createElement('td')
    tr.appendChild(td3);
    td3.textContent = 'Delete';
}
tables();



function Order(name, place, path) {
    this.name = name;
    this.place = place;
    this.path = path;

    allorder.push(this);
}

let allorder = [];


Order.prototype.render = function () {

    let tr = document.createElement('tr')
    table.appendChild(tr);

    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.place;

    let td2 = document.createElement('img');
    tr.appendChild(td2);
    td2.src = this.path;

    let td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.textContent = 'X';
    td4.addEventListener('click', deleted);
}


function eventhandle(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let place = event.target.place.value;
    let path;

    switch (place.toLowerCase()) {
        case 'salt':
            path = 'imge/LONDON.png';
            break;
        case 'amman':
            path = 'imge/PARIS.png';
            break;
        case 'aqaba':
            path = 'imge/ITALY.png';
            break;
        default:
            break;
    }

    console.log(path)
    let neworder = new Order(name, place, path);


    neworder.render();

    localStorage.setItem('order', JSON.stringify(allorder));

}

form.addEventListener('submit', eventhandle);

function getdata() {
    let data = JSON.parse(localStorage.getItem('order'));

    if (data) {
        for (let i = 0; i < data.length; i++) {
            let neworder = new Order(data[i].name, data[i].place, data[i].path);
            neworder.render();
        }
    }
}
getdata();

function deleted(event) {
    if (event.target.textContent === 'X') {
        allorder.splice(event.target.parentElement.id, 1);
        localStorage.setItem('order', JSON.stringify(allorder));
        window.location.href = window.location.href;

    }


}


