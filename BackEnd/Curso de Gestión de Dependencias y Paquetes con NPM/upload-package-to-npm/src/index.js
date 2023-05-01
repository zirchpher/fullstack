const messages = [
    "Remix",
    "Luisa",
    "Karen",
    "Michael",
    "Diana",
    "Juan",
    "Luis",
    "Maria",
];

const randomMessage = () => {
    const messageLength = messages.length;
    const randomIndex = Math.floor(Math.random() * messageLength);
    const message = messages[randomIndex];
    console.log(message);
};

module.exports = { randomMessage };