import { useMemo } from "react";
import { Button } from "@mui/material";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  prop,
  month,
  prop1,
  propPadding,
  propPadding1,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const monthStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="frame-parent3">
      <div className="frame-wrapper2" style={frameDiv1Style}>
        <div className="frame-parent4">
          <div className="frame-wrapper3" style={frameDiv2Style}>
            <div className="frame-parent5">
              <div className="wrapper" style={frameDiv3Style}>
                <div className="div" style={divStyle}>
                  {prop}
                </div>
              </div>
              <h3 className="month" style={monthStyle}>
                {month}
              </h3>
            </div>
          </div>
          <div className="parent">
            <h1 className="h1">₹</h1>
            <div className="div1">{prop1}</div>
            <div className="month1">/month</div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper4">
        <div className="suitable-for-companies-with-5-parent">
          <div className="suitable-for-companies">
            Suitable for companies with 5-10 openings
          </div>
          <div className="frame-parent6">
            <div className="icons-parent">
              <img className="icons" loading="lazy" alt="" src="/icons.svg" />
              <div className="interview-ready-candidates">
                10 interview-ready candidates
              </div>
            </div>
            <div className="icons-group">
              <img className="icons1" alt="" src="/icons.svg" />
              <div className="unlimited-job-postings">
                Unlimited job postings
              </div>
            </div>
            <div className="icons-container">
              <img className="icons2" alt="" src="/icons.svg" />
              <div className="receive-pre-vetted-profiles">
                Receive pre-vetted profiles within 48 hours
              </div>
            </div>
            <div className="icons-parent1">
              <img className="icons3" alt="" src="/icons-3.svg" />
              <div className="dedicated-account-manager">
                Dedicated account manager
              </div>
            </div>
            <div className="icons-parent2">
              <img className="icons4" alt="" src="/icons-3.svg" />
              <div className="assistance-with-interview">
                Assistance with interview scheduling
              </div>
            </div>
            <div className="icons-parent3">
              <img className="icons5" alt="" src="/icons-3.svg" />
              <div className="custom-reports">Custom reports</div>
            </div>
          </div>
        </div>
      </div>
      <div className="simple-button-frame">
        <Button
          className="simple-button4"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#5c27c0",
            borderRadius: "10px",
            "&:hover": { background: "#5c27c0" },
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent5;
