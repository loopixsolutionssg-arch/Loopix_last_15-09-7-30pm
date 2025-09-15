import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function GlobalErrorListener() {
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onError = (e: ErrorEvent) => {
      const msg = e?.error?.message || e.message || "Unknown error";
      console.error("Global error:", e.error || e);
      setMessage(msg);
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      const msg = (e.reason && (e.reason.message || String(e.reason))) || "Unhandled promise rejection";
      console.error("Unhandled rejection:", e.reason);
      setMessage(msg);
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return (
    <Snackbar open={Boolean(message)} autoHideDuration={8000} onClose={() => setMessage(null)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
      <Alert severity="error" onClose={() => setMessage(null)} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
