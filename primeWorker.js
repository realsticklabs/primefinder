let primes = JSON.parse(localStorage.getItem('primes')) || [2];
let currentNum = primes.length > 1 ? primes[primes.length - 1] + 2 : 3; // Start checking from the next odd number after the last found prime

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findNextPrime() {
    while (true) {
        if (isPrime(currentNum)) {
            primes.push(currentNum);
            localStorage.setItem('primes', JSON.stringify(primes)); // Save to localStorage
            postMessage({ highestPrime: currentNum, totalPrimes: primes.length });
            break; // Exit after finding the next prime
        }
        currentNum += 2; // Check only odd numbers
    }
}

// Check for new primes every 33 milliseconds
setInterval(findNextPrime, 33);
