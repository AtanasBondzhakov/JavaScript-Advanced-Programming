function encodeAndDecodeMessages() {
    const [btnEncode, btnDecode] = Array.from(document.querySelectorAll('button'));
    const [sendMsgArea, receiveMsgArea] = Array.from(document.querySelectorAll('textarea'));

    btnEncode.addEventListener('click', onEncode);
    btnDecode.addEventListener('click', onDecode);

    function onEncode() {
        const message = sendMsgArea.value;
        let encodedMsg = '';

        for (let char of message) {
            const asciiCode = char.charCodeAt(0);
            encodedMsg += String.fromCharCode(asciiCode + 1);
        }
        receiveMsgArea.value = encodedMsg;
        sendMsgArea.value = '';
    }

    function onDecode() {
        const message = receiveMsgArea.value;
        let decodedMsg = '';

        for (let char of message) {
            const asciiCode = char.charCodeAt(0);
            decodedMsg += String.fromCharCode(asciiCode - 1);
        }
        receiveMsgArea.value = decodedMsg;
    }
}