import ms from "ms";
import { useEffect } from "react";
import useStore from "../service/store";
import Redirect from "./Redirect";

export function ProgressBar() {
  const setProgress = useStore((state) => state.setProgress);
  const progress = useStore((state) => state.progress);

  useEffect(() => {
    const progressBar = document.getElementById("animated-progress");
    if (!progressBar) return;

    const animation = progressBar.animate(
      [
        { width: "100%", backgroundColor: "#198754" }, // green
        { backgroundColor: "#ffc107" }, // yellow
        { width: "0%", backgroundColor: "#dc3545" }, // red
      ],
      {
        duration: ms("10s"), // 30 seconds
        easing: "linear",
      }
    );

    animation.onfinish = () => {
      setProgress("0%"); // Animation is finished, trigger action here
    };

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div>
      <div className="progress my-3">
        <div
          id="animated-progress"
          className="progress-bar"
          style={{
            width: "100%",
            // animation: "progressBarAnimation 3s linear",
          }}
        ></div>
      </div>
    </div>
  );
}
