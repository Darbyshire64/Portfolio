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
        <div style={styles.text}>
          This site uses privacy-friendly analytics (self-hosted Umami) to
          understand page usage. No personal identification is performed.
        </div>

        <div style={styles.buttons}>
          <button onClick={reject} style={styles.btnSecondary}>
            Disable
          </button>

          <button onClick={accept} style={styles.btnPrimary}>
            Accept
          </button>
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
    maxWidth: 520,
    background: "#111",
    color: "#fff",
    padding: 16,
    borderRadius: 12,
    fontSize: 14,
  },
  text: {
    marginBottom: 12,
    lineHeight: 1.4,
  },
  buttons: {
    display: "flex",
    gap: 10,
  },
  btnPrimary: {
    flex: 1,
    padding: 10,
    background: "#fff",
    color: "#000",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  btnSecondary: {
    flex: 1,
    padding: 10,
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};