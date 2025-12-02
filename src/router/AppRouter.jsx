import { Routes, Route, Navigate } from "react-router";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound";
// import ForbiddenPage from "../pages/ForbiddenPage";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route index element={<MainPage />} />
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="contact" element={<Contact />} /> */}

      {/* Redirects */}
      {/* <Route path="not-found" element={<NotFound />} /> */}
      {/* <Route path="forbidden" element={<ForbiddenPage />} /> */}
      {/* <Route path="*" element={<Navigate to="/not-found" replace />} /> */}
  </Routes>
  );
};

export default AppRouter;
