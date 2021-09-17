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
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  

`
export default App;
