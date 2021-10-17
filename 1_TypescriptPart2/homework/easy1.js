"use strict";
// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState
exports.__esModule = true;
exports.getUserOrderStates = void 0;
var orderStates = [
    "initial",
    "inWork",
    "buyingSupplies",
    "producing",
    "fullfilled",
];
var getUserOrderStates = function (orderStates) {
    var filteredStates = [];
    orderStates.forEach(function (element) {
        if (element !== "buyingSupplies" && element !== "producing") {
            filteredStates.push(element);
        }
    });
    return filteredStates;
};
exports.getUserOrderStates = getUserOrderStates;
