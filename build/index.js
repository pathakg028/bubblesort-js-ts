"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
//import { NumbersCollection } from './NumbersCollection';
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([600000000,23,43,12,50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
