// 1 1 2 3 5 8


function getFibonacci(n) {

    if (n == 1 || n == 2) {
        return 1;
    }

    return getFibonacci(n - 1) + getFibonacci(n - 2);
}