let a = [];

function dec_to_k(x, k) {
    if (x < k) {
        return;
    } else {
        dec_to_k(x / k, k);
        a += x % k;
    }
}

dec_to_k(24635, 6);
console.log(a);