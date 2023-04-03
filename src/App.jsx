import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Inspection from "./pages/Inspections";
import InspectionDetails from "./pages/InspectionDetails";
import Grades from "./pages/Grades";
import Farms from "./pages/Farms";
import Turbines from "./pages/Turbines";
import TurbineComponents from "./pages/TurbineComponents";
import ComponentTypes from "./pages/ComponentTypes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inspection />} />
        <Route path="inspection/:id" element={<InspectionDetails />} />
        <Route path="farms" element={<Farms />} />
        <Route path="grades" element={<ComponentTypes />} />
        <Route path="component_types" element={<Grades />} />
        <Route path="turbines">
          <Route index element={<Turbines />} />
          <Route path=":id" element={<TurbineComponents />} />
        </Route>
      </Route>
    </Routes>
  );
}
