let a = [];

function dec_to_k(x, k) {
    if (x < k) {
        a += [x];
        return;
    } else {
        dec_to_k(~~(x / k), k);
        a += [x % k];
    }
}

dec_to_k(32534, 7);
console.log(a);