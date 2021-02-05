import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  //only accepts an object that conforms to DataReader. CsvFileReader does that. we could imagine a class like APIReader that would do the same
  constructor(public reader: DataReader) {}

  //since reader is of type DataReader, we know it has a read() method and and datatype of string[][]
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, //'H', 'A', or 'D'
          row[6],
        ];
      }
    );
  }
}
