import { useState } from "react";
import { Layout } from "./Layout/Layout";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return <Layout></Layout>;
}

export default App;
