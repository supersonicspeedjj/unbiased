import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { RedditShareButton, RedditIcon } from "react-share";
function Newsitem({ description, title, imager, moar, publisher, author }) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 365,
          boxShadow: 3,
          borderRadius: 2,
          // Conditionally remove maxHeight
        }}
        style={{ backgroundColor: "#121212", color: "#BB86FC" }}
      >
        <CardHeader
          // You can apply styles directly using the "style" prop
          title={
            <Typography variant="h6" style={{ color: "#BB86FC" }}>
              From {author}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle2" style={{ color: "#BB86FC" }}>
             Published on {publisher
                ? publisher.trim().length > 10
                  ? publisher.slice(0, 10)
                  : publisher
                : ""}
              {/* {publisher} */}
            </Typography>
          }
        />

        <CardMedia sx={{ height: 140 }} image={imager} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily={"quicksand"}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="#BB86FC">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            {" "}
            <RedditShareButton url={moar} title={title}>
              <RedditIcon size={30} round={true} />
            </RedditShareButton>
          </Button>
          <a href={moar} target="_blank" rel="noreferrer">
            <Button size="small">Read More</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}

export default Newsitem;
