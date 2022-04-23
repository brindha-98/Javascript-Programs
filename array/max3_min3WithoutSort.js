var a = [5, 1, 2, 6, 8];
var max1 = 8;
var max2 = 6;
var max3 = a[0];
var min1 = 1;
var min2 = 2;
var min3 = a[0];
for (var i = 0; i < a.length; i++) {
    if (a[i] > max3 && a[i] < max2 && a[i] < max1) {
        max3 = a[i];
    }
    if (a[i] < min3 && a[i] > min2 && a[i] > min1) {
        min3 = a[i];
    }
}
console.log(max3);
console.log(min3);