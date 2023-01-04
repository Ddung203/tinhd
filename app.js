
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


//! Main Logic processing
function data() {
    let tx1 = document.getElementById("tx1");
    let trongso1 = document.getElementById("trongso1");
    let tx2 = document.getElementById("tx2");
    let trongso2 = document.getElementById("trongso2");
    let thi = document.getElementById("thi");
    let kq = document.getElementById("kq");


    let tx1Value = Number(document.getElementById("tx1").value);
    let trongso1Value = Number(trongso1.value);
    let tx2Value = Number(document.getElementById("tx2").value);
    let trongso2Value = Number(trongso2.value);
    let thiValue = Number(document.getElementById("thi").value);
    let trongso3Value = 100 - trongso1Value - trongso2Value;

    return [
        tx1Value, trongso1Value,
        tx2Value, trongso2Value,
        thiValue, trongso3Value
    ];
}

const yc = document.getElementById("yc");
const resultBtn = document.getElementById("rs-btn");

resultBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(data());
    let kqVal = document.getElementById("kq");

    let arr = data();
    let kq =
        arr[0] * (arr[1] / 100) +
        arr[2] * (arr[3] / 100) +
        arr[4] * (arr[5] / 100);
    kqVal.value = kq;
    // Xác định thang điểm
    let rank = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];
    if (kq < 4) {
        kqVal.value = `${kq} - ${rank[7]}`;
    }
    else if (kq <= 4.9) {
        kqVal.value = `${kq} - ${rank[6]}`;
    }
    else if (kq <= 5.5) {
        kqVal.value = `${kq} - ${rank[5]}`;
    }
    else if (kq <= 6.4) {
        kqVal.value = `${kq} - ${rank[4]}`;
    }
    else if (kq <= 6.9) {
        kqVal.value = `${kq} - ${rank[3]}`;
    }
    else if (kq <= 7.9) {
        kqVal.value = `${kq} - ${rank[2]}`;
    }
    else if (kq <= 8.4) {
        kqVal.value = `${kq} - ${rank[1]}`;
    }
    else if (kq <= 10) {
        kqVal.value = `${kq} - ${rank[0]}`;
    }
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