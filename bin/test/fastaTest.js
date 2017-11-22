"use strict";
///<reference types="../../bin/index"/>
Object.defineProperty(exports, "__esModule", { value: true });
const fast = require("../FastaUtil");
const chai = require("chai");
var expect = chai.expect;
describe('FastaUtil Tests', () => {
    var fasta = new fast.Fasta();
    // beforeEach("Initializing the  class",(done)=>{
    //     var fast= new fast.Fasta();
    // });
    var fastaf = `>pIPA_06\nTAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTT\nTTGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA\n>pIPA_07\nTAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTT\nGGGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA`;
    var arr1 = new Array();
    arr1.push({ id: 1, name: "pIPA_06", sequence: "TAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTTTTGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA" });
    arr1.push({ id: 1, name: "pIPA_07", sequence: "TAAAGAAGATAACAAAATTATACTTCCTTTGGCAATTCAAGTTCATCACGCAGTATGTGACGGATTTCACATTTGCCGTTGGGTAAACGAATTGCAGGAATTGATAAATAGTTAACTTCAGGTTTGTCTGTAACTAAAAACAAGTATTTAAGCAAAAACA" });
    describe('making Model', function () {
        it('should be equal to Array<IFasta>', (done) => {
            expect(fasta.parse(fastaf)[0].sequence).to.equals(arr1[0].sequence);
            expect(fasta.parse(fastaf)[0].id).to.equals(arr1[0].id);
            expect(fasta.parse(fastaf)[0].name).to.equals(arr1[0].name);
            expect(fasta.parse(fastaf)[1].sequence).to.equals(arr1[1].sequence);
            expect(fasta.parse(fastaf)[1].id).to.equals(arr1[1].id);
            expect(fasta.parse(fastaf)[1].name).to.equals(arr1[1].name);
            console.log(arr1[1].name);
            done();
        });
    });
    describe('making Fasta', function () {
        it('should be equal to FastaString', (done) => {
            expect(fasta.write(arr1)).to.equals(fastaf);
            done();
        });
    });
});
class fasta {
}
