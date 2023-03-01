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
    // Thường xuyên 1
    const tx1 = document.getElementById("tx1");
    const trongso1 = document.getElementById("trongso1");
    // Thường xuyên 2
    const tx2 = document.getElementById("tx2");
    const trongso2 = document.getElementById("trongso2");
    // Thường xuyên 3
    const tx3 = document.getElementById("tx2");
    const trongso3 = document.getElementById("trongso3");
    // Điểm thi
    const thi = document.getElementById("thi");
    const requireResult = document.getElementById("require-result");

    const tx1Value = Number(tx1.value);
    const trongso1Value = Number(trongso1.value);
    const tx2Value = Number(tx2.value);
    const trongso2Value = Number(trongso2.value);
    const tx3Value = Number(tx3.value);
    const trongso3Value = Number(trongso3.value);
    const thiValue = Number(thi.value);
    const trongSoDiemThi = 100 - trongso1Value - trongso2Value;
    const requireResultValue = Number(requireResult.value);
    return [
        tx1Value,
        trongso1Value,
        tx2Value,
        trongso2Value,
        thiValue,
        trongSoDiemThi,
        requireResultValue,
        tx3Value,
        trongso3Value
    ];
}

// Kết quả
const calculateResult = (arr) =>
    arr[0] * (arr[1] / 100) +
    arr[2] * (arr[3] / 100) +
    arr[7] * (arr[8] / 100) +
    arr[4] * (arr[5] / 100);
// Yêu cầu
const calculateReqireResult = (arr) =>
    ((arr[6] - (arr[0] * (arr[1] / 100) + arr[2] * (arr[3] / 100) + arr[7] * (arr[8] / 100))) / arr[5]) * 100;
// Thang điểm
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

// Hiển thị data
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
            requireVal.value = `Cần đạt ${kq.toFixed(2)} để tổng điểm là ${arr[6]}`;
    }
});

//! Search
const dataJSON = {
    "monhoc": [
        {
            "MaMH": "LP6010",
            "TenMH": "Triết học Mác-Lênin",
            "Tx1": "30",
            "Tx2": "20",
            "Thi": "50",
            "id": 1
        },
        {
            "MaMH": "LP6011",
            "TenMH": "Kinh tế chính trị Mác-Lênin",
            "Tx1": "30",
            "Tx2": "20",
            "Thi": "50",
            "id": 2
        },
        {
            "MaMH": "LP6012",
            "TenMH": "Chủ nghĩa xã hội khoa học",
            "Tx1": "30",
            "Tx2": "20",
            "Thi": "50",
            "id": 3
        },
        {
            "MaMH": "LP6013",
            "TenMH": "Lịch sử Đảng Cộng sản Việt Nam",
            "Tx1": "30",
            "Tx2": "20",
            "Thi": "50",
            "id": 4
        },
        {
            "MaMH": "LP6004",
            "TenMH": "Tư tưởng Hồ Chí Minh",
            "Tx1": "30",
            "Tx2": "20",
            "Thi": "50",
            "id": 5
        },
        {
            "MaMH": "LP6003",
            "TenMH": "Pháp luật đại cương",
            "Tx1": "30",
            "Tx2": "20",
            "Thi": "50",
            "id": 6
        },
        {
            "MaMH": "ME6060",
            "TenMH": "Tác phong làm việc chuyên nghiệp",
            "Tx1": "20",
            "Tx2": "20",
            "Thi": "60",
            "id": 7
        },
        {
            "MaMH": "BS6002",
            "TenMH": "Giải tích",
            "Tx1": "15",
            "Tx2": "20",
            "Tx3": "15",
            "Thi": "50",
            "id": 8
        },
        {
            "MaMH": "BS6001",
            "TenMH": "Đại số tuyến tính",
            "Tx1": "15",
            "Tx2": "20",
            "Tx3": "15",
            "Thi": "50",
            "id": 9
        },
        {
            "MaMH": "IT6027",
            "TenMH": "Nhập môn lập trình máy tính",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 10
        },
        {
            "MaMH": "IT6035",
            "TenMH": "Toán rời rạc",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 11
        },
        {
            "MaMH": "IT6036",
            "TenMH": "Tối ưu hóa",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 12
        },
        {
            "MaMH": "BS6008",
            "TenMH": "Xác suất thống kê",
            "Tx1": "10",
            "Tx2": "20",
            "Tx3": "10",
            "Thi": "60",
            "id": 13
        },
        {
            "MaMH": "IT6011",
            "TenMH": "Nhập môn về kỹ thuật",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 14
        },
        {
            "MaMH": "IT6006",
            "TenMH": "Cơ sở dữ liệu",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 15
        },
        {
            "MaMH": "IT6014",
            "TenMH": "Kiến trúc máy tính",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 16
        },
        {
            "MaMH": "IT6015",
            "TenMH": "Kỹ thuật lập trình",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 17
        },
        {
            "MaMH": "IT6039",
            "TenMH": "Thiết kế Web",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 18
        },
        {
            "MaMH": "IT6002",
            "TenMH": "Cấu trúc dữ liệu và giải thuật",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 19
        },
        {
            "MaMH": "IT6012",
            "TenMH": "Hệ quản trị cơ sở dữ liệu",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 20
        },
        {
            "MaMH": "IT6018",
            "TenMH": "Lập trình hướng đối tượng",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 21
        },
        {
            "MaMH": "IT6025",
            "TenMH": "Nguyên lý hệ điều hành",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 22
        },
        {
            "MaMH": "IT6097",
            "TenMH": "Phân tích và đặc tả yêu cầu phần mềm",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 23
        },
        {
            "MaMH": "IT6040",
            "TenMH": "Thực tập cơ sở ngành",
            "Tx1": "0",
            "Tx2": "0",
            "Tx3": "0",
            "Thi": "100",
            "id": 24
        },
        {
            "MaMH": "IT6023",
            "TenMH": "Mạng máy tính",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 25
        },
        {
            "MaMH": "IT6043",
            "TenMH": "Trí tuệ nhân tạo",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 26
        },
        {
            "MaMH": "IT6001",
            "TenMH": "An toàn và bảo mật thông tin",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 27
        },
        {
            "MaMH": "IT6096",
            "TenMH": "Thiết kế phầm mềm",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 28
        },
        {
            "MaMH": "IT6033",
            "TenMH": "Quản lý dự án công nghệ thông tin",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 29
        },
        {
            "MaMH": "IT6007",
            "TenMH": "Cơ sở lập trình nhúng",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 30
        },
        {
            "MaMH": "IT6010",
            "TenMH": "Đồ họa máy tính",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 31
        },
        {
            "MaMH": "IT6037",
            "TenMH": "Thiết kế giao diện người dùng",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 32
        },
        {
            "MaMH": "IT6003",
            "TenMH": "Công cụ phát triển phần mềm",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 33
        },
        {
            "MaMH": "IT6044",
            "TenMH": "Ứng dụng thuật toán",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 34
        },
        {
            "MaMH": "IT6032",
            "TenMH": "Phương pháp số trong lập trình",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 35
        },
        {
            "MaMH": "IT6082",
            "TenMH": "Nhập môn công nghệ phần mềm",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 36
        },
        {
            "MaMH": "IT6017",
            "TenMH": "Lập trình .NET",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 37
        },
        {
            "MaMH": "IT6013",
            "TenMH": "Kiểm thử phần mềm",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 38
        },
        {
            "MaMH": "IT6019",
            "TenMH": "Lập trình Java",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 39
        },
        {
            "MaMH": "IT6041",
            "TenMH": "Thực tâp chuyên ngành Kỹ thuật phần mềm",
            "Tx1": "0",
            "Tx2": "0",
            "Tx3": "0",
            "Thi": "100",
            "id": 40
        },
        {
            "MaMH": "IT6008",
            "TenMH": "Đảm bảo chất lượng phần mềm",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 41
        },
        {
            "MaMH": "IT6024",
            "TenMH": "Một số công nghệ phát triển phần mềm",
            "Tx1": "20",
            "Tx2": "30",
            "Tx3": "0",
            "Thi": "50",
            "id": 42
        },
        {
            "MaMH": "IT6004",
            "TenMH": "Công nghệ đa phương tiện",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 43
        },
        {
            "MaMH": "IT6005",
            "TenMH": "Công nghệ thực tại ảo",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 44
        },
        {
            "MaMH": "IT6020",
            "TenMH": "Lập trình Java nâng cao",
            "Tx1": "20",
            "Tx2": "30",
            "Tx3": "0",
            "Thi": "50",
            "id": 45
        },
        {
            "MaMH": "IT6021",
            "TenMH": "Lập trình Web bằng ASP.NET",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 46
        },
        {
            "MaMH": "IT6022",
            "TenMH": "Lập trình web bằng PHP",
            "Tx1": "15",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "60",
            "id": 47
        },
        {
            "MaMH": "IT6030",
            "TenMH": "Phần mềm mã nguồn mở",
            "Tx1": "15",
            "Tx2": "15",
            "Tx3": "0",
            "Thi": "70",
            "id": 48
        },
        {
            "MaMH": "IT6028",
            "TenMH": "Phát triển ứng dụng Game",
            "Tx1": "20",
            "Tx2": "20",
            "Tx3": "0",
            "Thi": "60",
            "id": 49
        },
        {
            "MaMH": "IT6029",
            "TenMH": "Phát triển ứng dụng trên thiết bị di động",
            "Tx1": "20",
            "Tx2": "30",
            "Tx3": "0",
            "Thi": "50",
            "id": 50
        },
        {
            "MaMH": "IT6034",
            "TenMH": "Tích hợp hệ thống phần mềm",
            "Tx1": "25",
            "Tx2": "25",
            "Tx3": "0",
            "Thi": "50",
            "id": 51
        }
    ]
}
// JavaScript: Get the input and list elements
const inputBox = document.getElementById("search__input");
const hintList = document.getElementById("hintList");
// Get search button and handle
const subjectBtn = document.getElementById("search__button");
subjectBtn.onclick = function (e) {
    e.preventDefault();
    const subjectName = document.getElementById("search__input").value.toLowerCase().trim();
    const subjectData = dataJSON.monhoc.find(subject => subject.TenMH.toLowerCase() === subjectName);
    if (subjectData) {
        // console.log(subjectData);
        changeTrongSoValue(subjectData);
    } else {
        alert("Không tìm thấy môn học");
    }
}
/** 
 * 575 - 589:
 * The code block you provided initializes 
 * a variable subjectBtn to reference an HTML button element 
 * with the ID "search__button". 
 * It then adds an event listener to the button using onclick, which takes an anonymous function as an argument.

When the button is clicked, the function is called and 
it prevents the default behavior of the button 
using e.preventDefault(). 
It then gets the value of an input field with the ID 
"search__input" and converts it to lowercase and 
removes any leading or trailing whitespace using toLowerCase() 
and trim(), respectively.

The function then uses the find() method on 
the dataJSON.monhoc array 
to search for an object with a property TenMH 
that matches the subjectName variable. 
If a matching object is found, 
it calls the changeTrongSoValue() function 
and passes the object as an argument. 
If no matching object is found, 
it displays an alert with the message "Không tìm thấy môn học".
 *
*/

// Display hint list (ul li)
function showHint() {
    // Get the input value
    const inputValue = inputBox.value;
    let hints = "";
    // Search through the "monhoc" array
    if (inputValue !== '') {
        dataJSON.monhoc.forEach(subject => {
            if (subject.TenMH.toLowerCase().startsWith(inputValue.toLowerCase())) {
                hints += `<li class="li-monhoc" onclick="selectSubject('${subject.TenMH}')">${subject.TenMH}</li>`;
            }
        });
        // Update the list of suggestions
        hintList.innerHTML = hints;
    } else {
        hintList.innerHTML = hints;
    }

}
// Select hint
function selectSubject(subjectName) {
    // Do something with the selected subject
    hintList.innerHTML = "";
    inputBox.value = subjectName;
}

function changeTrongSoValue (data) {
    const trongso1 = document.getElementById("trongso1");
    trongso1.value = data.Tx1;
    const trongso1Value = Number(trongso1.value);

    const trongso2 = document.getElementById("trongso2");
    trongso2.value = data.Tx2;
    const trongso2Value = Number(trongso2.value);

    const trongso3 = document.getElementById("trongso3");
    trongso3.value = Number(data.Tx3 || 0);
    const trongso3Value = Number(trongso3.value);

    const trongSoDiemThi = 100 - trongso1Value - trongso2Value - trongso3Value;
}








