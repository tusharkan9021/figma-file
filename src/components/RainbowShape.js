import { Button } from "@mui/material";
import Steps from "./Steps";
import "./RainbowShape.css";

const RainbowShape = () => {
  return (
    <section className="rainbow-shape">
      <div className="heart-shape">
        <img className="bell-shape-icon" alt="" src="/vector-13.svg" />
        <div className="steps1">
          <div className="exclamation-mark-shape">
            <h1 className="how-our-system-container">
              <span>{`How Our System `}</span>
              <span className="operates">Operates</span>
            </h1>
          </div>
          <div className="cross-mark-shape">
            <div className="steps-parent">
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                frame48095633="/frame-48095633.svg"
              />
              <div className="steps2">
                <h3 className="sign-up">Sign Up</h3>
                <div className="follow-the-link">
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className="wrapper-mingcuteuser-add-line">
                  <img
                    className="mingcuteuser-add-line-icon"
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                frame48095633="/frame-48095633-1.svg"
                propPadding="0px 0px var(--padding-41xl) var(--padding-11xl)"
                propPadding1="0px var(--padding-mini)"
                propMinHeight="100px"
              />
            </div>
            <div className="simple-button-container">
              <Button
                className="simple-button3"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#5c27c0",
                  fontSize: "18",
                  background: "#f7f7f7",
                  borderRadius: "10px",
                  "&:hover": { background: "#f7f7f7" },
                  width: 164,
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RainbowShape;
