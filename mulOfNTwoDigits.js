var n = 123456;
var mul = 1;
var a;
while (n > 0) {
    a = Math.floor(n % 100);
    mul = mul * a;
    n = Math.floor(n / 100);
}
console.log(mul);