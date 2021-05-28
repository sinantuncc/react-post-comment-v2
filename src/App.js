import { Container } from "semantic-ui-react";
import MenuComponent from "./components/MenuComponent";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Container>
        <MenuComponent />
      </Container>
    </Router>
  );
}

export default App;
