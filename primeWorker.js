let primes = [2];
let currentNum = 3;

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findNextPrime() {
    if (isPrime(currentNum)) {
        primes.push(currentNum);
        postMessage({ highestPrime: currentNum, totalPrimes: primes.length });
    }
    currentNum += 2; // Check only odd numbers
}

// Check for new primes every 33 milliseconds
setInterval(findNextPrime, 33);
