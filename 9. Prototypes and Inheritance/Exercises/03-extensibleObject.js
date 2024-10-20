function extensibleObject() {
    const obj = {
        extend(targetObj) {
            for (const key in targetObj) {
                if (typeof targetObj[key] === 'function') {
                    Object.getPrototypeOf(obj)[key] = targetObj[key];
                } else {
                    obj[key] = targetObj[key]
                }
            }
        }
    }
    return obj;
}