import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta">
        <div className="frame-parent14">
          <div className="discover-the-future-of-talent-parent">
            <h1 className="discover-the-future-container">
              <span>
                <span>{`Discover the Future of `}</span>
                <span className="talent-assessment">Talent Assessment!</span>
              </span>
            </h1>
            <div className="facing-challenges-in-container">
              <p className="facing-challenges-in">
                Facing challenges in traditional hiring?
              </p>
              <p className="uncover-the-costs">
                Uncover the costs, pitfalls, and the game-changing role of
                Generative AI in recruitment.
              </p>
            </div>
            <div className="inside-this-whitepaper-container">
              <p className="inside-this-whitepaper">
                <b>🔍 Inside this Whitepaper:</b>
              </p>
              <ul className="manual-vs-machine-based-hirin">
                <li className="manual-vs-machine-based-hirin1">
                  <span className="manual-vs-machine-based">{`Manual vs. Machine-based hiring: Costs & Challenges.`}</span>
                </li>
                <li className="the-truth-about-interview-as">
                  <span className="the-truth-about">
                    The truth about "Interview as a Service."
                  </span>
                </li>
                <li>
                  <span className="generative-ai-the">
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <Button
            className="cta-button2"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fffbfb",
              fontSize: "24",
              background: "#5c27c0",
              borderRadius: "20px",
              "&:hover": { background: "#5c27c0" },
              width: 591,
              height: 70,
            }}
          >
            Download Now for Smarter Recruitment
          </Button>
        </div>
        <div className="wrapper-rectangle-39394">
          <img
            className="wrapper-rectangle-39394-child"
            loading="lazy"
            alt=""
            src="/rectangle-39394@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
