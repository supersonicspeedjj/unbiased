import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// import data from "./response.json";
import Button from "@mui/material/Button";
import clevertap from "clevertap-web-sdk";
import CircularProgress from '@mui/material/CircularProgress';

// import InfiniteScroll from "react-infinite-scroll-component";
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
  // const [results,setresult]=useState([]);
  const [vari,setvari]=useState(1);
  const [visiblity,setvisiblity]=useState("hidden");
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // };
 
  useEffect(() => {
    clevertap.event.push("Charged");
    async function fetchData() {
      try {
       console.log( clevertap.getAllInboxMessages) 
        
        const url1 = `https://newsdata.io/api/1/news?apikey=pub_284136f9db7bf515fb19ae89f269d03c86df4&language=en&category=${props.page}&image=1`;
        settruth(true);
        props.changepro(10);
        const data = await fetch(url1);
        const processed_data = await data.json();
        console.log(processed_data.totalResults	)
      
        props.changepro(30);
        setpoger(processed_data.nextPage);
        setvari(1);
        const titles = processed_data.results.map((article) => article.title);
        const descriptions = processed_data.results.map((desi) => desi.description);
        const images = processed_data.results.map((itera) => itera.image_url);
        const urls = processed_data.results.map((itera) => itera.link);
        const publishes=processed_data.results.map((itera)=>itera.pubDate);
        const author=processed_data.results.map((itera)=>itera.source_id);
        props.changepro(60);
        // setresult(processed_data.totalResults	);
        setArticleTitles(titles);
        setDesc(descriptions);
        setImage(images);
        setUrl(urls);
        settruth(false);
        setpub(publishes);
        setau(author);
        props.changepro(90);
        props.changepro(100);
        console.log(clevertap.getAllInboxMessages)
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    // fetchData();
    // eslint-disable-next-line 
  }, [props.page]);
  
  const eventtrig=()=>{
    clevertap.event.push("Charged");
    if(visiblity==="visible"){
      setvisiblity("hidden");
    }
    else{
      setvisiblity("visible");
    }
    
  }

  async function fetcher(pageno) {
    try {
      // eslint-disable-next-line 
      clevertap.event.push("Charged");
      const url1 = `https://newsdata.io/api/1/news?apikey=pub_284136f9db7bf515fb19ae89f269d03c86df4&category=${props.page}&language=en&image=1&page=${pageno}`;
      console.log(props.page);
      settruth(true);
      props.changepro(10);
      const data = await fetch(url1);
      const processed_data = await data.json();
      console.log(processed_data)
      props.changepro(30);
      setpoger(processed_data.nextPage);
      const titles = processed_data.results.map((article) => article.title);
      const descriptions = processed_data.results.map((desi) => desi.description);
      const images = processed_data.results.map((itera) => itera.image_url);
      const urls = processed_data.results.map((itera) => itera.link);
      const publishes=processed_data.results.map((itera)=>itera.pubDate);
      const author=processed_data.results.map((itera)=>itera.source_id);
      props.changepro(60);
      // setresult(processed_data.totalResults	);
      setArticleTitles(articleTitles.concat(titles));
      setDesc(desc.concat(descriptions));
      setImage(image.concat(images));
      setUrl(url.concat(urls));
      settruth(false);
      setpub(publish.concat(publishes));
      setau(auth.concat(author));
      setvari(vari+1);
      
      
      props.changepro(90);
      props.changepro(100);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  document.addEventListener("CT_web_native_display", function(event) {
    console.log("event listener")
    const data = event.detail;
    const topic = data.kv.topic;
    switch (topic) {
      case "dummy": {
        renderCartDropOffPersonalisationCampaign(data)
        break;
       }
    }
  });
  function renderCartDropOffPersonalisationCampaign(data) {
    console.log("event listener")
    const name = data.kv.Name;
    const product = data.kv.Cart;
    const containerEl = document.getElementById('container')
    const userNameEl = containerEl.getElementById('user-name')
    userNameEl.innerText = name
    const productNameEl = containerEl.getElementById('product-name')
    productNameEl.innerText = product 
    clevertap.renderNotificationViewed(data);
    containerEl.addEventListener('click', () => {
      clevertap.renderNotificationClicked(data)
    });
  }
  return (
    <div style={{ overflow: "hidden" }} >
      {/* <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "30px",
          fontWeight: "bolder",
          fontFamily: "quicksand",
          color:"#BB86FC"
        }}
      >
        UnBiased Headlines
      </h1> */}
      <div id="container" style={{color:"white",visibility:visiblity}}>
	<div class="close">&times;</div>
  <img src="https://img.freepik.com/free-photo/young-gowoman-yellow-leather-jacket-copy-space_23-2148674153.jpg?w=2000"/>
  <div class="message">
  	Hello <span id="user-name">user</span>,
   	<p>Still thinking about the <span id="product-name">item</span> in your cart?</p>
    <p>We get it - it's fabulous.</p>
   	<p>Use SALE20 and avail 20% off</p>
    <p>What are you waiting for??</p>
  </div>
 
</div>
<Button onClick={eventtrig}>Click me</Button>
  {/* <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"20px",marginBottom:"20px"}}>{truth&&<CircularProgress style={{color:"white"}}/>}
  </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginLeft: matches ? "25px" : "-5px", marginRight: "0px" }}
      >
        {Array.from(Array(matches?9*vari:10*vari)).map((_, index) => (
          <Grid item xs={matches?2:4} sm={4} md={4} key={index}  > 
        <Newsitem
           
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
        />
          </Grid>
        ))}
      </Grid><div style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"20px",marginBottom:"20px"}}>{truth&&<CircularProgress style={{color:"white"}}/>}
     </div>
      
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
        Load More
        </Button>
        
      </div> */}
    </div>
  );
}

export default Newscomp;
