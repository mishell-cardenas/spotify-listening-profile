import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Menu from "./layout/menu";
import Profile from "./pages/profile";
import Artist from "./pages/artist";
import Track from "./pages/track";
import Recent from "./pages/recent";
import Playlist from "./pages/playlist";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Private routes */}
          <Route
            path="/*"
            element={
              <>
                <Menu />
                <main>
                  <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/main" element={<Profile />} />
                    <Route path="/top-artists" element={<Artist />} />
                    <Route path="/top-tracks" element={<Track />} />
                    <Route path="/recently-played" element={<Recent />} />
                    <Route path="/playlists" element={<Playlist />} />
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App