const fullname = " Ammares  Phonananroek";

const trimmedFullname = fullname.trim();
console.log("Trimmed Fullname:", `"${trimmedFullname}"`);

const nameParts = trimmedFullname.split(" ");
console.log("Name Parts:", nameParts);

const finalpart = nameParts.filter(Boolean);
console.log("Filtered Parts:", finalpart);

const firstName = finalpart[0];
console.log(`Hello, ${firstName}!`);