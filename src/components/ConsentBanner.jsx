import { useEffect, useState } from "react";

const STORAGE_KEY = "analytics-consent";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === null) {
      setVisible(true);
      return;
    }

    if (saved === "true") {
      enableTracking();
    }
  }, []);

  function enableTracking() {
    if (window.umami) {
      window.umami.disabled = false;
    }
    localStorage.setItem(STORAGE_KEY, "true");
    setEnabled(true);
  }

  function disableTracking() {
    window.umami?.disable?.();
    localStorage.setItem(STORAGE_KEY, "false");
    setEnabled(false);
  }

  function accept() {
    enableTracking();
    setVisible(false);
  }

  function reject() {
    disableTracking();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <div style={styles.text}>
          This site uses privacy-friendly analytics to understand traffic.
          No cookies are used and no personal identification is performed.
        </div>

        <div style={styles.buttons}>
          <button onClick={reject} style={styles.btnSecondary}>
            Disable
          </button>

          <button onClick={accept} style={styles.btnPrimary}>
            Accept
          </button>
        </div>

        <div style={styles.small}>
          You can change this anytime in settings.
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
    background: "#2e3440",
    color: "#eceff4",
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
    marginBottom: 8,
  },
  btnPrimary: {
    flex: 1,
    padding: 10,
    background: "#5e81ac",
    color: "#000",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  btnSecondary: {
    flex: 1,
    padding: 10,
    background: "#81a1c1",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  small: {
    fontSize: 11,
    opacity: 0.7,
  },
};