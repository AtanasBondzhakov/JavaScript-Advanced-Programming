function sortAnArrayBy2Criteria(arr) {
    let result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    return result.join('\n');
}