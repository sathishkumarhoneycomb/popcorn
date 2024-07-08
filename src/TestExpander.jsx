import { useState } from "react";

export default function TestExpander({
  expanded = true,
  numOfWords = 5,
  children,
  buttonColor = "red",
}) {
  const [fullString, setFullString] = useState(expanded);

  const substringChildren =
    children.split(" ").slice(0, numOfWords).join(" ") + "...";

  const buttonStyle = {
    marginLeft: "6px",
    cursor: "pointer",
    color: buttonColor,
    border: "none",
    background: "none",
  };

  // Perform string manipulations here
  //   const upperCaseChildren = stringChildren.toUpperCase();
  return (
    <>
      {fullString ? children : substringChildren}

      <button onClick={() => setFullString(!fullString)} style={buttonStyle}>
        {" "}
        {fullString ? "Show Less" : "Show More"}{" "}
      </button>
    </>
  );
}
