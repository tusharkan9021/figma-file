import { useMemo } from "react";
import "./Steps.css";

const Steps = ({
  uploadDocuments,
  shortlistTheMostQualified,
  frame48095633,
  propPadding,
  propPadding1,
  propMinHeight,
}) => {
  const stepsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
      minHeight: propMinHeight,
    };
  }, [propPadding1, propMinHeight]);

  return (
    <div className="steps" style={stepsStyle}>
      <h3 className="upload-documents">{uploadDocuments}</h3>
      <div className="data-aggregator-wrapper" style={frameDivStyle}>
        <div className="data-aggregator1">
          <div className="shortlist-the-most">{shortlistTheMostQualified}</div>
        </div>
      </div>
      <div className="wrapper-frame-48095633">
        <img
          className="wrapper-frame-48095633-child"
          loading="lazy"
          alt=""
          src={frame48095633}
        />
      </div>
    </div>
  );
};

export default Steps;
