let finalExamWeight = 0;
const inputBox = document.getElementById("search__input");
const hintList = document.getElementById("hintList");
const subjectBtn = document.getElementById("search__button");

const resultBtnSolve = document.getElementById("result-btn");
const requireBtnSubmit = document.getElementById("require-btn");
const resultValue = document.getElementById("result-value");
const requiredResult = document.getElementById("required-result");
const requiredValue = document.getElementById("required-value");

let weight1 = document.getElementById("weight1");
let weight2 = document.getElementById("weight2");
let weight3 = document.getElementById("weight3");

//! Main Logic processing
function getData() {
  function getElementValue(id) {
    const element = document.getElementById(id);
    if (element) {
      return element.value;
    } else {
      console.error(`Không tìm thấy phần tử với id: ${id}`);
      return null;
    }
  }

  const score1 = getElementValue("score1");
  const weight1 = getElementValue("weight1");
  const score2 = getElementValue("score2");
  const weight2 = getElementValue("weight2");
  const score3 = getElementValue("score3");
  const weight3 = getElementValue("weight3");

  const finalExam = getElementValue("final-exam");
  const requiredResult = getElementValue("required-result");

  finalExamWeight = 100 - weight1 - weight2 - weight3;

  return {
    score1,
    weight1,
    score2,
    weight2,
    score3,
    weight3,
    finalExam,
    finalExamWeight,
    requiredResult,
  };
}

const calculateResult = (data) =>
  data.score1 * (data.weight1 / 100) +
  data.score2 * (data.weight2 / 100) +
  data.score3 * (data.weight3 / 100) +
  data.finalExam * (data.finalExamWeight / 100);

const calculateRequiredResult = (data) => {
  console.log(
    (data.requiredResult -
      (data.score1 * (data.weight1 / 100) +
        data.score2 * (data.weight2 / 100) +
        data.score3 * (data.weight3 / 100))) /
      (data.finalExamWeight / 100)
  );
  return (
    (data.requiredResult -
      (data.score1 * (data.weight1 / 100) +
        data.score2 * (data.weight2 / 100) +
        data.score3 * (data.weight3 / 100))) /
    (data.finalExamWeight / 100)
  );
};

const determineGrade = (result) => {
  switch (true) {
    case result < 4:
      return `F (Học lại)`;
    case result <= 4.6:
      return `D`;
    case result <= 5.4:
      return `D+`;
    case result <= 6.1:
      return `C`;
    case result <= 6.9:
      return `C+`;
    case result <= 7.6:
      return `B`;
    case result <= 8.4:
      return `B+`;
    case result <= 10:
      return `A`;
    default:
      return `Nhập sai`;
  }
};

resultBtnSolve.addEventListener("click", (e) => {
  e.preventDefault();
  const data = getData();
  const result = calculateResult(data);
  const grade = determineGrade(result);
  resultValue.value = `${(Math.round(result * 100) / 100).toFixed(
    2
  )} - ${grade}`;
});

requireBtnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const data = getData();
  if (data.requiredResult > 10 || data.requiredResult < 0) {
    alert("Hãy nhập giá trị hợp lệ (0<=x<=10)!");
    requiredResult.value = "";
  } else {
    const result = calculateRequiredResult(data);
    result > 10
      ? (requiredValue.value = `Không thể đạt ${data.requiredResult}`)
      : (requiredValue.value = `Bạn cần ${result.toFixed(2)} điểm`);
  }
});

//! Search
const dataJSON = {
  subjects: [
    {
      MaMH: "LP6010",
      TenMH: "Triết học Mác-Lênin",
      Tx1: "30",
      Tx2: "20",
      Tx3: "0",
      Thi: "50",
      id: 1,
    },
    {
      MaMH: "LP6011",
      TenMH: "Kinh tế chính trị Mác-Lênin",
      Tx1: "30",
      Tx2: "20",
      Tx3: "0",
      Thi: "50",
      id: 2,
    },
    {
      MaMH: "LP6012",
      TenMH: "Chủ nghĩa xã hội khoa học",
      Tx1: "30",
      Tx2: "20",
      Tx3: "0",
      Thi: "50",
      id: 3,
    },
    {
      MaMH: "LP6013",
      TenMH: "Lịch sử Đảng Cộng sản Việt Nam",
      Tx1: "30",
      Tx2: "20",
      Tx3: "0",
      Thi: "50",
      id: 4,
    },
    {
      MaMH: "LP6004",
      TenMH: "Tư tưởng Hồ Chí Minh",
      Tx1: "30",
      Tx2: "20",
      Tx3: "0",
      Thi: "50",
      id: 5,
    },
    {
      MaMH: "LP6003",
      TenMH: "Pháp luật đại cương",
      Tx1: "30",
      Tx2: "20",
      Tx3: "0",
      Thi: "50",
      id: 6,
    },
    {
      MaMH: "ME6060",
      TenMH: "Tác phong làm việc chuyên nghiệp",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 7,
    },
    {
      MaMH: "BS6002",
      TenMH: "Giải tích",
      Tx1: "15",
      Tx2: "20",
      Tx3: "15",
      Thi: "50",
      id: 8,
    },
    {
      MaMH: "BS6001",
      TenMH: "Đại số tuyến tính",
      Tx1: "15",
      Tx2: "20",
      Tx3: "15",
      Thi: "50",
      id: 9,
    },
    {
      MaMH: "IT6027",
      TenMH: "Nhập môn lập trình máy tính",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 10,
    },
    {
      MaMH: "IT6035",
      TenMH: "Toán rời rạc",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 11,
    },
    {
      MaMH: "IT6036",
      TenMH: "Tối ưu hóa",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 12,
    },
    {
      MaMH: "BS6008",
      TenMH: "Xác suất thống kê",
      Tx1: "10",
      Tx2: "20",
      Tx3: "10",
      Thi: "60",
      id: 13,
    },
    {
      MaMH: "IT6011",
      TenMH: "Nhập môn về kỹ thuật",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 14,
    },
    {
      MaMH: "IT6006",
      TenMH: "Cơ sở dữ liệu",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 15,
    },
    {
      MaMH: "IT6014",
      TenMH: "Kiến trúc máy tính",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 16,
    },
    {
      MaMH: "IT6015",
      TenMH: "Kỹ thuật lập trình",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 17,
    },
    {
      MaMH: "IT6039",
      TenMH: "Thiết kế Web",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 18,
    },
    {
      MaMH: "IT6002",
      TenMH: "Cấu trúc dữ liệu và giải thuật",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 19,
    },
    {
      MaMH: "IT6012",
      TenMH: "Hệ quản trị cơ sở dữ liệu",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 20,
    },
    {
      MaMH: "IT6018",
      TenMH: "Lập trình hướng đối tượng",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 21,
    },
    {
      MaMH: "IT6025",
      TenMH: "Nguyên lý hệ điều hành",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 22,
    },
    {
      MaMH: "IT6097",
      TenMH: "Phân tích và đặc tả yêu cầu phần mềm",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 23,
    },
    {
      MaMH: "IT6040",
      TenMH: "Thực tập cơ sở ngành",
      Tx1: "0",
      Tx2: "0",
      Tx3: "0",
      Thi: "100",
      id: 24,
    },
    {
      MaMH: "IT6023",
      TenMH: "Mạng máy tính",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 25,
    },
    {
      MaMH: "IT6043",
      TenMH: "Trí tuệ nhân tạo",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 26,
    },
    {
      MaMH: "IT6001",
      TenMH: "An toàn và bảo mật thông tin",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 27,
    },
    {
      MaMH: "IT6096",
      TenMH: "Thiết kế phầm mềm",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 28,
    },
    {
      MaMH: "IT6033",
      TenMH: "Quản lý dự án công nghệ thông tin",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 29,
    },
    {
      MaMH: "IT6007",
      TenMH: "Cơ sở lập trình nhúng",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 30,
    },
    {
      MaMH: "IT6010",
      TenMH: "Đồ họa máy tính",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 31,
    },
    {
      MaMH: "IT6037",
      TenMH: "Thiết kế giao diện người dùng",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 32,
    },
    {
      MaMH: "IT6003",
      TenMH: "Công cụ phát triển phần mềm",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 33,
    },
    {
      MaMH: "IT6044",
      TenMH: "Ứng dụng thuật toán",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 34,
    },
    {
      MaMH: "IT6032",
      TenMH: "Phương pháp số trong lập trình",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 35,
    },
    {
      MaMH: "IT6082",
      TenMH: "Nhập môn công nghệ phần mềm",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 36,
    },
    {
      MaMH: "IT6017",
      TenMH: "Lập trình .NET",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 37,
    },
    {
      MaMH: "IT6013",
      TenMH: "Kiểm thử phần mềm",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 38,
    },
    {
      MaMH: "IT6019",
      TenMH: "Lập trình Java",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 39,
    },
    {
      MaMH: "IT6041",
      TenMH: "Thực tâp chuyên ngành Kỹ thuật phần mềm",
      Tx1: "0",
      Tx2: "0",
      Tx3: "0",
      Thi: "100",
      id: 40,
    },
    {
      MaMH: "IT6008",
      TenMH: "Đảm bảo chất lượng phần mềm",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 41,
    },
    {
      MaMH: "IT6024",
      TenMH: "Một số công nghệ phát triển phần mềm",
      Tx1: "20",
      Tx2: "30",
      Tx3: "0",
      Thi: "50",
      id: 42,
    },
    {
      MaMH: "IT6004",
      TenMH: "Công nghệ đa phương tiện",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 43,
    },
    {
      MaMH: "IT6005",
      TenMH: "Công nghệ thực tại ảo",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 44,
    },
    {
      MaMH: "IT6020",
      TenMH: "Lập trình Java nâng cao",
      Tx1: "20",
      Tx2: "30",
      Tx3: "0",
      Thi: "50",
      id: 45,
    },
    {
      MaMH: "IT6021",
      TenMH: "Lập trình Web bằng ASP.NET",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 46,
    },
    {
      MaMH: "IT6022",
      TenMH: "Lập trình web bằng PHP",
      Tx1: "15",
      Tx2: "25",
      Tx3: "0",
      Thi: "60",
      id: 47,
    },
    {
      MaMH: "IT6030",
      TenMH: "Phần mềm mã nguồn mở",
      Tx1: "15",
      Tx2: "15",
      Tx3: "0",
      Thi: "70",
      id: 48,
    },
    {
      MaMH: "IT6028",
      TenMH: "Phát triển ứng dụng Game",
      Tx1: "20",
      Tx2: "20",
      Tx3: "0",
      Thi: "60",
      id: 49,
    },
    {
      MaMH: "IT6029",
      TenMH: "Phát triển ứng dụng trên thiết bị di động",
      Tx1: "20",
      Tx2: "30",
      Tx3: "0",
      Thi: "50",
      id: 50,
    },
    {
      MaMH: "IT6034",
      TenMH: "Tích hợp hệ thống phần mềm",
      Tx1: "25",
      Tx2: "25",
      Tx3: "0",
      Thi: "50",
      id: 51,
    },
  ],
};

subjectBtn.onclick = function (e) {
  e.preventDefault();
  const subjectName = inputBox.value.toLowerCase().trim();
  const subjectData = dataJSON.subjects.find(
    (subject) => subject.TenMH.toLowerCase() === subjectName
  );
  // console.log(subjectData);
  if (subjectData) {
    changeWeightValue(subjectData);
  } else {
    alert("Subject not found");
  }
};

function showHint() {
  const inputValue = inputBox.value;
  let hints = "";

  if (inputValue !== "") {
    dataJSON.subjects.forEach((subject) => {
      if (subject.TenMH.toLowerCase().startsWith(inputValue.toLowerCase())) {
        hints += `<li class="subject-li" onclick="selectSubject('${subject.TenMH}')">${subject.TenMH}</li>`;
      }
    });
    hintList.innerHTML = hints;
  } else {
    hintList.innerHTML = hints;
  }
}

function selectSubject(subjectName) {
  hintList.innerHTML = "";
  inputBox.value = subjectName;
}

function changeWeightValue(data) {
  weight1.value = Number(data.Tx1);
  weight2.value = Number(data.Tx2);
  weight3.value = Number(data.Tx3);

  finalExamWeight = 100 - weight1 - weight2 - weight3;
}
//! toggle theme
const toggleBtn = document.getElementById("toggle-theme");
if (toggleBtn) {
  const mainElem = document.getElementById("main");
  const computedStyle = window.getComputedStyle(mainElem);
  toggleBtn.addEventListener("click", () => {
    const bgColor = computedStyle.backgroundColor;
    if (bgColor === "rgb(255, 255, 255)")
      mainElem.style.backgroundColor = "#1b1a55";
    else mainElem.style.backgroundColor = "#fff";
  });
}
