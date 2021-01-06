function f(n) {
    if (n != 1) {
        return n * f(n - 1);
    } else {
        return 1;
    }
}

console.log(f(5));