import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// import data from "./response.json";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

function Newscomp(props) {
  const matches = useMediaQuery("(min-width:600px)");
  const [articleTitles, setArticleTitles] = useState([]);
  const [desc, setDesc] = useState([]);
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState([]);
  const [poger, setpoger] = useState([]);
  const [truth,settruth]=useState(false);
  const [publish,setpub]=useState([]);
  const [auth,setau]=useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const url1 = `https://newsdata.io/api/1/news?apikey=pub_2841359190a0d184cf49552e79fa72b27cfd6&language=en&category=${props.page}&image=1`;
        settruth(true);
        const data = await fetch(url1);
        const processed_data = await data.json();
        
      
        
        setpoger(processed_data.nextPage);
        const titles = processed_data.results.map((article) => article.title);
        const descriptions = processed_data.results.map((desi) => desi.description);
        const images = processed_data.results.map((itera) => itera.image_url);
        const urls = processed_data.results.map((itera) => itera.link);
        const publishes=processed_data.results.map((itera)=>itera.pubDate);
        const author=processed_data.results.map((itera)=>itera.source_id);
        setArticleTitles(titles);
        setDesc(descriptions);
        setImage(images);
        setUrl(urls);
        settruth(false);
        setpub(publishes);
        setau(author);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, [props.page]);
  

  async function fetcher(pageno) {
    try {
      
      const url1 = `https://newsdata.io/api/1/news?apikey=pub_2841359190a0d184cf49552e79fa72b27cfd6&category=${props.page}&language=en&image=1&page=${pageno}`;
      console.log(props.page);
      settruth(true);
      const data = await fetch(url1);
      const processed_data = await data.json();
      console.log(processed_data)
     
      setpoger(processed_data.nextPage);
      const titles = processed_data.results.map((article) => article.title);
      const descriptions = processed_data.results.map((desi) => desi.description);
      const images = processed_data.results.map((itera) => itera.image_url);
      const urls = processed_data.results.map((itera) => itera.link);
      const publishes=processed_data.results.map((itera)=>itera.pubDate);
      const author=processed_data.results.map((itera)=>itera.source_id);
      setArticleTitles(titles);
      setDesc(descriptions);
      setImage(images);
      setUrl(urls);
      settruth(false);
      setpub(publishes);
      setau(author);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  return (
    <div style={{ overflow: "hidden" }}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "30px",
          fontWeight: "bolder",
          fontFamily: "quicksand",
          color:"#BB86FC"
        }}
      >
        UnBiased Headlines
      </h1>
     { truth&&<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",color:"white",marginBottom:"20px"}}>
      <CircularProgress color="inherit"  sty/>
      </div>}
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginLeft: matches ? "40px" : "-5px", marginRight: "0px" }}
      >
        {Array.from(Array(matches?9:10)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
        {!truth&&<Newsitem
           
          title={
            articleTitles[index] ? articleTitles[index].slice(0, 84) : ""
          }
          description={desc[index] ? desc[index].slice(0, 120) : ""}
          imager={
            
                image[index]
          }
          moar={url[index]}
          publisher={publish[index]}
          author={auth[index]}
        />}
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#BB86FC",
            color: "black",
            marginBottom: "20px",
          }}
          onClick={()=>fetcher(poger)}
        >
          Next page
        </Button>
        
      </div>
    </div>
  );
}

export default Newscomp;
