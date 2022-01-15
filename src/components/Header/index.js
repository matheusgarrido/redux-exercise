import React from "react";
import { modulesAndLessons } from "../../constants";

export default function index() {
  const module = "HTML";
  const lesson = "Aula 1";
  return (
    <div style={{ textAlign: "center" }}>
      {module} | {lesson}
    </div>
  );
}
