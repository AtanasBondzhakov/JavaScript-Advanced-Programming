function solve() {
    const tableRef = document.querySelector('table');
    const messageRef = document.querySelector('#check p');

    const [checkBtn, clearBtn] = document.querySelectorAll('button');

    let status = '';

    checkBtn.addEventListener('click', onCheck);
    clearBtn.addEventListener('click', onClear);

    function onCheck() {
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const rowValues = [...row.querySelectorAll('input')].map(el => el.value);
            const duplicates = rowValues.filter((item, index) => rowValues.indexOf(item) !== index);

            status += (duplicates.length > 0) ? '0' : '1';
        });
        status += 'x';

        for (let i = 1; i <= 3; i++) {
            const columnValues = [...tableRef.querySelectorAll(`tbody, tr td:nth-child(${i}) input`)].map(el => el.value);
            const duplicates = columnValues.filter((item, index) => columnValues.indexOf(item) !== index);

            status += (duplicates.length > 0) ? '0' : '1';
        };

        if (status === '111x111') {
            tableRef.style.border = '2px solid green';
            messageRef.style.color = 'green';
            messageRef.textContent = 'You solve it! Congratulations!';
        } else {
            tableRef.style.border = '2px solid red';
            messageRef.style.color = 'red';
            messageRef.textContent = 'NOP! You are not done yet...';
        };

        status = '';
    };

    function onClear() {
        tableRef.style.border = '';
        messageRef.textContent = '';

        document.querySelectorAll('tbody input[type="number"]').forEach(el => el.value = '');
    };
};