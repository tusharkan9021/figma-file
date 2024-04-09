import { Button } from "@mui/material";
import "./CopyComponent.css";

const CopyComponent = () => {
  return (
    <div className="copy-component">
      <header className="parent-box">
        <div className="child-list">
          <div className="logo">
            <div className="logo-child" />
            <div className="logo-item" />
            <div className="rework">
              <span className="re">
                <span className="r">r</span>
                <span className="e">e</span>
              </span>
              <span className="work">work</span>
            </div>
            <div className="ai-wrapper">
              <div className="ai">ai</div>
            </div>
          </div>
        </div>
        <div className="parent-box-inner">
          <div className="talent-finder-parent">
            <div className="talent-finder">Talent Finder</div>
            <div className="for-recruiters">For Recruiters</div>
            <div className="for-employers-parent">
              <div className="for-employers1">For Employers</div>
              <div className="vector-wrapper">
                <img className="frame-child" alt="" src="/vector-451.svg" />
              </div>
            </div>
            <div className="about-us">About Us</div>
            <div className="company">Company</div>
          </div>
        </div>
        <div className="path-segment">
          <Button
            className="simple-button1"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#5c27c0",
              fontSize: "18",
              borderColor: "#5c27c0",
              borderRadius: "10px",
              "&:hover": { borderColor: "#5c27c0" },
              width: 129,
            }}
          >
            Log In
          </Button>
          <Button
            className="simple-button2"
            disableElevation={true}
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
      </header>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="heading-parent">
            <div className="heading" />
            <div className="mask-group">
              <div className="rectangle-parent">
                <div className="frame-item" />
                <div className="k-candidates-hired-container">
                  <p className="k">
                    <b>+10K</b>
                  </p>
                  <p className="candidates-hired">Candidates Hired</p>
                </div>
                <button className="rectangle-group">
                  <div className="frame-inner" />
                  <img className="input-form-icon" alt="" src="/vector-4.svg" />
                </button>
              </div>
              <img
                className="mask-group-child"
                alt=""
                src="/rectangle-39395@2x.png"
              />
            </div>
          </div>
          <div className="power-up-your-container">
            <p className="power-up-your">Power Up Your Hiring</p>
            <p className="with-rework">with Rework .</p>
          </div>
        </div>
        <div className="empower-your-business-with-cut-wrapper">
          <div className="empower-your-business">{`Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire `}</div>
        </div>
        <div className="cta-button-parent">
          <Button
            className="cta-button1"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f7f7f7",
              fontSize: "24",
              background: "#5c27c0",
              borderRadius: "20px",
              "&:hover": { background: "#5c27c0" },
              width: 271,
              height: 70,
            }}
          >
            Book A Demo
          </Button>
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="group-parent">
                <img className="group-icon" alt="" src="/group.svg" />
                <div className="no-credit-required">No credit Required</div>
              </div>
              <div className="group-group">
                <img className="group-icon1" alt="" src="/group.svg" />
                <div className="streamlined-recruitment-proces">
                  Streamlined Recruitment Process
                </div>
              </div>
              <div className="frame-div">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <button className="frame-button">
                    <div className="frame-child1" />
                    <img className="vector-icon" alt="" src="/vector-4.svg" />
                  </button>
                  <div className="data-aggregator">
                    <div className="happy-companies">
                      <p className="p">
                        <b>+360</b>
                      </p>
                      <p className="happy-companies1">Happy Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-component-child" />
    </div>
  );
};

export default CopyComponent;
