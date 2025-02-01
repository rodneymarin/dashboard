import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import PageDashboard from "./pages/PageDashboard";
import PageClients from "./pages/PageClients";
import PageMessages from "./pages/PageMessages";
import PageProducts from "./pages/PageProducts";
import PageSettings from "./pages/PageSettings";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<PageDashboard />} />
          <Route path="clients" element={<PageClients />} />
          <Route path="messages" element={<PageMessages />} />
          <Route path="products" element={<PageProducts />} />
          <Route path="settings" element={<PageSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
