import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-8">
      <label className="flex items-center gap-2 cursor-pointer text-white">
        <input
          type="radio"
          name="gender"
          value="male"
          className="w-5 h-5 accent-cyan-500"
        />
        Male
      </label>

      <label className="flex items-center gap-2 cursor-pointer text-white">
        <input
          type="radio"
          name="gender"
          value="female"
          className="w-5 h-5 accent-cyan-500"
        />
        Female
      </label>
    </div>
  );
};

export default GenderCheckbox;