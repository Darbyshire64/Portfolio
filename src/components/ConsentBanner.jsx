import { useEffect, useState } from "react";
import { acceptAnalytics, rejectAnalytics, getConsent } from "../lib/analytics";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();

    if (consent === null) {
      setVisible(true);
    } else if (consent === "false") {
      window.umami?.disable?.();
    } else if (consent === "true") {
      window.umami?.track?.();
    }
  }, []);

  if (!visible) return null;

  function accept() {
    acceptAnalytics();
    setVisible(false);
  }

  function reject() {
    rejectAnalytics();
    setVisible(false);
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <div>
          This site uses privacy-friendly analytics (self-hosted Umami) to
          understand page usage. No personal identification is performed.
        </div>

        <div style={styles.buttons}>
          <button onClick={reject}>Disable</button>
          <button onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
  },
  box: {
    background: "#111",
    color: "#fff",
    padding: 16,
    borderRadius: 12,
    maxWidth: 520,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    gap: 10,
  },
};