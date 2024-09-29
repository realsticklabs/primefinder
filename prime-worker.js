let primes = [2];
let currentNum = 3;

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes() {
    while (true) {
        if (isPrime(currentNum)) {
            primes.push(currentNum);
            postMessage({
                highestPrime: primes[primes.length - 1],
                totalPrimes: primes.length
            });
        }
        currentNum += 2;
    }
}

generatePrimes();
