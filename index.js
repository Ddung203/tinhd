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
    const tx1 = document.getElementById("tx1");
    const trongso1 = document.getElementById("trongso1");
    const tx2 = document.getElementById("tx2");
    const trongso2 = document.getElementById("trongso2");
    const thi = document.getElementById("thi");
    const requireResult = document.getElementById("require-result");

    const tx1Value = Number(tx1.value);
    const trongso1Value = Number(trongso1.value);
    const tx2Value = Number(tx2.value);
    const trongso2Value = Number(trongso2.value);
    const thiValue = Number(thi.value);
    const trongso3Value = 100 - trongso1Value - trongso2Value;
    const requireResultValue = Number(requireResult.value);
    return [
        tx1Value,
        trongso1Value,
        tx2Value,
        trongso2Value,
        thiValue,
        trongso3Value,
        requireResultValue,
    ];
}

const calculateResult = (arr) =>
    arr[0] * (arr[1] / 100) +
    arr[2] * (arr[3] / 100) +
    arr[4] * (arr[5] / 100);
const calculateReqireResult = (arr) =>
    ((arr[6] - (arr[0] * (arr[1] / 100) + arr[2] * (arr[3] / 100))) / arr[5]) * 100;



const determineRank = (result) => {
    const rank = ["A", "B+", "B", "C+", "C", "D+", "D", "F"];
    switch (true) {
        case result < 4:
            return `${rank[7]}`;
        case result <= 4.9:
            return `${rank[6]}`;
        case result <= 5.5:
            return `${rank[5]}`;
        case result <= 6.4:
            return `${rank[4]}`;
        case result <= 6.9:
            return `${rank[3]}`;
        case result <= 7.9:
            return `${rank[2]}`;
        case result <= 8.4:
            return `${rank[1]}`;
        case result <= 10:
            return `${rank[0]}`;
    }
};

const requireBtnSubmit = document.getElementById("yc-btn");
const resultBtnSolve = document.getElementById("rs-btn");

resultBtnSolve.addEventListener("click", (e) => {
    e.preventDefault();
    const kqVal = document.getElementById("kq");

    const arr = data();
    const kq = calculateResult(arr);


    const rank = determineRank(kq);
    kqVal.value = `${(Math.round(kq * 100) / 100).toFixed(2)} - ${rank}`;
});

requireBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const arr = data();
    if (arr[6] > 10) {
        alert("Nhập lại yêu cầu chính xác!");
        const requireResult = document.getElementById("require-result");
        requireResult.value = "";
    } else {
        const requireVal = document.getElementById("yeucau");
        const kqVal = document.getElementById("kq");

        const kq = calculateReqireResult(arr);
        kq > 10 ? requireVal.value = `Không thể đạt điểm ${arr[6]}` :
            requireVal.value = `Cần đạt ${kq.toFixed(2)} điểm để là ${arr[6]}`;
    }
});
