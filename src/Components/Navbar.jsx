import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed left-[65px] w-[1310px] h-[76px] bg-white shadow-md shadow-black/5 px-8 py-4 rounded-b-[20px] flex justify-between items-center"
      style={{ opacity: 1 }}
    >
      {/* Left side of the navbar */}
      <div
        className="flex items-center space-x-4 w-[206px] h-[32px]"
        style={{ opacity: 1 }}
      >
        <a href="/" className="text-lg font-semibold text-gray-800">
          Run Workout
        </a>
      </div>

      {/* Right side button */}
      <div className="flex items-center space-x-4">
        <button
          className="w-[139px] h-[44px] px-4 rounded-tl-[22px] text-white"
          style={{
            opacity: 1,
            background:
              "linear-gradient(90deg, #464FEB 10.42%, #8330E9 100%)",
            boxShadow: "0px 4px 8px 0px #00000024, 0px 0px 2px 0px #0000001F",
          }}
        >
          Save Workout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
