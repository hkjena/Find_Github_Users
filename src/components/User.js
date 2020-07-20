import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    margin: "0 10px 10px 10px"
  },
  media: {
    height: 250
  }
});

export default function User({ userid, url, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            {userid}
          </Typography>
          <Link href="#" variant="body2" style={{ padding: "2px" }}>
            {url}
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
