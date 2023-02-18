import SummaryPanel from "./components/SummaryPanel";
import { Result } from "./model/results";

const data: Result = {
  reaction: 80,
  memory: 92,
  verbal: 61,
  visual: 72,
};

const App = () => {
  return <SummaryPanel result={data}></SummaryPanel>;
};
export default App;
