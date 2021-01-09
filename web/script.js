const form = document.getElementById('form')
const key = document.getElementById('key')
const word = document.getElementById('word')
const out = document.getElementById('out')

function caesar(word, amount) {
    if (amount < 0) {
        return caesar(word, amount + 26);
    }
    let output = "";
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (c.match(/[a-z]/i)) {
            let code = word.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + Number(amount)) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + Number(amount)) % 26) + 97);
            }
        }
        output += c;
    }
    return output;
};

form.addEventListener('submit', (e) => {
    out.value = caesar(word.value, key.value)
    e.preventDefault()
})