import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const fetchButtons = async () => {
      const response = await fetch("http://localhost:3001/buttons");
      const data = await response.json();
      setButtons(data);
    };
    fetchButtons();
  }, []);
  const handleClick = () => {
    navigate("/:id");
  };
  return (
    <div>
      {buttons.length !== 0 &&
        buttons.map((but) => {
          return (
            <button
              style={{
                width: but.width,
                height: but.height,
                borderRadius: but.borderradius,
                backgroundColor: but.color,
              }}
              key={but.id}
              className="m-3 text-white"
              onClick={() => navigate(`edit/${but.id}`)}
            >
              {"$" + but.price}
            </button>
          );
        })}
    </div>
  );
};

export default Buttons;
