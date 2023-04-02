import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Inspection from "./pages/Inspections";
import InspectionDetails from "./pages/InspectionDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inspection />} />
        <Route path="inspection/:id" element={<InspectionDetails />} />
      </Route>
    </Routes>
  );
}
