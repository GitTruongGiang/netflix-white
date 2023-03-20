import { Container, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { API_KEY, IMAGE_URL } from "../app/confing";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";

function DeitalPage() {
  const [dataDeital, setDataDeital] = useState({});
  const { movieId } = useParams();
  const api_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiService.get(api_url);
      setDataDeital(response.data);
    };
    fetchData();
  }, [api_url]);

  return (
    <div className="deita_container">
      <div
        style={{
          backgroundImage: `url(${
            IMAGE_URL + dataDeital.backdrop_path || dataDeital.poster_path
          })`,
          width: "100%",
          height: "400px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <div className="fadetop"></div>
        <Container maxWidth="lg">
          <div className="deita_main">
            <div className="deita_poster">
              <img src={IMAGE_URL + dataDeital.poster_path} alt="" />
            </div>
            <div className="deita_heding">
              <div>
                <h4>{dataDeital.release_date || dataDeital.first_air_date}</h4>
                <h1> {dataDeital.title || dataDeital.name}</h1>
                <p>{dataDeital.overview}</p>
              </div>
              <div className="main_icon">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "30px",
                  }}
                >
                  <button className="icon_playarrowicon">
                    <PlayArrowIcon id="icon_play" />
                  </button>
                  <span>Watch The Trailer</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button className="icon_playarrowicon">
                    <ShareIcon id="icon_share" />
                  </button>
                  <span>Share</span>
                </div>
              </div>
              <div className="deita_rate">
                <div className="vote_average">
                  <p>
                    <span className="voted">{dataDeital.vote_average}</span>
                    /10 <span className="imdb">IMDb</span>
                  </p>
                </div>
                <div className="add_heart">
                  <button className="add">
                    <AddIcon id="icon_add" />
                  </button>
                  <button className="heart">
                    <FavoriteIcon id="icon_heart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default DeitalPage;
