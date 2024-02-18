import React from "react";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <div>
      <div className=" h-16 flex justify-center items-center gap-4 pl-4 flex-1">
        {/* <ListIcon style={{ color: "white" }} fontSize="large" /> */}
        <h1 className="text-2xl font-bold text-black">TODO App</h1>
      </div>
    </div>
  );
};

export default Navbar;
