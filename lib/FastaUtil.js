"use strict";
exports.__esModule = true;
var IFasta = /** @class */ (function () {
    function IFasta() {
    }
    // private _instance:IFasta<T>;
    // public getInstance():IFasta<T>{
    // return this._instance;
    // }
    // constructor(){
    //     // return this._instance || (this._instance = new IFasta<T>());
    // }
    //;
    IFasta.prototype.parse = function (text) {
        var obj = {};
        obj.sequence = "";
        obj.name = "";
        obj.id = 1;
        if (!text || text.length === 0)
            return [];
        var arr = text.split("\n");
        var seq = new Array();
        //get the object for parsing.....
        var name1;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var line = arr_1[_i];
            if (line[0] === '>' || line[0] === ';') {
                if (obj.sequence != "") {
                    seq.push(obj);
                    obj.sequence = "";
                    obj.name = "";
                }
                else {
                }
                obj.name = line.slice(1);
            }
            else {
                // if(obj.sequence===undefined){
                // obj.sequence=line;}
                obj.sequence += line;
            }
        }
        //    seq.push(obj);
        return seq;
    };
    IFasta.prototype.write = function (obj) {
        var fastafile;
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var ob = obj_1[_i];
            ;
            fastafile += ">" + ob.name + "\n";
            fastafile += this.splitNchar(ob.sequence, 80).join("\n");
            fastafile += "\n";
        }
        return fastafile;
    };
    // public setOptions(opt:T){
    //     obj.name=opt.name;
    //     this.obj.sequence=opt.sequence;
    //     // this.obj.id= opt.id;
    // }
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
