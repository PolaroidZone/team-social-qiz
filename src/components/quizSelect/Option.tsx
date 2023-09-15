import { Key, SetStateAction } from "react";
import OptionItem from "./OptionItem";

type OptionProps = {
  categories: String[];
  handleOnselect: (category: SetStateAction<undefined>) => void;
};

const Options: React.FC<OptionProps> = ({ categories, handleOnselect }) => {
  return (
    <div className="options">
      {categories.map((category: any, index: Key | null | undefined) => (
        <OptionItem key={index} category={category} handleOnselect={handleOnselect}/>
      ))}
    </div>
  );
};

export default Options;
