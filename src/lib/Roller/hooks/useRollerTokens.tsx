import Token from "../Token/Token";

const NUMBER_SEQUENCE = "0123456789";

function makeTokenRoller(
  id: string,
  token: string,
  rollWay: "up" | "down",
  index: number
) {
  if (token === "," || token === ".") {
    return (
      <div
        className="token-special-roller"
        data-roller-id={id}
        key={`tsr-${index}`}
      >
        {[...Array(NUMBER_SEQUENCE.length * 2 + 1)].map((_, i) => (
          <Token key={i} rollWay={rollWay} isSpecial>
            {token}
          </Token>
        ))}
      </div>
    );
  }

  return (
    <div className="token-roller" data-roller-id={id} key={`tr-${index}`}>
      <Token rollWay={rollWay}>{token}</Token>
      {[...Array(NUMBER_SEQUENCE.length * 2)]
        .map((_, i) => {
          const index = (parseInt(token, 10) + i) % NUMBER_SEQUENCE.length;
          return (
            <Token rollWay={rollWay} key={i}>
              {NUMBER_SEQUENCE[index]}
            </Token>
          );
        })
        .reverse()}
    </div>
  );
}

export function useRollerTokens(
  id: string,
  value: number,
  rollWay: "up" | "down"
) {
  const tokens = value.toLocaleString().split("");
  return tokens.map((token, i) => makeTokenRoller(id, token, rollWay, i));
}
