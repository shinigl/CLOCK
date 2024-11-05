const facts = [
    "Time flies when you're having fun.",
    "The Earth's rotation is gradually slowing down.",
    "The oldest known clock is the Salisbury Cathedral clock, built in 1386.",
    "A day on Venus is longer than a year on Venus.",
    "The concept of time zones was proposed in 1879.",
    "An atomic clock is accurate to one second in millions of years.",
    "The shortest measurable time is known as the Planck time, which is 5.39 × 10^-44 seconds.",
    "The time it takes for light to travel from the Sun to Earth is about 8 minutes and 20 seconds."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good morning!";
    } else if (currentHour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${getGreeting()} ${getRandomFact()}`;
}


setInterval(updateClock, 1000);

updateClock();
