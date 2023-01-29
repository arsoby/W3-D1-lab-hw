// interface Car واجهة لكائن بسيط للسيارة قم بإنشاء برنامج
// مع الخصائص التاليه الصنع، النوع، السنة
//  ودالة honk() تقوم بطباعة جملة من إختيارك .
var car1 = {
    make: "Toyota",
    model: "Camery",
    year: 2023,
    honk: function () {
        console.log("this info About The Car\n        ".concat(car1));
    }
};
var car2 = {
    make: "Hyundai",
    model: "Accent",
    year: 2019,
    honk: function () {
        console.log("this info About The Car\n        ".concat(car2));
    }
};
var car3 = {
    make: "Bentley",
    model: "Continental",
    year: 2015,
    honk: function () {
        console.log("this info About The Car\n        ".concat(car3));
    }
};
function honk() {
    console.log("BEEEB");
}
honk();
var allCars = [];
allCars.push(car1);
allCars.push(car2);
allCars.push(car3);
console.log(allCars);
for (var i = 0; i < allCars.length; i++) {
    console.log(allCars[i].year);
}
for (var i = 0; i < allCars.length; i++) {
    console.log(allCars[i].model);
}
