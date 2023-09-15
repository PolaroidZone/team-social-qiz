type OptionProps = {
  topics: {};
};

const Options: React.FC<OptionProps> = ({ topics }) => {
  return (
    <div className="options">
      <div className="option">
        <div className="optionTile">
          <h1>Movies</h1>
        </div>
        <div className="optionSelector">
          <div>
            <h1>Start</h1>
          </div>
        </div>
      </div>
      <div className="option">
        <div className="optionTile">
          <h1>Movies</h1>
        </div>
        <div className="optionSelector">
          <div>
            <h1>Start</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
