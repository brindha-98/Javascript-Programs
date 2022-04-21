var n = 12345;
var mul = 1;
var a;
while (n > 0) {
    a = Math.floor(n % 10);
    mul = mul * a;
    n = Math.floor(n / 10);
}
console.log(mul);


