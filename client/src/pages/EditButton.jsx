import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DefaultDropDownButton from "../components/DefaultDropDownButton";

const EditButton = () => {
  const { id } = useParams();
  const widths = [50, 60, 70, 80];
  const heights = [30, 40, 50, 60];
  const colors = ["black", "red", "blue", "green"];
  const borderRadiuses = ["0%", "20%", "30%", "40%"];
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(30);
  const [color, setColor] = useState("black");
  const [borderRadius, setBorderRadius] = useState("0%");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/buttons/${id}`)
      .then((res) => {
        setWidth(res.data.width);
        setHeight(res.data.height);
        setColor(res.data.color);
        setBorderRadius(res.data.borderradius);
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  const calButtonPrice = () => {
    let total = 0;
    total = total + width + height;
    if (color == "black") {
      total += 100;
    } else if (color == "red") {
      total += 200;
    } else if (color == "blue") {
      total += 300;
    } else if (color == "green") {
      total += 500;
    }
    if (borderRadius == "0%") {
      total += 0;
    } else if (borderRadius == "20%") {
      total = (total * 120) / 100;
    } else if (borderRadius == "30%") {
      total = (total * 130) / 100;
    } else if (borderRadius == "40%") {
      total = (total * 140) / 100;
    }
    return total;
  };
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:3001/buttons/${id}`)
      .catch((err) => console.log(err));
    navigate("/");
  };
  const handleUpdate = async () => {
    if (width == 80 && height == 60) {
      setErr("Button too BIG!!");
    } else {
      const data = {
        width: width,
        height: height,
        color: color,
        borderradius: borderRadius, // Ensure the key matches the expected key on the server
        price: calButtonPrice(), // Call your calButtonPrice function to get the price
      };
      await axios
        .patch(`http://localhost:3001/buttons/${id}`, data)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      navigate("/");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <DefaultDropDownButton
          setClass={setWidth}
          options={widths}
          title={"Width"}
          val={width}
        />
        <DefaultDropDownButton
          setClass={setHeight}
          options={heights}
          title={"Height"}
          val={height}
        />
        <DefaultDropDownButton
          setClass={setColor}
          options={colors}
          title={"Color"}
          val={color}
        />
        <DefaultDropDownButton
          setClass={setBorderRadius}
          options={borderRadiuses}
          title={"BorderRadius"}
          val={borderRadius}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center text-red-500 font-semibold">
        {err}
      </div>
      <br />
      <br />
      <div className="flex justify-center items-center gap-3">
        <button onClick={handleDelete} className="btn btn-error">
          Delete Button
        </button>
        <button onClick={handleUpdate} className="btn btn-primary">
          Update Button
        </button>
        <button className="btn">
          Price
          <div className="badge">{calButtonPrice()}</div>
        </button>
      </div>
    </div>
  );
};

export default EditButton;
