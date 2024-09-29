function addAndRemoveElements(arr) {
    let num = 1;
    const result = [];

    // for (let command of arr) {
    //     if (command === 'add') {
    //         result.push(num);
    //     } else if (command === 'remove') {
    //         result.pop();
    //     }
    //     num++;
    // }
    arr.forEach(command => {
        command === 'add' ? result.push(num) : result.pop();
        num++; 
    });

    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');;
}