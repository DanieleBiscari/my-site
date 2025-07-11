import { BrowserRouter} from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  return (
    <BrowserRouter basename={'/my-site/'}>
        <AnimatedRoutes></AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;
