let age = 23;
var date = new Date();
let findYear=(d)=>{
    var output = d.getFullYear();
    console.log(output - age);
    console.log("Today's Date is (dd/mm/yyyy): " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
    if(output - age < 2000){
        console.log("Gettin' old!");
    } else {
        console.log("And the younglings too!");
    };
};
findYear(date);

let m1 = document.getElementById("m1");
let m5 = document.getElementById("m5");
let m10 = document.getElementById("m10");
let p1 = document.getElementById("p1");
let p5 = document.getElementById("p5");
let p10 = document.getElementById("p10");
let counter = document.getElementById("CountNum");
let count = 0;

let increaseNum = (num) =>{
    for(let i = 0; i<num; i++){
        count += num; 
        updateCounter(count);
    }
};

let decreaseNum = (num) =>{
    count -= num;
    updateCounter(count);
};

m1.onclick = function () {
    decreaseNum(-1);
};

m5.onclick = function () {
    decreaseNum(-5);
};

m10.onclick = function () {
    decreaseNum(-10);
};

p1.onclick = function () {
    increaseNum(1);
};

p5.onclick = function() {
    increaseNum(5);
};

p10.onclick = function () {
    increaseNum(10);
};

let updateCounter = (num) =>{
    counter.innertext = num
}