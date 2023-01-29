"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stu1 = {
    id: 1111,
    Name: 'Mohmed',
    level: 'First',
    isSenior: false
};
let stu2 = {
    id: 2222,
    Name: 'salah',
    level: 'Secend',
    isSenior: false
};
let stu3 = {
    id: 3333,
    Name: 'Mohmed',
    level: 'Third',
    isSenior: true
};
// Q2
let school = [stu1, stu2, stu3];
// Q3 
function print(school) {
    for (let i = 0; i < school.length; i++) {
        console.log(school[i]);
    }
}
print(school);
