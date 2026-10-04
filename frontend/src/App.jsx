import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes/AppRoutes";
import Preloader from "./components/Preloader";
import { SoundProvider } from "./context/SoundContext";

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  // Prevent background scroll while preloader is active
  useEffect(() => {
    if (isPreloading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreloading]);

  return (
    <SoundProvider>
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SoundProvider>
  );
}

export default App;