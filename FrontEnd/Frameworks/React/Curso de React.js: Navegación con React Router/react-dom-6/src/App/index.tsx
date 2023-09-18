import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../auth/auth";
import { ProtectAuth } from "../auth/ProtectAuth";
import {
  BlogPage,
  BlogPost,
  Header,
  HomePage,
  LoginPage,
  LogoutPage,
  ProfilePage,
} from "../components";
// Typed
import { RoutesModel } from "../model/routes.enum";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blogs" element={<BlogPage />}>
              <Route path=":path" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <ProtectAuth routeToNavigate={RoutesModel.LOGIN}>
                  <LogoutPage />
                </ProtectAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectAuth routeToNavigate={RoutesModel.LOGIN}>
                  <ProfilePage />
                </ProtectAuth>
              }
            />

            <Route path="*" element={<div>Error 404: Page Not Found</div>} />
          </Routes>

          <footer></footer>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
