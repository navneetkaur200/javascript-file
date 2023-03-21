number=5
n1 = 0
n2 = 1
for (let i = 1; i <= number; i++) {
    x = n1 + n2;
    n1 = n2;
    n2 = x;
    console.log(x);
}