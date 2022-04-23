var a = [3, 4, 3, 6, 4, 4, 6, 8];
var temp;
var count = 1;
for (var i = 0; i < a.length; i++) {
    for (var j = i; j < a.length; j++) {
        if (a[j] < a[i]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a);
for (var i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1] && i < a.length - 1) {
        count++;
    }
    else {
        console.log(a[i] + "is" + count + "times");
        count = 1;
    }
}