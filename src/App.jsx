import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Inspection from "./pages/Inspections";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inspection />} />
      </Route>
    </Routes>
  );
}
