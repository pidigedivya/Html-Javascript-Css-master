var fruits = ["apple", "orange", "cherry"];

function foreach() {
    var data = '';
    fruits.forEach((value, index, array) => {
        data = data + value + ', '
    });
    document.getElementById("id1").innerHTML = data;
};

function map() {
    var data = fruits.map((value, index, array) => {
        return value + " apple";
    });
    document.getElementById("id1").innerHTML = data;
};

function reduce() {
    var numbers = [45, 4, 9, 16, 25];
    var total = numbers.reduce((total, value, index, array) => {
        return total + value;
    });
    document.getElementById("id1").innerHTML = total;
};

function every() {
    var numbers = [45, 4, 9, 16, 25];
    var age = numbers.every((value, index, array) => {
        return value > 18;
    });
    document.getElementById("id1").innerHTML = age;
};

function some() {
    var numbers = [45, 4, 9, 16, 25];
    var age = numbers.some((value, index, array) => {
        return value > 18;
    });
    document.getElementById("id1").innerHTML = age;
};

function indexof() {
    var numbers = [45, 4, 9, 16, 25];
    var index = numbers.indexOf(16);
    document.getElementById("id1").innerHTML = index;
};

function find() {
    var numbers = [45, 4, 9, 16, 25];
    var value = numbers.find((value, index, array) => {
        return value > 18;
    });
    document.getElementById("id1").innerHTML = value;
};

function findIndex() {
    var numbers = [45, 4, 9, 16, 25];
    var index = numbers.findIndex((value, index, array) => {
        return value > 18;
    });
    document.getElementById("id1").innerHTML = index;
};

function splice() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"]; //adding at 2nd position and 0 remval
    fruits.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("id1").innerHTML = fruits;
};

function splice2() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"]; //adding at 2nd position and 1 remval
    fruits.splice(2, 1, "Lemon", "Kiwi");
    document.getElementById("id1").innerHTML = fruits;
};

function concat() {
    var myGirls = ["Cecilie"];
    var myBoys = ["Emil"];
    var myChildren = myGirls.concat(myBoys);
    document.getElementById("id1").innerHTML = myChildren;
};

function slice() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"]; //1 is start index, 3 is last index but not include last one
    var updated = fruits.slice(1, 2);
    document.getElementById("id1").innerHTML = updated;
};

function join() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var updated = fruits.join(" * ");
    document.getElementById("id1").innerHTML = updated;
};

function sort() {
    var numbers = [45, 4, 9, 16, 25];
    numbers.sort((a, b) => {
        return a - b
    });
    document.getElementById("id1").innerHTML = numbers;
};

function reverse() {
    var numbers = [45, 4, 9, 16, 25];
    numbers.reverse();
    document.getElementById("id1").innerHTML = numbers;
};