import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <footer></footer>
      </HashRouter>
    </>
  );
}

export default App;
