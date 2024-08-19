// script.js


window.onload = function() {
    document.getElementById('judul').innerText = 'Latihan JavaScript Selesai';

    let name = "John"; 
    const age = 30;
    document.getElementById('output').innerText = "Nama:" +name +"umur:"+age;

    // Latihan 2: Variabel dan Tipe Data

    let fruits = ["Apple", "Banana", "Mango"];
    for (let i = 0; i < fruits.length; i++) {
        // Membuat elemen <p> untuk setiap buah
        let fruitItem = document.createElement('p');
        fruitItem.innerText = fruits[i];
        // Menambahkan elemen <p> ke dalam div dengan id 'output'
        output.appendChild(fruitItem);
    }

    let person = {firstName: "John", lastName: "Doe", age: 30}; 
    // Mendapatkan elemen <div> dengan id 'output'
    let biodataDiv = document.getElementById('output'); 
    // Membuat elemen <p> untuk data person
    let biodata = document.createElement('p');
    biodata.innerText = "First Name: " + person.firstName+" | lastname: " + person.lastName;
     
    // Menambahkan elemen <p> ke dalam div dengan id 'output'
    biodataDiv.appendChild(biodata); 


};


    // Latihan 3: Pengendalian Alur (Control Flow)

function ceknilai() {
    // Mendapatkan nilai dari input text dengan id 'input-text'
    let inputnilai = document.getElementById('txtnilai').value;
 
    if (inputnilai > 10) {
        ket="Nilai lebih besar dari 10";
    } else {
        ket="Nilai lebih kecil dari 10";
    }

    // Mendapatkan elemen <div> dengan id 'display'
    let displayDiv = document.getElementById('output');
    let nilai = document.createElement('p');
        nilai.innerText = "Input Nilai:" + inputnilai;
    let keterangan = document.createElement('p');
        keterangan.innerText = "Keterangan :" + ket;
   
    //document.getElementById('output').innerText = "Nama:" +name +"umur:"+age;
    let garis = document.createElement('hr'); 
        displayDiv.appendChild(garis); 

    displayDiv.appendChild(nilai);   //data dalam div tidak di clear tapi menambah  baris
    displayDiv.appendChild(keterangan);   //data dalam div tidak di clear tapi menambah  baris
     
    for (let i = 1; i < inputnilai; i++) {
        console.log("Iterasi ke-" + i);
        let angka = document.createElement('p');
        angka.innerText = "angka :" + i;
        displayDiv.appendChild(angka);   //data dalam div tidak di clear tapi menambah  baris 
    } 

}

    // Latihan 4: Fungsi dalam JavaScript 
    function greet(name) { 
        let outputDiv = document.getElementById('output');
        outputDiv.innerHTML = "<br>" + "hello.. "+name + "<br>";
        return name;
    } 

// Fungsi untuk menghitung kuadrat dari angka yang diberikan 
function calculateSquare(number) {
    return number * number;
}

// Fungsi untuk menampilkan kuadrat dari beberapa angka
function displaySquares() {
    const numbers = [2, 4, 6]; // Angka yang akan dihitung kuadratnya
    const outputDiv = document.getElementById('output'); // Ambil elemen div dengan id 'output' 
    outputDiv.innerHTML = '<br>'; // Kosongkan output sebelum menampilkan hasil baru

    // Loop melalui setiap angka dan tampilkan hasilnya di div
    numbers.forEach(function(num) {
        const square = calculateSquare(num);
        outputDiv.innerHTML += `Pangkat dari :  ${num} = ${square}.<br>`;
    });
}

 
// Fungsi untuk menghitung dan menampilkan hasil penjumlahan
function calculateAndDisplaySum() {
    const num1 = 5; // Angka pertama
    const num2 = 7; // Angka kedua 
    // Arrow function untuk menjumlahkan dua angka
    const tambahanangka = (a, b) => a + b; 

    // Panggil arrow function untuk menjumlahkan kedua angka
    const sum = tambahanangka(num1, num2); 
    // Tampilkan hasilnya di elemen div dengan id 'output'
    document.getElementById('output').innerText = `Total :  ${num1} + ${num2} = ${sum}.`;
}

// Latihan 5: Manipulasi Array dan Objek

// Array students
let students = ["Alice", "Bob", "Charlie"]; 
// Fungsi untuk menambahkan nama dan menampilkan semua nama siswa
function displayStudents() { 
    // Dapatkan elemen div dengan id 'output'
    const outputDiv = document.getElementById('output'); 
    // Kosongkan div sebelum menampilkan hasil baru
    outputDiv.innerHTML = ''; 
     // Menambahkan nama ke array menggunakan push()
        students.push("Diana");  
    // Menggunakan forEach() untuk menampilkan semua nama siswa
    students.forEach(student => {
        outputDiv.innerHTML +=  `<li>${student}<br>`;
    });
}


//Tampilkan semua properti dari objek car menggunakan for...in loop 
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Fungsi untuk menampilkan semua properti dari objek car
function displayCarProperties() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Kosongkan div sebelum menampilkan hasil baru

    // Menggunakan for...in loop untuk menampilkan semua properti objek car
    for (let key in car) {
        if (car.hasOwnProperty(key)) {
            outputDiv.innerHTML += `${key}: ${car[key]}<br>`;
        }
    }
}

// Array objek untuk menyimpan data beberapa mobil
let cars = [
    { brand: "Toyota", model: "Corolla", year: 2020 },
    { brand: "Honda", model: "Civic", year: 2021 } 
];

// Fungsi untuk menampilkan informasi setiap mobil menggunakan forEach
function displayCars() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Kosongkan div sebelum menampilkan hasil baru

    // Menggunakan forEach() untuk menampilkan informasi setiap mobil
    cars.forEach(car => {
        outputDiv.innerHTML += `<strong>Brand:</strong> ${car.brand} <br>`;
        outputDiv.innerHTML += `<strong>Model:</strong> ${car.model} <br>`;
        outputDiv.innerHTML += `<strong>Year:</strong> ${car.year} <br><br>`;
    });
}




