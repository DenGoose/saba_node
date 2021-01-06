function f(n) {
    if (n != 1) {
        return n * f(n - 1);
    } else {
        return 1;
    }
}

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

function makloren(x, n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s += pow(x, i) / f(i);
    }
    return s;
}

console.log(makloren(4, 100));