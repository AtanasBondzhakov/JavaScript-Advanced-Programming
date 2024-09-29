function extract(content) {
    const target = document.querySelector('#content');
    const pattern = /\(([\w\s]+)\)/g;
    
    let matches = pattern.exec(target.textContent);
    const result = [];

    while(matches) {
        result.push(matches[1]);
        matches = pattern.exec(target.textContent);
    }
    return result.join('; ')
}