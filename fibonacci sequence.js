let a = 0, b = 1;
console.log(a);
while(b <= 100) {
    console.log(b);
    [a, b] = [b, a+b];
}