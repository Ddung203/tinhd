
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
    let requireResult = document.getElementById("require-result");

    let tx1Value = Number(tx1.value);
    let trongso1Value = Number(trongso1.value);
    let tx2Value = Number(tx2.value);
    let trongso2Value = Number(trongso2.value);
    let thiValue = Number(thi.value);
    let trongso3Value = 100 - trongso1Value - trongso2Value;
    let requireResultValue = Number(requireResult.value);
    return [
        tx1Value, trongso1Value,
        tx2Value, trongso2Value,
        thiValue, trongso3Value,
        requireResultValue
    ];
}

const requireBtnSubmit = document.getElementById("yc-btn");
const resultBtnSolve = document.getElementById("rs-btn");

resultBtnSolve.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(data());
    let kqVal = document.getElementById("kq");

    let arr = data();
    let kq =
        arr[0] * (arr[1] / 100) +
        arr[2] * (arr[3] / 100) +
        arr[4] * (arr[5] / 100);
    ;

    // Xác định thang điểm
    let rank = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];
    if (kq < 4) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[7]}`;
    }
    else if (kq <= 4.9) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[6]}`;
    }
    else if (kq <= 5.5) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[5]}`;
    }
    else if (kq <= 6.4) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[4]}`;
    }
    else if (kq <= 6.9) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[3]}`;
    }
    else if (kq <= 7.9) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[2]}`;
    }
    else if (kq <= 8.4) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[1]}`;
    }
    else if (kq <= 10) {
        kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank[0]}`;
    }
});

requireBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let arr = data();
    if (arr[6] > 10) {
        alert("Nhập lại yêu cầu chính xác!");
        let requireResult = document.getElementById("require-result");
        requireResult.value = '';
    } else {
        let requireVal = document.getElementById("yeucau");
        let kq =
            (arr[6] - (arr[0] * (arr[1] / 100) + arr[2] * (arr[3] / 100))) /
            arr[5];
        requireVal.value = kq * 100;
        console.log(requireVal.value);
    }

});