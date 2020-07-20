import React from "react";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton/Skeleton";

export default function SkeletonComponent() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(x => (
        <div style={{ width: "300px" }} key={x}>
          <Skeleton variant="rect" width={280} height={290} />
          <Typography variant="h4">
            <Skeleton variant="text" width={280} />
          </Typography>
          <Typography style={{ textAlign: "right" }} variant="subtitle2">
            <Skeleton variant="text" width="50%" />
          </Typography>
        </div>
      ))}
    </>
  );
}
