var a, b, c, d, e;
var average;
var sum;
a = Math.floor(Math.random() * 100);
if (a < 10) {
    a = a + 10;
    console.log(a);
}
else {
    console.log(a);
}
b = Math.floor(Math.random() * 100);
if (b < 10) {
    b = b + 10;
    console.log(b);
}
else {
    console.log(b);
}
c = Math.floor(Math.random() * 100);
if (c < 10) {
    c = c + 10;
    console.log(c);
}
else {
    console.log(c);
}
d = Math.floor(Math.random() * 100);
if (d < 10) {
    d = d + 10;
    console.log(d);
}
else {
    console.log(d);
}
e = Math.floor(Math.random() * 100);
if (e < 10) {
    e = e + 10;
    console.log(e);
}
else {
    console.log(e);
}
sum = a + b + c + d + e;
console.log(sum);
average = sum / 5;
console.log(average);