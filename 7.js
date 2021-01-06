function ff(n) {
    let s = 1;
    for (let i = 2; i <= 2 * n; i += 2) {
        s *= i;
    }
    return s;
}

let k = 4;

console.log(ff(k))