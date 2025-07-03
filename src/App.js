import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

function App() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const matchDoc = doc(db, "matches", "currentMatchId");

    const unsubscribe = onSnapshot(matchDoc, (docSnap) => {
      const data = docSnap.data();
      if (data?.overlay?.currentEvent) {
        setEvent(data.overlay.currentEvent);
        // Clear after 4 seconds
        setTimeout(() => setEvent(null), 4000);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }}>
      {event && (
        <div style={{
          background: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "20px 40px",
          borderRadius: "20px",
          fontSize: "48px",
          fontWeight: "bold",
          boxShadow: "0 0 20px rgba(255,255,255,0.2)"
        }}>
          {event === "FOUR" && "🏏 FOUR!"}
          {event === "SIX" && "💥 SIX!"}
          {event === "WICKET" && "🔥 WICKET!"}
        </div>
      )}
    </div>
  );
}

export default App;
