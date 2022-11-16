import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DefaultButton } from "../Default/DefaultButton";

export default function TableHeader({
  tableHeaderTitle,
  tableHeaderButtonName,
}) {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex h-20 max-w-full items-center justify-between border-b-2 bg-white p-4">
      <span className="text-xl font-bold">{tableHeaderTitle}</span>

      <DefaultButton
        type="button"
        color="btn--primary"
        onClick={() => navigate("new")}
      >
        {tableHeaderButtonName}
      </DefaultButton>
    </div>
  );
}
