import { Button } from "@mui/material";
import FrameComponent5 from "./FrameComponent5";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <section className="frame-section">
      <div className="choose-your-simple-transparen-wrapper">
        <h1 className="choose-your-simple-container">
          <span>{`Choose Your Simple, `}</span>
          <span className="transparent-pricing">Transparent Pricing</span>
        </h1>
      </div>
      <div className="frame-parent7">
        <div className="frame-parent8">
          <FrameComponent5 prop="1" month="Month" prop1="199.00" />
          <div className="frame-parent9">
            <div className="frame-parent10">
              <div className="frame-wrapper5">
                <div className="frame-parent11">
                  <div className="frame-parent12">
                    <div className="container">
                      <div className="div2">3</div>
                    </div>
                    <h3 className="months">Months</h3>
                  </div>
                  <Button
                    className="frame-child2"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#1f1f1f",
                      fontSize: "14",
                      background: "#ffb649",
                      borderRadius: "0px 0px 0px 5px",
                      "&:hover": { background: "#ffb649" },
                      width: 132,
                      height: 36,
                    }}
                  >
                    Most Popular
                  </Button>
                </div>
              </div>
              <div className="group">
                <h1 className="h11">₹</h1>
                <div className="div3">149.00</div>
                <div className="month2">/month</div>
              </div>
            </div>
            <div className="frame-wrapper6">
              <div className="suitable-for-companies-with-5-group">
                <div className="suitable-for-companies1">
                  Suitable for companies with 5-10 openings
                </div>
                <div className="frame-parent13">
                  <div className="icons-parent4">
                    <img className="icons6" alt="" src="/icons.svg" />
                    <div className="interview-ready-candidates1">
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className="icons-parent5">
                    <img className="icons7" alt="" src="/icons.svg" />
                    <div className="unlimited-job-postings1">
                      Unlimited job postings
                    </div>
                  </div>
                  <div className="icons-parent6">
                    <img className="icons8" alt="" src="/icons.svg" />
                    <div className="receive-pre-vetted-profiles1">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="icons-parent7">
                    <img className="icons9" alt="" src="/icons-3.svg" />
                    <div className="dedicated-account-manager1">
                      Dedicated account manager
                    </div>
                  </div>
                  <div className="icons-parent8">
                    <img className="icons10" alt="" src="/icons-3.svg" />
                    <div className="assistance-with-interview1">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="icons-parent9">
                    <img className="icons11" alt="" src="/icons-3.svg" />
                    <div className="custom-reports1">Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="simple-button5"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#5c27c0",
                fontSize: "18",
                background: "#f7f7f7",
                borderRadius: "10px",
                "&:hover": { background: "#f7f7f7" },
                height: 59,
              }}
            >
              Get Started
            </Button>
          </div>
          <FrameComponent5
            prop="6"
            month="Months"
            prop1="169.00"
            propPadding="0px var(--padding-17xl) 0px var(--padding-16xl-5)"
            propPadding1="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
            propWidth="15px"
            propMinWidth="15px"
            propMinWidth1="58px"
          />
        </div>
        <div className="logic-gate">
          <div className="input-filter">
            <h2 className="step-3">Step-3</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
