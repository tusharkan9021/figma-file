import TriangleShape from "./TriangleShape";
import "./PatternRecognizer.css";

const PatternRecognizer = () => {
  return (
    <section className="pattern-recognizer">
      <div className="rule-applier">
        <div className="our-amazing-benefits-helpful-f-wrapper">
          <h1 className="our-amazing-benefits-container">
            <span>{`Our Amazing Benefits `}</span>
            <span className="helpful-for-your">Helpful For Your Hiring</span>
          </h1>
        </div>
        <div className="rule-applier-child" />
        <div className="triangle-shape-parent">
          <TriangleShape
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <TriangleShape
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propLeft="428.2px"
            propTop="0px"
            propHeight="unset"
            propLineHeight="27.2px"
          />
          <div className="frame-parent1">
            <div className="frame-wrapper1">
              <div className="vector-parent">
                <img className="vector-icon2" alt="" src="/vector-7.svg" />
                <img className="vector-icon3" alt="" src="/vector-8.svg" />
              </div>
            </div>
            <div className="highly-contextualized-intervie-parent">
              <h3 className="highly-contextualized-intervie-container">
                <p className="highly-contextualized">{`Highly Contextualized `}</p>
                <p className="interview">Interview</p>
              </h3>
              <div className="al-models-generate">
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="icon-set-wrapper">
              <div className="icon-set">
                <img className="vector-icon4" alt="" src="/vector-9.svg" />
                <img className="plus-shape-icon" alt="" src="/vector-10.svg" />
                <img className="minus-shape-icon" alt="" src="/vector-11.svg" />
                <img className="star-shape-icon" alt="" src="/vector-12.svg" />
              </div>
            </div>
            <div className="automated-scheduling-parent">
              <h3 className="automated-scheduling">
                <p className="automated">{`Automated `}</p>
                <p className="scheduling">Scheduling</p>
              </h3>
              <div className="email-whatsapp">{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <TriangleShape
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propLeft="428.2px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
          <TriangleShape
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propLeft="856.3px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default PatternRecognizer;
