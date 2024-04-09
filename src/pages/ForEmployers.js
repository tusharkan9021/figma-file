import { Button } from "@mui/material";
import CopyComponent from "../components/CopyComponent";
import FrameComponent6 from "../components/FrameComponent6";
import PatternRecognizer from "../components/PatternRecognizer";
import RainbowShape from "../components/RainbowShape";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import InputField from "../components/InputField";
import FrameComponent from "../components/FrameComponent";
import "./ForEmployers.css";

const ForEmployers = () => {
  return (
    <div className="for-employers">
      <section className="copy-component-parent">
        <CopyComponent />
        <FrameComponent6 />
      </section>
      <PatternRecognizer />
      <RainbowShape />
      <FrameComponent4 />
      <div className="simple-button-wrapper">
        <Button
          className="simple-button"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#5c27c0",
            fontSize: "18",
            background: "#f7f7f7",
            borderRadius: "10px",
            "&:hover": { background: "#f7f7f7" },
            width: 180,
          }}
        >
          Book a Demo
        </Button>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <InputField />
      <FrameComponent />
      <section className="carousel">
        <div className="stepper">
          <div className="calendar">
            <h1 className="optimize-your-hiring">
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className="discover-the-strengths">
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <Button
            className="cta-button"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fffbfb",
              fontSize: "24",
              background: "#5c27c0",
              borderRadius: "20px",
              "&:hover": { background: "#5c27c0" },
              width: 476,
              height: 70,
            }}
          >
            Request Your Free Hiring Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
