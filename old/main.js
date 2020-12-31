function get_random() {
    return Math.floor(Math.random() * (10));
}

function e_x(arr, N, power = 1) {
    let x = 0;
    for (let i = 0; i < N; i++) {
        x += Math.pow(arr[i], power);
    }
    return x / N;
}

function d_x(arr, N) {
    return e_x(arr, N, 2) - Math.pow(e_x(arr, N), 2);
}

let a = [];
const N = 5;
console.log("Вывод массива");
for (let i = 0; i < N; i++) {
    a += get_random();
    console.log("a[" + i + "] = " + a[i]);
}
console.log('\n');

let Dx = d_x(a, N);
console.log("Вывод D(x)\n" + Dx + '\n');

function median(arr, N) {
    if (N % 2 === 0) {
        let t = (N / 2) - 1;
        return (+arr[t] + +arr[t + 1]) / 2;
    } else {
        let t = Math.floor(N / 2);
        return arr[t];
    }
}

let m = median(a, N);
console.log("Вывод медианы\n" + m + '\n');

function moda(arr, N) {
    let flag = [], flag_k = [], k = 0;
    for (let i = 0; i < N; i++) {
        let f = 0;
        for (let j = 0; j < k; j++) {
            if (arr[i] !== flag[j]) {
                f++;
            }
        }
        if (f === k) {
            flag[k] = arr[i];
            k++;
        }
    }
    for (let i = 0; i < k; i++) {
        let f = 0;
        for (let j = 0; j < N; j++) {
            if (flag[i] === arr[j]) {
                f++;
            }
        }
        flag_k[i] = f;
    }
    let max = flag[0], max_k = flag_k[0];
    for (let i = 0; i < k; i++) {
        if (flag_k[i] > max_k) {
            max_k = flag_k[i];
            max = flag[i];
        }
    }

    return max;
}

let mod = moda(a, N);
console.log("Вывод моды\n" + mod + '\n');
