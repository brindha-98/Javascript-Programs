var n = 2;
var a = 2;
var primeflag = true;
if (n % 2 == 0 && n != 2) {
    console.log("n is not a prime number");
}
else if (n % 3 == 0 && n != 3) {
    console.log("n is not a prime number");
}
else if (n % 5 == 0 && n != 5) {
    console.log("n is not a prime number");
}
else if (n % 7 == 0 && n != 7) {
    console.log("n is not a prime number");
}
else {
    while (a < n / 2 && a * a <= n) {
        if (a * a == n) {
            primeflag = false;
            console.log("n is not a prime number");
            break;
        }
        a++;
    }
    if (primeflag == true) {
        console.log("n is a prime number")
    }
}




