//factorial

function factorial(n) {

    let result;

    if (n == 1) {
        result = 1;

    } else {
        result = factorial(n - 1) * n;

    }
    return result;
}