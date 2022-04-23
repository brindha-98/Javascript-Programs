var a = [5, 1, 2, 6, 8];
var max1 = a[0];
var max2 = a[0];
var max3 = a[0];
var min1 = a[0];
var min2 = a[0];
var min3 = a[0];
for (var i = 0; i < a.length; i++) {
    if (a[i] > max1) {
        max1 = a[i];
    }
}
console.log(max1);
for (var i = 0; i < a.length; i++) {
    if (a[i] > max2 && a[i] < max1) {
        max2 = a[i];
    }
}
console.log(max2);
for (var i = 0; i < a.length; i++) {
    if (a[i] > max3 && a[i] < max2 && a[i] < max1) {
        max3 = a[i];
    }
}
console.log(max3);
for (var i = 0; i < a.length; i++) {
    if (a[i] < min1) {
        min1 = a[i];
    }
}
console.log(min1);
for (var i = 0; i < a.length; i++) {
    if (a[i] < min2 && a[i] > min1) {
        min2 = a[i];
    }
}
console.log(min2);
for (var i = 0; i < a.length; i++) {
    if (a[i] < min3 && a[i] > min2 && a[i] > min1) {
        min3 = a[i];
    }
}
console.log(min3);