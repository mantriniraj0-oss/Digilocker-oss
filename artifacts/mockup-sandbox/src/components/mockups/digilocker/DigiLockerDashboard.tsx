import { useEffect, useState } from "react";

import "./_group.css";

export function DigiLockerDashboard() {
  const [aadhaarOpen, setAadhaarOpen] = useState(false);

  useEffect(() => {
    if (!aadhaarOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAadhaarOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [aadhaarOpen]);

  return (
    <main className="digilocker-demo">
      <aside className="digilocker-demo__notice">
        UNOFFICIAL VISUAL DEMO — NOT A GOVERNMENT SERVICE
      </aside>
      <figure className="digilocker-demo__screen">
        <img
          className="digilocker-demo__image"
          src="/__mockup/images/digilocker-reference.jpg"
          alt="DigiLocker mobile dashboard showing the issued Aadhaar card, utility tiles, document suggestions, a CBSE announcement, and bottom navigation."
          width="1080"
          height="4474"
        />
        <button
          className="digilocker-demo__aadhaar-trigger"
          type="button"
          aria-label="Open the Aadhaar card image"
          title="Open Aadhaar card"
          onClick={() => setAadhaarOpen(true)}
        />
      </figure>
      {aadhaarOpen && (
        <div
          className="aadhaar-viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setAadhaarOpen(false);
          }}
        >
          <section
            className="aadhaar-viewer__dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Aadhaar card image"
          >
            <button
              className="aadhaar-viewer__close"
              type="button"
              aria-label="Close Aadhaar card image"
              autoFocus
              onClick={() => setAadhaarOpen(false)}
            >
              ×
            </button>
            <img
              className="aadhaar-viewer__image"
              src="/__mockup/images/aadhaar-card-detail.png"
              alt="The Aadhaar card image provided for this visual demo, shown without edits."
              width="1080"
              height="1979"
            />
          </section>
        </div>
      )}
    </main>
  );
}
