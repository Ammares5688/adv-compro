// ...existing code...
const registerDate = "2023-09-17T10:00:00Z";

const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok',    // changed: use timeZone for the zone
    timeZoneName: 'short'        // optional: 'short' or 'long' if you want the zone name shown
};
const formattedDate = new Date(registerDate).toLocaleDateString('th-TH', option);
console.log(`User registered on: ${formattedDate}`);
// ...existing code...