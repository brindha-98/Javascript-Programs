var n = 10;
var a = -1;
var b = 1;
var j;
for (var i = 0; i < n; i++) {
    j = a + b;
    a = b;
    b = j;
    process.stdout.write(JSON.stringify(j));
    console.log();
}
