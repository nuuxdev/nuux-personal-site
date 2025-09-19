"use client";
export default function ProjectsButton() {
  return (
    <button
      onClick={() => {
        window.location.hash = "projects";
      }}
    >
      Straight to my projects <span className="button_icon_emoji">⛷️</span>
    </button>
  );
}
