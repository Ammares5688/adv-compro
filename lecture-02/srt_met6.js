//genlog.js
function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH',);
    
    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();
    const logMessage = message.toUpperCase();
    return `[${timestamp}] [ID: ${eventId}] ${logMessage}`;
}
const logEntry = createLogEntry("User logged in");
console.log(logEntry);