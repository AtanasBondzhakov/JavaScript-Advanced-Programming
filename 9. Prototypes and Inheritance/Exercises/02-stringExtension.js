(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function (str) {
        return !this.toString();
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (!this.includes(' ')) {
            return this.substring(0, n - 3) + '...';
        }

        let res = this.split(' ');
        let result = this + '...';

        while (result.length > n) {
            res.pop();
            result = res.join(' ') + '...';
        }

        return result;
    }

    String.format = function (string, ...params) {
        params.forEach(param => {
            string = string.replace(/{\d+}/, param);
        })
        
        return string;
    }
})();