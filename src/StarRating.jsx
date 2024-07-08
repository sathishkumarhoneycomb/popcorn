import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainer = {
  display: "flex",
  gap: "4px",
};

export default function StarRating({
  maxRating = 10,
  color = "gold",
  size = "20",
  onSetRating,
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  // rating 1
  // if star id < rating : then color it

  function handleStarRating(index) {
    setRating(index + 1);
    onSetRating(index + 1);
  }

  return (
    <>
      <div style={containerStyle}>
        <div style={starContainer}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              handleStarRating={() => handleStarRating(i)}
              mouseIn={() => setTempRating(i + 1)}
              mouseOut={() => setTempRating(0)}
              fill={tempRating ? i < tempRating : i < rating}
              color={color}
              size={size}
            />
          ))}
        </div>

        <p> {tempRating || rating || 0} </p>
      </div>
    </>
  );
}

function Star({ handleStarRating, fill, mouseIn, mouseOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <span
      style={starStyle}
      onClick={handleStarRating}
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
    >
      {fill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke="none"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#000"
          stroke="#000"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </span>
  );
}
