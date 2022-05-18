import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// .createRoot() => Selects a element "apot" for "react" to manipulate/replace content
const root = ReactDOM.createRoot(document.getElementById("root")); // is like (Saving a spot)
// .render() => the selected element in the (saved spot)
root.render(<App />);
