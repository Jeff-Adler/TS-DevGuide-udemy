import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
  'aergaerNKWNEFKleimrgLAIMSD'
);
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(31);
linkedList.add(4);
linkedList.add(-12);
linkedList.add(0);
linkedList.sort();
console.log(linkedList);
