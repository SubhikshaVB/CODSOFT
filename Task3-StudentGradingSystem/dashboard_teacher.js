document.addEventListener('DOMContentLoaded', () => {
    const addStudentButton = document.getElementById('add-student-btn');
    const gradebookBody = document.getElementById('gradebook-body');
    const saveButton = document.getElementById('saveGrades');
    const courseSelect = document.getElementById('courseSelect');
    const calculateAverageButton = document.getElementById('calculateAverage');
    const showGradesButton = document.getElementById('showGrades');
    const averageGradeElement = document.getElementById('averageResult'); 
    const lowestGradeElement = document.getElementById('lowestGrade');
    const highestGradeElement = document.getElementById('highestGrade');
    
    function calculateTotalMarks(row) {
        const gradeInputs = row.querySelectorAll('.grade');
        let totalMarks = 0;
        gradeInputs.forEach(input => {
            totalMarks += parseInt(input.value) || 0;
        });
        return totalMarks;
    }

    function updateTotalMarks(row) {
        const totalMarks = calculateTotalMarks(row);
        row.lastElementChild.textContent = totalMarks;
    }

//Event listener for input changes within the gradebook body
    gradebookBody.addEventListener('input', () => {
        const rows = gradebookBody.querySelectorAll('tr');
        rows.forEach(row => {
            updateTotalMarks(row);
        });
    });
//Event listener for the Save Grades button
    saveButton.addEventListener('click', () => {
        const rows = gradebookBody.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.dataset.saved !== "true") {
                const gradeInputs = row.querySelectorAll('.grade');
                row.dataset.saved = "true";
            }
        });
        const savedGradesTable = document.createElement('table');
        savedGradesTable.innerHTML = `
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Assignment 1</th>
                    <th>Assignment 2</th>
                    <th>Midterm Exam</th>
                    <th>Final Exam</th>
                    <th>Total Marks</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const savedGradesBody = savedGradesTable.querySelector('tbody');
        rows.forEach(row => {
            if (row.dataset.saved === "true") {
                savedGradesBody.appendChild(row.cloneNode(true));
            }
        });
        document.body.appendChild(savedGradesTable);
        gradebookBody.querySelectorAll('.grade').forEach(input => {
            input.value = '';
        });
    });

//Event listener for the Add Student button
    addStudentButton.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" class="student-name"></td>
            <td><input type="text" class="course-title"></td>
            <td><input type="number" class="grade"></td>
            <td><input type="number" class="grade"></td>
            <td><input type="number" class="grade"></td>
            <td><input type="number" class="grade"></td>
            <td>0</td>
        `;
        newRow.dataset.saved = "false";
        const selectedCourse = courseSelect.value;
        newRow.querySelector('.course-title').value = selectedCourse;

        gradebookBody.appendChild(newRow);
    });

//Event listener for the course select dropdown
courseSelect.addEventListener('change', () => {
    const selectedCourse = courseSelect.value;
    const courseTitleInputs = gradebookBody.querySelectorAll('.course-title');
    courseTitleInputs.forEach(input => {
        input.value = selectedCourse;
    });
    gradebookBody.querySelectorAll('.grade').forEach(input => {
        input.value = '';
    });
});


//Event listener for the Calculate Average button
    calculateAverageButton.addEventListener('click', () => {
        const totalMarksElements = gradebookBody.querySelectorAll('td:last-child');
        let totalMarksSum = 0;
        let totalMarksCount = 0;

        totalMarksElements.forEach(element => {
            const totalMarks = parseInt(element.textContent) || 0;
            totalMarksSum += totalMarks;
            totalMarksCount++;
        });

        if (totalMarksCount > 0) {
            const averageGrade = totalMarksSum / totalMarksCount;
            averageGradeElement.textContent = `Average Grade: ${averageGrade.toFixed(2)}`;
        } else {
            averageGradeElement.textContent = 'Average Grade: N/A';
        }
    });

//Event listener for the Show Grades button
    showGradesButton.addEventListener('click', () => {
        const totalMarksElements = gradebookBody.querySelectorAll('td:last-child');
        const totalMarksArray = Array.from(totalMarksElements).map(element => parseInt(element.textContent) || 0);
        const lowestGrade = Math.min(...totalMarksArray);
        const highestGrade = Math.max(...totalMarksArray);
        lowestGradeElement.textContent = `Lowest Grade: ${lowestGrade}`;
        highestGradeElement.textContent = `Highest Grade: ${highestGrade}`;
    });

    function resetFormFields() {
        gradebookBody.querySelectorAll('.student-name').forEach(input => {
            input.value = '';
        });
        gradebookBody.querySelectorAll('.course-title').forEach(input => {
            input.value = '';
        });
        gradebookBody.querySelectorAll('.grade').forEach(input => {
            input.value = '';
        });
    }
    resetFormFields();
});
