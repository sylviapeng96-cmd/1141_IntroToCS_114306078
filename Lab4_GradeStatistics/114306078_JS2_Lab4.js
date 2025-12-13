var submitBtn = document.getElementById("submitBtn");
var mathInput = document.getElementById("math");
var englishInput = document.getElementById("english");
var tableBody = document
    .getElementById("gradeTable")
    .getElementsByTagName("tbody")[0];

function addGrade(){
    var math = Number(mathInput.value);
    var english = Number(englishInput.value);

    var avg = ((math + english) / 2).toFixed(2);

    var rowCount = tableBody.rows.length + 1; // 計算資料數 (#)

    var newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = rowCount;
    newRow.insertCell(1).innerText = math;
    newRow.insertCell(2).innerText = english;
    newRow.insertCell(3).innerText = avg;

    mathInput.value = "";
    englishInput.value = "";

    updateColumnAverages();
}

submitBtn.addEventListener("click", addGrade);

function updateColumnAverages() {
    var rows = tableBody.rows;
    var mathTotal = 0;
    var englishTotal = 0;

    for (var i = 0; i < rows.length; i++) {
        mathTotal += Number(rows[i].cells[1].innerText);
        englishTotal += Number(rows[i].cells[2].innerText);
    }

    var count = rows.length;
    var mathAvg = (mathTotal / count).toFixed(2);
    var englishAvg = (englishTotal / count).toFixed(2);
    var overallAvg = ((Number(mathAvg) + Number(englishAvg)) / 2).toFixed(2);

    document.getElementById("mathAvg").innerText = mathAvg;
    document.getElementById("englishAvg").innerText = englishAvg;
    document.getElementById("overallAvg").innerText = overallAvg;
}