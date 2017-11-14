"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IFasta = (function () {
    function IFasta() {
    }
    IFasta.prototype.parse = function (text) {
        var obj = {};
        obj.sequence = "";
        obj.name = "";
        obj.id = 1;
        if (!text || text.length === 0)
            return [];
        var arr = text.split("\n");
        var seq = new Array();
        var name1;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var line = arr_1[_i];
            if (line[0] === '>' || line[0] === ';') {
                if (obj.sequence != "") {
                    seq.push({ id: obj.id, name: obj.name, sequence: obj.sequence });
                    obj.sequence = "";
                    obj.name = "";
                }
                obj.name = line.slice(1);
            }
            else {
                obj.sequence += line;
            }
        }
        seq.push(obj);
        return seq;
    };
    IFasta.prototype.write = function (obj) {
        var fastafile = "";
        for (var ob = 0; ob < obj.length; ob++) {
            ;
            fastafile += ">" + obj[ob].name + "\n";
            fastafile += this.splitNchar(obj[ob].sequence, 80).join("\n");
            if (ob != obj.length - 1)
                fastafile += "\n";
        }
        return fastafile;
    };
    IFasta.prototype.splitNchar = function (str, num) {
        var i, _ref;
        num = num || 80;
        var result = [];
        for (i = 0, _ref = str.length - 1; i <= _ref; i += num) {
            result.push(str.substr(i, num));
        }
        return result;
    };
    return IFasta;
}());
exports.IFasta = IFasta;
