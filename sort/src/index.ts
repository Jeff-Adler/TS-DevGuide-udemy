import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// NumbersCollection meets requirements of interface Sortable
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
