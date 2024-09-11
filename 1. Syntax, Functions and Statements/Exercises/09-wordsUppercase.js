function wordsUppercase(text) {
    return text.toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '')
        .join(', ')
}

console.log(wordsUppercase('Hi, how are you?'));