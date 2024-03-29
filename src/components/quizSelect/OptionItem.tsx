import { SetStateAction } from "react";

interface OptionItemProps {
  category: undefined;
  handleOnselect: (category: SetStateAction<undefined>)=> void;
}

const OptionItem = ({ category, handleOnselect }: OptionItemProps) => {
  return (
    <div className="option">
      <div className="optionTile">
        <h1>{category}</h1>
      </div>
      <button data-testid={category} className="optionSelector" onClick={() => handleOnselect(category)}>
        <div>
          <h1>Start</h1>
        </div>
      </button>
    </div>
  );
};

export default OptionItem;
