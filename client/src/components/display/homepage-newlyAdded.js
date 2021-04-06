import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import RecipeCarousel from "./Carousel";

const NewlyAdded = () => {
  const [newlyAdded, setNewlyAdded] = useState([]);

  useEffect(() => {
    axios
      .get("/recipes?sort=-createdAt&limit=3")
      .then((response) => {
        setNewlyAdded(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <Container>
      <RecipeCarousel recipes={newlyAdded} />
    </Container>
  );
};
export default NewlyAdded;
