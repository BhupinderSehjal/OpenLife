import { useState } from "react";

const HelpBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        ?
      </button>

      {open && (
        <div
          style={{
            marginTop: "10px",
            background: "#fff",
            padding: "10px",
            width: "220px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <strong>Need Help?</strong>
          <ul style={{ fontSize: "14px", marginTop: "8px" }}>
            <li>Track daily tasks</li>
            <li>Use timer effectively</li>
            <li>View daily summary</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HelpBot;
