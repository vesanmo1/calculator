import "./App.css";

export const CalculatorButton = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button className="calculator__button" onClick={handleClick}>
      {value}
    </button>
  );
};
