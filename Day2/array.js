"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayOddDescending = exports.isArrayAscending = exports.GetAllSubstringList = exports.GetDifferentElements = exports.GetSameElements = exports.RandomizeSwap = exports.Randomizer = exports.LargestElementsLength = exports.LeftOver2 = exports.Count5Divider = exports.ReverseAlphabeticalOrderArray = exports.Find2ndMaxNumbers = exports.FindMinNumbers = void 0;
function FindMinNumbers(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
exports.FindMinNumbers = FindMinNumbers;
function Find2ndMaxNumbers(arr) {
    var max1 = arr[0];
    var max2 = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
    }
    return max2;
}
exports.Find2ndMaxNumbers = Find2ndMaxNumbers;
console.log(Find2ndMaxNumbers([2, 1, 3, 4]));
function ReverseAlphabeticalOrderArray(arr) {
    var swap = "";
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j][0] < arr[j + 1][0]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
exports.ReverseAlphabeticalOrderArray = ReverseAlphabeticalOrderArray;
function Count5Divider() {
    var sum = 0;
    for (var i = 0; i <= 100; i += 5) {
        sum += i;
    }
    return sum;
}
exports.Count5Divider = Count5Divider;
function LeftOver2(arr) {
    return arr.map(function (e) { return e % 2; });
}
exports.LeftOver2 = LeftOver2;
function LargestElementsLength(arr) {
    var maxLen = 0;
    arr.forEach(function (e) {
        if (e.length > maxLen)
            maxLen = e.length;
    });
    return arr.filter(function (e) {
        return e.length === maxLen;
    });
}
exports.LargestElementsLength = LargestElementsLength;
function Randomizer(arr) {
    return arr[Math.ceil(Math.random() * arr.length)];
}
exports.Randomizer = Randomizer;
function RandomizeSwap(arr) {
    var a = Math.floor(Math.random() * arr.length);
    var b = Math.floor(Math.random() * arr.length);
    var swap = arr[a];
    arr[a] = arr[b];
    arr[b] = swap;
    return arr;
}
exports.RandomizeSwap = RandomizeSwap;
function GetSameElements(arr1, arr2) {
    return arr1.filter(function (e) { return arr2.includes(e); });
}
exports.GetSameElements = GetSameElements;
function GetDifferentElements(arr1, arr2) {
    var sameElements = GetSameElements(arr1, arr2);
    return arr1
        .filter(function (e) { return !sameElements.includes(e); })
        .concat(arr2.filter(function (e) { return !sameElements.includes(e); }));
}
exports.GetDifferentElements = GetDifferentElements;
function AddSubstring(s, idx, len, arr) {
    if (idx + len > s.length)
        return false;
    arr.push(s.substring(idx, idx + len));
    AddSubstring(s, idx, len + 1, arr);
    AddSubstring(s, idx + 1, len, arr);
    return true;
}
function GetAllSubstringList(s) {
    var arr = [];
    AddSubstring(s, 0, 1, arr);
    return arr.filter(function (e, idx) { return arr.indexOf(e) === idx; });
}
exports.GetAllSubstringList = GetAllSubstringList;
function isArrayAscending(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1])
            return false;
    }
    return true;
}
exports.isArrayAscending = isArrayAscending;
function isArrayOddDescending(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1] || arr[i] % 2 !== 1)
            return false;
    }
    return true;
}
exports.isArrayOddDescending = isArrayOddDescending;
