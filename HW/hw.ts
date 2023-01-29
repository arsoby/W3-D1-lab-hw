// interface Car واجهة لكائن بسيط للسيارة قم بإنشاء برنامج
// مع الخصائص التاليه الصنع، النوع، السنة
//  ودالة honk() تقوم بطباعة جملة من إختيارك .

interface Car {
  make: string;
  model: string;
  year: number;
  honk(): void;
}

let car1: Car = {
  make: "Toyota",
  model: "Camery",
  year: 2023,
  honk() {
    console.log(`this info About The Car
        ${car1}`);
  },
};
let car2: Car = {
  make: "Hyundai",
  model: "Accent",
  year: 2019,
  honk() {
    console.log(`this info About The Car
        ${car2}`);
  },
};
let car3: Car = {
  make: "Bentley",
  model: "Continental",
  year: 2015,
  honk() {
    console.log(`this info About The Car
        ${car3}`);
  },
};
function honk() {
  console.log("BEEEB");
}
honk();
let allCars: Car[] = [];
allCars.push(car1);
allCars.push(car2);
allCars.push(car3);
console.log(allCars);
for (let i = 0; i < allCars.length; i++) {
    console.log(allCars[i].year);
}
for (let i = 0; i < allCars.length; i++) {
    console.log(allCars[i].model);
}
