module.exports = function () {
    const execSync = require('child_process').execSync;
    const fs = require('fs');

    this.parse = function (text, callback) {
        fs.writeFileSync('TMP_INPUT_FILE', text, 'utf-8');

        const cmd = ['mecab', 'TMP_INPUT_FILE', '--output=TMP_OUTPUT_FILE'].join(' ');

        const opt = { encoding: 'utf-8' };
        let res = [];
        try {
            execSync(cmd, opt);
            res = fs.readFileSync('TMP_OUTPUT_FILE', 'utf-8');
        } catch (e) {
            console.log(e);
        }

        res = res.replace(/\r/g, '');
        res = res.replace(/\s+$/, '');
        const lines = res.split('\n');

        const res2 = lines.map(function (line) {
            return line.replace('\t', ',').split(',');
        });
        callback(res2);
    };
};