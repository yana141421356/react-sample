import React, { useCallback, useEffect, useState } from "react";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Top from "./components/Top";

const App = () => {
  const [route, setRoute] = useState(() => ({
    pathname: window.location.pathname,
    state: window.history.state,
  }));

  useEffect(() => {
    const handlePopState = () => {
      setRoute({
        pathname: window.location.pathname,
        state: window.history.state,
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((pathname, state = {}) => {
    window.history.pushState(state, "", pathname);
    setRoute({ pathname, state });
  }, []);

  switch (route.pathname) {
    case "/otp":
      return <Otp navigate={navigate} userid={route.state?.state?.userid} />;
    case "/top":
      return <Top userid={route.state?.state?.userid} />;
    default:
      return <Login navigate={navigate} />;
  }
};

export default App;
