function requestValidator(req) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const uriPattern = /^[a-zA-Z0-9.*]+$/gm;
    const msgPattern = /^[^<>&'"\\]*$/gm;

    if (!req.hasOwnProperty('method') || !methods.includes(req.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!req.hasOwnProperty('uri') || !uriPattern.test(req.uri) || req.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!req.hasOwnProperty('version') || !versions.includes(req.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!req.hasOwnProperty('message') || !msgPattern.test(req.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return req;
}