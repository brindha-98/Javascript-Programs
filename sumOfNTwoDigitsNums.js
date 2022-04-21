var n = 234156;
var sum = 0;
var a;
while (n > 0) {
    a = Math.floor(n % 100);
    sum = sum + a;
    n = Math.floor(n / 100);
}
console.log(sum);