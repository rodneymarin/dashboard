import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import PageDashboard from "./pages/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="dashboard" element={<PageDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
