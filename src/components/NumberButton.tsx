export const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

function NumberButton({
  number,
  status,
  onClick,
}: {
  number: number;
  status: string;
  onClick: () => void;
}) {
  return (
    <button
      className="number"
      style={{
        backgroundColor:
          (colors as { [key: string]: string })[status] ?? "pink",
      }}
      onClick={onClick}
    >
      {number}
    </button>
  );
}

export default NumberButton;
