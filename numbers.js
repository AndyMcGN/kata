// 6kyu

// steps in prime - g964
// step(stepWereLookingFor, startOfSearch, endOfSearch) returns the first prime numbers which are a certain distance apart
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) return false;
    }
    return true;
}

function step(g, m, n) {
    for (let i = m; i <= n; i++) {
        if (isPrime(i) && isPrime(i+g)) return [i,i+g];
    }
    return null;
}