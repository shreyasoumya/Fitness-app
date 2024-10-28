import React from "react";

const MainContent = () => {
  return (
    <div className="flex w-[1310px] h-[899px] gap-[24px] opacity-1">
      {/* Left Box */}
      <div className="w-[312px] h-[201px] opacity-1 bg-gray-200">
        {/* Top Region Component */}
        <div
          className="w-full h-[56px] p-0 px-[16px] gap-[4px] opacity-1 flex items-center"
          style={{ background: "#FFFFFF" }} // Set background color to white
        >
          <div
            className="w-[252px] h-[44px] opacity-1 flex items-center" // Changed to flex to align icon and text
            
          >
          <div>
          style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "22px",
              textAlign: "left",
              background: "#242424",
              color: "#FFFFFF", // Change text color for visibility against dark background
              padding: "0 16px", // Add padding for aesthetics
            }}
            Hello
          </div>
            
            {/* ? Icon */}
            <div
              className="w-[16px] h-[16px] opacity-1 ml-2" // Added margin-left for spacing
              style={{
                background: "#000", // Change to appropriate color or use an icon
                borderRadius: "50%", // Optional: make it circular
                position: "relative",
                top: "4.16px", // Adjust vertical alignment
                left: "4px", // Adjust horizontal alignment
              }}
            >
              ?
            </div>
          </div>
        </div>

        {/* Bottom Region Component */}
        <div
          className="w-[312px] h-[145px] p-0 px-[16px] pt-[24px] gap-[16px] opacity-1"
          style={{ background: "#FFFFFF" }} // Set background color to white
        >
          {/* Add content for the bottom region here */}
          <p>Content for the bottom region.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 h-[899px] opacity-1">
        {/* Add your main content here */}
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
};

export default MainContent;
