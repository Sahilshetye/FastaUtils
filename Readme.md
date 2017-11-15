# fastautil
> Auxillary Fasta parser utils for  working  with fasta object.just Read and parse.


Install
-------

Install ```fastautil``` with [npm](//npmjs.org):

```sh
$ npm install fastautil
```


Usage
-----

## Reading
```js
var fasta = require('fastautil').FastaUtil

var fastaData = new fasta.IFasta();
var object = fastaData.parse('>sequence1\n\
ATGCACGTCACGTCAGTACTCGTCAGTAC\n\
>sequence2\n\
CAGTCCTACTGCATGCATGCATGCATGCATCGATGCATGTCGACTGCATGCATGC\n');

//=>   { 
//   id:1,
//    name: 'sequence1',
//       sequence: 'ATGCACGTCACGTCAGTACTCGTCAGTAC' }
//     { 
//        name: 'sequence2',
//       sequence: 'CAGTCCTACTGCATGCATGCATGCATGCATCGATGCATGTCGACTGCATGCATGC' }
```

## Writing
```js

fastaData.write(object);

```


Contributing
------------

To contribute, clone this repo locally and commit your code on a separate branch.

Please write unit tests for your code, and check that everything works by running the following before opening a pull-request:

```sh
$ npm test
```

Check the [issues](https://github.com/Sahilshetye/FastaUtils/issues) for ways to contribute.

Contacts
--------
Sahil Shetye <[sahilshetye2606@gmail.com](mailto:sahilshetye2606@gmail.com)> [@sahilshetye](//twitter.com/sahilshetye)
