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
  status: keyof typeof colors;
  onClick: (number: number, currentStatus: keyof typeof colors) => void;
}) {
  return (
    <button
      className="number"
      style={{
        backgroundColor:
          (colors as { [key: string]: string })[status] ?? "pink",
        height: 32,
        width: 32,
      }}
      onClick={() => onClick(number, status)}
    >
      {number}
    </button>
  );
}

export default NumberButton;
