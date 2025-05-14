import React from 'react';
import './ScrollingText.css';
// Import the Cinzel font
import '@fontsource/cinzel';

const ScrollingText = () => {
  // Single photography quote
  const quote = "Be inspired by the stories my lens tells";

  // Photography keywords with unique styling for each
  const keywords = [
    { text: "PORTRAITS", style: "style1" },
    { text: "CANON", style: "style2" },
    { text: "SHUTTER", style: "style3" },
    { text: "SONY", style: "style4" },
    { text: "LIGHT", style: "style5" },
    { text: "MOMENTS", style: "style6" },
    { text: "PANASONIC", style: "style7" },
    { text: "lANDSCAPES", style: "style8" }
  ];

  return (
    <div className="photography-text-section">
      {/* Combined section with quote and keywords */}
      <div className="combined-container">
        {/* The quote with large static text */}
        <div className="stylized-quote">
          {quote}
        </div>
        
        {/* Keywords with unique styling */}
        <div className="dynamic-keywords">
          {keywords.map((item, index) => (
            <React.Fragment key={index}>
              <span className={`dynamic-keyword ${item.style}`}>{item.text}</span>
              {index < keywords.length - 1 && <span className="keyword-separator">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
