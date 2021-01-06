function f(n) {
    if (n != 1) {
        return n * f(n - 1);
    } else {
        return 1;
    }
}

let n = 7,
    k = 3;

let s = f(n) / f(k) / f(n - k);

console.log(s);