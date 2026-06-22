function isPrime(n, i = 2) {
    if (n <= 1) return false;
    if (i * i > n) return true;
    if (n % i === 0) return false;
    return isPrime(n, i + 1);
}

function printPrimes(n, current = 2) {
    // Base case
    if (current > n) return;

    // Check and print
    if (isPrime(current)) {
        console.log(current);
    }

    // Recursive call
    printPrimes(n, current + 1);
}

// Example
printPrimes(20);

function printPrimes(a, b) {
    // Base case
    if (a > b) return;

    // Check and print
    if (isPrime(a)) {
        console.log(a);
    }

    // Recursive call
    printPrimes(a + 1, b);
}
