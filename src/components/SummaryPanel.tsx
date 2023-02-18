import { FC, Fragment } from "react";
import { Result } from "../model/results";
import Detail from "./Detail";
import Total from "./Total";

const SummaryPanel: FC<{ result: Result }> = ({ result }) => {
  const total = Math.floor(
    (result.reaction + result.memory + result.verbal + result.visual) / 4
  );

  return (
    <section>
      <Total total={total}></Total>
      <aside>
        <h3>Summary</h3>
        <Detail
          name="Reaction"
          imgUrl="./icon-reaction.svg"
          value={result.reaction}
        ></Detail>
        <Detail
          name="Memory"
          imgUrl="./icon-memory.svg"
          value={result.memory}
        ></Detail>
        <Detail
          name="Verbal"
          imgUrl="./icon-verbal.svg"
          value={result.verbal}
        ></Detail>
        <Detail
          name="Visual"
          imgUrl="./icon-visual.svg"
          value={result.visual}
        ></Detail>
        <button>Continue</button>
      </aside>
    </section>
  );
};

export default SummaryPanel;
