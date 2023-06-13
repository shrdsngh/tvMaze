import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SearchResults = ({ results }) => {
  return (
    <div className="results-list" style={{ display: "flex", flexWrap: "wrap" }}>
      {results.map((result, id) => {
        if(result.show.image === null){
            const imager = true;
            return (
          <div>
            <div>
              <Card className="cards" key={id} sx={{ maxWidth: 345 }} >
                <CardMedia
                  sx={{ height: 350 }}
                  image="/tv.png"
                  title={result.show.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.show.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.show.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography><b>TYPE:</b><i>{result.show.type}</i></Typography>
                  <Typography><b>LANG:</b><i>{result.show.language}</i></Typography>
                </CardActions>
              </Card>
            </div>
          </div>
        );
        } else {
            return (
          <div>
            <div>
              <Card className="cards" key={id} sx={{ maxWidth: 400 }} >
                <CardMedia
                  sx={{ height: 350 }}
                  image={result.show.image.medium}
                  title={result.show.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.show.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.show.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                <Typography><b>TYPE:</b><i>{result.show.type}</i></Typography>
                <Typography><b>LANG:</b><i>{result.show.language}</i></Typography><br/>
                <Typography><b>STATUS:</b><i>{result.show.status}</i></Typography>
                </CardActions>
              </Card>
            </div>
          </div>
        );
        }      
      })}
    </div>
  );
};

export default SearchResults;
