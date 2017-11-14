"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IFasta {
    // private _instance:IFasta<T>;
    // public getInstance():IFasta<T>{
    // return this._instance;
    // }
    // constructor(){
    //     // return this._instance || (this._instance = new IFasta<T>());
    // }
    //;
    parse(text) {
        let obj = {};
        obj.sequence = "";
        obj.name = "";
        obj.id = 1;
        if (!text || text.length === 0)
            return [];
        var arr = text.split("\n");
        var seq = new Array();
        //get the object for parsing.....
        var name1;
        for (var line of arr) {
            if (line[0] === '>' || line[0] === ';') {
                if (obj.sequence != "") {
                    seq.push({ id: obj.id, name: obj.name, sequence: obj.sequence });
                    obj.sequence = "";
                    obj.name = "";
                }
                obj.name = line.slice(1);
            }
            else {
                // if(obj.sequence===undefined){
                // obj.sequence=line;}
                obj.sequence += line;
            }
        }
        seq.push(obj);
        return seq;
    }
    write(obj) {
        var fastafile = "";
        for (var ob = 0; ob < obj.length; ob++) {
            ;
            fastafile += ">" + obj[ob].name + "\n";
            fastafile += this.splitNchar(obj[ob].sequence, 80).join("\n");
            if (ob != obj.length - 1)
                fastafile += "\n";
        }
        return fastafile;
    }
    // public setOptions(opt:T){
    //     obj.name=opt.name;
    //     this.obj.sequence=opt.sequence;
    //     // this.obj.id= opt.id;
    // }
    splitNchar(str, num) {
        var i, _ref;
        num = num || 80;
        var result = [];
        for (i = 0, _ref = str.length - 1; i <= _ref; i += num) {
            result.push(str.substr(i, num));
        }
        return result;
    }
}
exports.IFasta = IFasta;
