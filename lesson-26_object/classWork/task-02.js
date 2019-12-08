//sum All numbers

function sumAllNumber(n) {

    let result;

    if (n == 1) {
        result = 1;

    } else {
        result = n + sumAllNumber(n - 1);

    }
    console.log(result);
    return result;
}

sumAllNumber(10);

