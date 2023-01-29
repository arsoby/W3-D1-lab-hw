"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stu1 = {
    id: 1000,
    Name: 'Mohmed',
    level: 'First',
    isSenior: false
};
let stu2 = {
    id: 1001,
    Name: 'salah',
    level: 'Secend',
    isSenior: false
};
let stu3 = {
    id: 1001,
    Name: 'Mohmed',
    level: 'Third',
    isSenior: true
};
// Q2
let school = [];
school.push(stu1);
school.push(stu2);
school.push(stu3);
// Q3 
function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id > 2000)
            console.log(`This is Info For teacher:
            ${arr[i]}`);
        else
            console.log(`This is Info For Student:
        ${arr[i]}`);
    }
}
print(school);
let t1 = {
    Name: 'Naser',
    id: 9111,
    specialty: "Math",
    courseNum: 1
};
let t2 = {
    Name: 'Hadi',
    id: 9112,
    specialty: "Computer",
    courseNum: 2
};
let t3 = {
    Name: 'Yaser',
    id: 9113,
    specialty: "English",
    courseNum: 3
};
school.push(t1);
school.push(t2);
school.push(t3);
print(school);
function changeSenior(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id >= 2000) {
            continue;
        }
        else {
            if (arr[i].isSenior == false) {
                arr[i].isSenior = true;
            }
            else
                arr[i].isSenior == false;
        }
    }
}
