import Router from "./components/screens/router";
import styled from "styled-components"


function App() {
  return (
    <Container>
        <Router/>
    </Container>
  );
}
export const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(to bottom, #000000 30%, #060d13, #0d1a26, #132639, #204060);
    ::-webkit-scrollbar{
      display: none;
    }

`
export default App;
