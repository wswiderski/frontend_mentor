import { FC, Fragment } from "react";

const Detail: FC<{ name: string; value: number; imgUrl: string }> = (props) => {
  return (
    <div>
      <img src={props.imgUrl} alt={`Result deatils image for ${props.name}`} />
      <span>{props.name}</span>
      <span>
        <span>{props.value}</span>/100
      </span>
    </div>
  );
};

export default Detail;
