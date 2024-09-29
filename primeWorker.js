<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Finder</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
    </style>
</head>
<body>
    <h1>Prime Number Finder</h1>
    <div>
        <label for="n">Find the nth prime number (including 2):</label>
        <input type="number" id="n" min="1" value="1">
        <button onclick="findNthPrime()">Find nth Prime</button>
    </div>
    <div>
        <h2>Highest Prime Found: <span id="highestPrime">2</span></h2>
        <h2>Total Primes Found: <span id="totalPrimes">1</span></h2>
    </div>

    <script>
        const worker = new Worker('primeWorker.js');
        let primes = [2];

        worker.onmessage = function(e) {
            const { highestPrime, totalPrimes } = e.data;
            primes.push(highestPrime);
            document.getElementById('highestPrime').textContent = highestPrime;
            document.getElementById('totalPrimes').textContent = totalPrimes;
        };

        function findNthPrime() {
            const n = parseInt(document.getElementById('n').value);
            if (n > 0 && n <= primes.length) {
                alert(`The ${n}th prime number is ${primes[n - 1]}.`);
            } else {
                alert("Calculating more primes...");
                calculatePrimes(n);
            }
        }

        function calculatePrimes(n) {
            while (primes.length < n) {
                // Allow the worker to calculate
                // The worker will keep running independently
            }
            alert(`The ${n}th prime number is ${primes[n - 1]}.`);
        }
    </script>
</body>
</html>
