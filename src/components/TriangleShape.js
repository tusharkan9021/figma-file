import { useMemo } from "react";
import "./TriangleShape.css";

const TriangleShape = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
  propHeight,
  propLineHeight,
}) => {
  const triangleShapeStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className="triangle-shape" style={triangleShapeStyle}>
      <img className="eos-iconsai" alt="" src={eosIconsai} />
      <h3 className="cost-reduce" style={costReduceStyle}>
        <p className="p1">{prop}</p>
        <p className="cost-reduce1">{costReduce}</p>
      </h3>
      <div className="zero-overhead-in">{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default TriangleShape;
