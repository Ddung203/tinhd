
// !Show the number of times the web page was loaded
if (localStorage.getItem("count")) {
    // If it is, retrieve the value and increment it
    var count = localStorage.getItem("count");
    count++;
} else {
    // If it's not, set the count variable to 1
    var count = 1;
}
// Store the updated count variable in local storage
localStorage.setItem("count", count);
// Increment the count variable when the page loads
window.addEventListener("load", function () {
    count++;
});
console.log(count);
// display count
// document.getElementById("visit-count").textContent = count;

//! Main Logic processing
let tx1 = document.getElementById("tx1");
let trongso1 = document.getElementById("trongso1");
let tx2 = document.getElementById("tx2");
let trongso2 = document.getElementById("trongso2");
let thi = document.getElementById("thi");
// let kq = document.getElementById("kq");

const yc = document.getElementById("yc");
const ketqua = document.getElementById("ketqua");

ketqua.addEventListener("click", () => {
    let tx1Value = document.getElementById("tx1").value;
    let trongso1Value = document.getElementById("trongso1").value;
    let tx2Value = document.getElementById("tx2").value;
    let trongso2Value = document.getElementById("trongso2").value;
    let thiValue = document.getElementById("thi").value;
    let trongso3Value = document.getElementById("trongso3").value;
    let kqVal = document.getElementById("kq");

    let arr = [];
    arr.push(
        tx1Value,
        trongso1Value,
        tx2Value,
        trongso2Value,
        thiValue,
        trongso3Value
    );
    let kq =
        arr[0] * (arr[1] / 100) +
        arr[2] * (arr[3] / 100) +
        arr[4] * (arr[5] / 100);
    kqVal.value = kq;
    // console.log(kqVal.value);
});

yc.addEventListener("click", () => {
    let tx1Value = document.getElementById("tx1").value;
    let trongso1Value = document.getElementById("trongso1").value;
    let tx2Value = document.getElementById("tx2").value;
    let trongso2Value = document.getElementById("trongso2").value;
    let thiValue = document.getElementById("thi").value;
    let trongso3Value = document.getElementById("trongso3").value;
    let yeucau = document.getElementById("yeucau");
    let trongso3 = document.getElementById("trongso3");
    trongso3.value = 100 - trongso1Value - trongso2Value;
    trongso3Value = Number(trongso3.value);
    let arr = [];
    arr.push(
        tx1Value,
        trongso1Value,
        tx2Value,
        trongso2Value,
        thiValue,
        trongso3Value
    );

    let kq =
        (4 - (arr[0] * (arr[1] / 100) + arr[2] * (arr[3] / 100))) /
        arr[5];
    yeucau.value = kq * 100;
    // console.log(typeof trongso3.value);
});