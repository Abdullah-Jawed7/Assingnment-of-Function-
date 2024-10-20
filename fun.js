"use strict";
// Assignment no 1    
// funtion for average of three number
function average3(num1, num2, num3) {
    let ans = (num1 + num2 + num3) / 3;
    return ans;
}
let ave = average3(77, 88, 99);
console.log(ave);
//Assigment no 2
//Function even and odd
function check(num) {
    if (num % 2) {
        console.log(num + " is Odd");
    }
    else {
        console.log(num + " is Even");
    }
}
check(78);
// Asssignment no 3 
// Grade checker
function grade(per) {
    if (per <= 100 && per >= 90) {
        console.log("Wow! you got  A1 Grade");
    }
    else if (per <= 89 && per >= 80) {
        console.log("Wow! you got  A Grade");
    }
    else if (per <= 79 && per >= 70) {
        console.log("Wow! you got  B Grade");
    }
    else if (per <= 69 && per >= 60) {
        console.log("Wow! you got  C Grade");
    }
    else if (per <= 59 && per >= 50) {
        console.log("Wow! you got  D Grade");
    }
    else if (per <= 49 && per >= 40) {
        console.log(" you got  E Grade");
    }
    else if (per <= 39 && per >= 33) {
        console.log("you got  F Grade  ");
    }
    else {
        console.log("you got  fail  ");
        console.log("Do hard work for next time ");
    }
}
grade(78);




// copied

let students = [
    { id: "1", score: 73, name: "abdullah", course: "wma" },
    { id: "7", score: 17, name: "hamid", course: "wma" },
    { id: "8", score: 57, name: "hammad", course: "wma" },
    { id: "9", score: 72, name: "ali", course: "wma" },
    { id: "4", score: 77, name: "huzaifa", course: "wma" },
    { id: "2", score: 97, name: "khalid", course: "wma" },
    { id: "3", score: 77, name: "hamza", course: "wma" },
    { id: "6", score: 7, name: "hassan", course: "wma" },
    { id: "5", score: 78, name: "abid", course: "wma" },
]

let UpdatedStudents = students.map((data) => {
    return {
        ...data,
        favSub: "math",
        role: "Student"
    }
    // console.log(data);
}).sort((a, b) => a.id - b.id)

// console.log(UpdatedStudents);
let StudentScore = UpdatedStudents.sort((a, b) => a.score - b.score)
// console.log(StudentScore);

let highScore = StudentScore.filter((data) => {
    if (data.score >= 70) return true

})
// console.log(highScore);


let SpecificId = UpdatedStudents.find((data) => {
    return data.id == 6
})
// console.log(SpecificId);



// Assignning Grades
let studentGrade = StudentScore.map((data) => {
    if (data.score < 50 && data.score >= 40) {
        return {
            ...data,
            grade: "D"
        }
    } else if (data.score < 60 && data.score >= 50) {
        return {
            ...data,
            grade: "C"
        }
    }
    else if (data.score < 70 && data.score >= 60) {
        return {
            ...data,
            grade: "B"
        }

    } else if (data.score < 80 && data.score >= 70) {
        return {
            ...data,
            grade: "A"
        }

    } else if (data.score < 100 && data.score >= 80) {
        return {
            ...data,
            grade: "A1"
        }
    } else {
        return {
            ...data,
            grade: "E"
        }
    }
})

console.log(studentGrade);

// Calculate Score using Reduced
let TotalScore = students.reduce((total, cur) => {
    return total += cur.score
}, 0)
console.log(TotalScore);
let AverageResult = Math.floor(TotalScore / students.length)
console.log(AverageResult);