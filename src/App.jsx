import { useEffect } from "react";
import AppRoutes from "./Routes/AppRoutes";
import { useLoading } from "./context/LoadingProvider";
import Loading, { setProgress } from "./Components/Loader";

function App() {
  const { isLoading, percent, setPercent } = useLoading();

  useEffect(() => {
    const loader = setProgress(setPercent);
    loader.loaded();
  }, [setPercent]);

  useEffect(() => {
    const originalTitle = "Oversocks — Drip from the Ankle";
    const titles = [
      "We Miss You 💔",
      "🔥 Don't Miss Out!",
      "👀 Come Back!!"
    ];
    let index = 0;
    let interval = null;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        interval = setInterval(() => {
          document.title = titles[index % titles.length];
          index++;
        }, 100);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLoading && <Loading percent={percent} />}
      <AppRoutes />
    </>
  );
}

export default App;