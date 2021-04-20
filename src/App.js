import Carousel from "./components/carousel";
import { Container, CarouselContainer } from "./styled";
function App() {
  return (
    <Container>
      <CarouselContainer>
        <Carousel
          images={[
            "https://picsum.photos/700/300?q=1",
            "https://picsum.photos/700/300?q=2",
            "https://picsum.photos/700/300?q=3",
            "https://picsum.photos/700/300?q=4",
            "https://picsum.photos/700/300?q=5",
          ]}
        />
      </CarouselContainer>
    </Container>
  );
}

export default App;
