document.querySelector('.invoice-btn').onclick = function(){
    print();
}

document.querySelector(".invoice-wrapper .close-btn").addEventListener("click", () =>{

    document.querySelector(".invoice-wrapper").classList.remove("active");
    document.querySelector(".main-window").classList.remove("active");
    document.querySelector(".sidebar").classList.remove("active");
});

Window.onload = function() {
    document.getElementById("download")
    .addEventListener("click", () => {
        const invoice = this.document.getElementById("print-area");
        html2pdf().from(invoice).save();
    })
}

// fetch(`./json/data.json`) 
//     .then(function(response) {
//         return response.json();
//     })
//     .then (function(data) {
//         let placeholder = document.querySelector("#table-body");
//         let out = "";
//         for (let product of data) {
//             out += `
//             <tr>
//                 <td>${product.med_Id}</td>
//                 <td>${product.med_name}</td>
//                 <td>${product.price}</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//         `;
//         }

//         placeholder.innerHTML = out;
//     });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc,
    Timestamp,
    QuerySnapshot,
    updateDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP_0hKxMychNVPfFeozLAytkurhZ6B8Cg",
    authDomain: "ithopital.firebaseapp.com",
    databaseURL: "https://ithopital-default-rtdb.firebaseio.com",
    projectId: "ithopital",
    storageBucket: "ithopital.appspot.com",
    messagingSenderId: "513901096082",
    appId: "1:513901096082:web:449e1809ecbf7c7d860a4b",
    measurementId: "G-WDFCQQ7JX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize service
const database = getFirestore();

// collection ref
const colRefBill = collection(database, 'bill');

/* DISPLAY BILL LIST */
onSnapshot(colRefBill, (snapshot) => {

    let billList = [];
    snapshot.docs.forEach((doc) => {
        billList.push({ ...doc.data(), id: doc.id });
    })
    // console.log(billList);
    addAllItemToTable(billList);
});

var no = 0;
var tbody = document.getElementById('tbody1');

function addItemToTable(bhyt, name, phone, id) {
    
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    td0.innerHTML = no++;
    td1.innerHTML = bhyt;
    td2.innerHTML = name;
    td3.innerHTML = phone;
    td4.innerHTML = id;
    td5.innerHTML = "Chưa"
 
    trow.appendChild(td0); td0.className = 'no';
    trow.appendChild(td1); td1.className = 'bhyt'
    trow.appendChild(td2); td2.className = 'name';
    trow.appendChild(td3); td3.className = 'phone';
    trow.appendChild(td4); td4.className = 'precription';
    trow.appendChild(td5); td5.className = 'status';

    var controlDiv = document.createElement('div');
    controlDiv.id = 'controlDiv';
    controlDiv.innerHTML = `<button type="button" class="btn-bill"><i class='bx bx-credit-card-alt'></i></button>`;

    trow.appendChild(controlDiv);
    tbody.appendChild(trow);
}

function addAllItemToTable(billList) {

    no = 1;
    tbody.innerHTML = "";
    billList.forEach(element => {
        addItemToTable( element.bhyt,
                        element.patient, 
                        element.contact, 
                        element.id);
    });
}
/* END DISPLAY BILL LIST */

/* SEARCH */
var searchBar = document.getElementById("searchBar");
var searchBtn = document.getElementById("searchButton");
var category = document.getElementById("categorySelected");
var tbody = document.getElementById("tbody1");

function searchTable(Category) {

    var filter = searchBar.value.toUpperCase();
    var tr = tbody.getElementsByTagName("tr");
    var found;

    for (let i = 0; i < tr.length; i++) {

        var td = tr[i].getElementsByClassName(Category);

        for (let j = 0; j < td.length; j++) {
            
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }

        if (found) {
            tr[i].style.display = "table-row";
            found = false;
        }
        else {
            tr[i].style.display = "none";
        }
    }
}

searchBtn.onclick = function() {

    if (searchBar.value == "") searchTable("precription");
    else if (category.value == 1) searchTable("precription");
    else if (category.value == 2) searchTable("bhyt");
    else if (category.value == 3) searchTable("name");
    else if (category.value == 4) searchTable("phone");
}

/* END SEARCH */