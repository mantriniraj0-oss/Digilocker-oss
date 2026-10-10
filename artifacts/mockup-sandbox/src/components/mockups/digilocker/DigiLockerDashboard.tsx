import { useEffect, useState } from "react";

import "./_group.css";

export function DigiLockerDashboard() {
  const [openImage, setOpenImage] = useState<"aadhaar" | "profile" | null>(
    null,
  );

  useEffect(() => {
    if (!openImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenImage(null);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openImage]);

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
          onClick={() => setOpenImage("aadhaar")}
        />
        <button
          type="button"
          aria-label="Open the profile image"
          title="Open profile image"
          onClick={() => setOpenImage("profile")}
          style={{
            position: "absolute",
            top: "5.05%",
            left: "82.8%",
            width: "14%",
            height: "3.5%",
            padding: 0,
            border: 0,
            borderRadius: "50%",
            background: "transparent",
            cursor: "pointer",
          }}
        />
      </figure>
      {openImage && (
        <div
          className="aadhaar-viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpenImage(null);
          }}
        >
          <section
            className="aadhaar-viewer__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={
              openImage === "profile" ? "Profile image" : "Aadhaar card image"
            }
          >
            <button
              className="aadhaar-viewer__close"
              type="button"
              aria-label="Close image viewer"
              autoFocus
              onClick={() => setOpenImage(null)}
            >
              ×
            </button>
            <img
              className="aadhaar-viewer__image"
              src={
                openImage === "profile"
                  ? "/__mockup/images/digilocker-profile-open.png"
                  : "/__mockup/images/aadhaar-card-detail.png"
              }
              alt={
                openImage === "profile"
                  ? "The image provided to open from the profile photo, shown without edits."
                  : "The Aadhaar card image provided for this visual demo, shown without edits."
              }
              width={openImage === "profile" ? "442" : "1080"}
              height={openImage === "profile" ? "918" : "1979"}
            />
          </section>
        </div>
      )}
    </main>
  );
}
