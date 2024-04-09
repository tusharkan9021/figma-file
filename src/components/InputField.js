import Component from "./Component";
import "./InputField.css";

const InputField = () => {
  return (
    <section className="input-field">
      <div className="dropdown-list">
        <div className="radio-buttons">
          <div className="progress-bar">
            <h1 className="success-stories">
              <span>{`Success `}</span>
              <span className="stories">Stories</span>
            </h1>
          </div>
          <div className="component-11-parent">
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className="divider">
          <div className="canvas-parent">
            <div className="canvas" />
            <div className="canvas1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputField;
