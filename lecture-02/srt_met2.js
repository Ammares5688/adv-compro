//censorWords.js
function censorWords(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredSentence = sentence.replace(regex, '****');
    return censoredSentence;
}

const originalPost = "JavaScript is fun, but sometimes JavaScript can be tricky. I love coding in JavaScript!";
const cleanedPost = censorWords(originalPost, "JavaScript");

console.log(cleanedPost);