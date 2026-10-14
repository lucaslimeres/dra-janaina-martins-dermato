import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { ArticleDetail } from "./pages/ArticleDetail";
import { OnlineConsultation } from "./pages/OnlineConsultation";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="conteudos" element={<Articles />} />
        <Route path="conteudos/:slug" element={<ArticleDetail />} />
        <Route path="dermatologista-online" element={<OnlineConsultation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
