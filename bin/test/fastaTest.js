"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FastaUtil_1 = require("../FastaUtil");
var chai = require("chai");
var expect = chai.expect;
describe('FastaUtil Tests', function () {
    var seq1;
    beforeEach(function () {
        seq1 = new FastaUtil_1.IFasta();
    });
    var fastaf = ">pIPA_06\nTAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTT\nTTGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA\n>pIPA_07\nTAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTT\nGGGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA";
    var arr1 = new Array();
    arr1.push({ id: 1, name: "pIPA_06", sequence: "TAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTTTTGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA" });
    arr1.push({ id: 1, name: "pIPA_07", sequence: "TAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTTGGGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA" });
    describe('making Model', function () {
        it('should be equal to Array<IFasta>', function (done) {
            expect(new FastaUtil_1.IFasta().parse(fastaf)[0].sequence).to.equals(arr1[0].sequence);
            expect(new FastaUtil_1.IFasta().parse(fastaf)[0].id).to.equals(arr1[0].id);
            expect(new FastaUtil_1.IFasta().parse(fastaf)[0].name).to.equals(arr1[0].name);
            expect(new FastaUtil_1.IFasta().parse(fastaf)[1].sequence).to.equals(arr1[1].sequence);
            expect(new FastaUtil_1.IFasta().parse(fastaf)[1].id).to.equals(arr1[1].id);
            expect(new FastaUtil_1.IFasta().parse(fastaf)[1].name).to.equals(arr1[1].name);
            done();
        });
    });
    describe('making Fasta', function () {
        it('should be equal to FastaString', function (done) {
            expect(new FastaUtil_1.IFasta().write(arr1)).to.equals(fastaf);
            done();
        });
    });
});
var fasta = (function () {
    function fasta() {
    }
    return fasta;
}());
