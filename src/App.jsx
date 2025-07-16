import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  return (
    // basename: corrisponde alla repository di Github dove è ospitato il sito
    <BrowserRouter basename={'/my-site/'}>
        <AnimatedRoutes></AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;
