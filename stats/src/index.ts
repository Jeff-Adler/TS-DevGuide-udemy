import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.formCsv('football.csv');
matchReader.load();

// Or, using ic methods:
const summary = Summary.winsAnalysisWithHtmlReport('ManUnited');

summary.buildAndPrintReport(matchReader.matches);
