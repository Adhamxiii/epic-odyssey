import { useState } from "react";
import brush from "./assets/brush.png";
import data from "./data";
import { useEffect } from "react";

const App = () => {
  const [category, setCategory] = useState(data.famousPersonalities);
  const [isActive, setIsActive] = useState(false);

  const handleTabClick = (category) => {
    setIsActive(false);

    setTimeout(() => {
      setCategory(category);
      setIsActive(true);
    }, 300);
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h1>Epic Odyssey</h1>
          <div className="brush">
            <img src={brush} alt="brush" />
          </div>
        </div>
        <div className="content">
          <div className="left-side">
            <div className="image">
              <div className="bg"></div>
              <img src={category.image} alt="hero" />
            </div>
          </div>
          <div className="right-side">
            <div className="tabs">
              {Object.keys(data).map((categoryName, index) => {
                const tab = data[categoryName];
                return (
                  <div
                    key={index}
                    className="tab-container"
                    onClick={() => handleTabClick(tab)}
                  >
                    <img
                      className={`tab ${tab === category ? "active" : ""}`}
                      src={tab.tabIcon}
                      alt={tab.name}
                    />
                  </div>
                );
              })}
            </div>
            <div className={`info ${isActive ? "" : "hidden"}`}>
              <div className="category-container">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <div className="examples">
                  {category.examples.map((example, index) => (
                    <div key={index} className="example-container">
                      <h3>{example.name}</h3>
                      <p>{example.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
