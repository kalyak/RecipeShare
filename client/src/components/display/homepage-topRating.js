import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import RecipeCarousel from "./Carousel";

const TopRating = () => {
  const [topRating, setTopRating] = useState([]);

  useEffect(() => {
    axios
      .get("/recipes?sort=-avgRating&limit=3")
      .then((response) => {
        // console.log(response.data);
        setTopRating(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <Container>
      <RecipeCarousel recipes={topRating} />
    </Container>
  );
};
export default TopRating;
