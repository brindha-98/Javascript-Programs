var n = 54321;
var sum = 0;
var a;
while (n > 0) {
    a = Math.floor(n % 10);
    sum = sum + a;
    n = Math.floor(n / 10);
}
console.log(sum);