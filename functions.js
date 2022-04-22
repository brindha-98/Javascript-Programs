function calculation(value) {
    if (value < 10) {
        return value + 10;
    }
    else {
        return value;
    }
}
a = Math.floor(Math.random() * 100);
console.log(calculation(a));
b = Math.floor(Math.random() * 100);
console.log(calculation(b));
c = Math.floor(Math.random() * 100);
console.log(calculation(c));
d = Math.floor(Math.random() * 100);
console.log(calculation(d));
e = Math.floor(Math.random() * 100);
console.log(calculation(e));