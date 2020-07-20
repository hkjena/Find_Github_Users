import React from "react";
import Box from "@material-ui/core/Box";

const GridContainer = ({ children }) => {
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {children}
      </Box>
    </div>
  );
};

export default GridContainer;
