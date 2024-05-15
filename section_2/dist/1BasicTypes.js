"use strict";
let firstName = "Alex";
let age = 30;
let isAdmin = true;
let duties = ["work", "watch", "control"];
let car = null;
let bicycle = undefined;
let work = () => {
    console.log("doing some work....");
};
let salary = 50n;
let logo = Symbol("emerald");
let all = [firstName, age, isAdmin, duties, car, bicycle, work, salary, logo];
for (let item in all) {
    console.log(`${item}, type is: ${typeof item}`);
}
