import { BrowserRouter} from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
        <AnimatedRoutes></AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;
