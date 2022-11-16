import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const navigate = useNavigate();
  return (
    <div
      className="fixed flex align-middle justify-center top-0  left-0 bg-slate-50 bg-opacity-50 h-screen w-screen modal"
      onClick={(event) => {
        event.target.classList.contains("modal") && navigate("..");
      }}
    >
      {children}
    </div>
  );
}
