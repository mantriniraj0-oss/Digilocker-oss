import { useEffect, useState } from "react";

import "./_group.css";
import "./DigiLockerDashboard.css";

function ReferenceProfilePhoto() {
  return (
    <svg
      className="aadhaar-viewer__profile-crop"
      viewBox="905 241 150 150"
      aria-hidden="true"
      focusable="false"
    >
      <image
        href="/__mockup/images/digilocker-reference.jpg"
        x="0"
        y="0"
        width="1080"
        height="4474"
        preserveAspectRatio="none"
      />
    </svg>
  );
}

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
          className={`aadhaar-viewer aadhaar-viewer--${openImage}`}
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
            {openImage === "aadhaar" ? (
              <>
                <button
                  className="aadhaar-viewer__back"
                  type="button"
                  aria-label="Back to dashboard"
                  title="Back to dashboard"
                  autoFocus
                  onClick={() => setOpenImage(null)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 12H5m0 0 7-7m-7 7 7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button
                  className="aadhaar-viewer__profile"
                  type="button"
                  aria-label="Open profile image"
                  title="Open profile image"
                  onClick={() => setOpenImage("profile")}
                >
                  <ReferenceProfilePhoto />
                </button>
              </>
            ) : (
              <button
                className="aadhaar-viewer__close"
                type="button"
                aria-label="Close image viewer"
                autoFocus
                onClick={() => setOpenImage(null)}
              >
                ×
              </button>
            )}
            {openImage === "aadhaar" && (
              <>
                <div
                  className="aadhaar-viewer__bottom-nav"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M3 10.7 12 3l9 7.7v9.1a1.2 1.2 0 0 1-1.2 1.2h-4.9v-6.2H9.1V21H4.2A1.2 1.2 0 0 1 3 19.8z" />
                  </svg>
                  <svg viewBox="0 0 24 24">
                    <circle cx="18" cy="5" r="2.5" />
                    <circle cx="6" cy="12" r="2.5" />
                    <circle cx="18" cy="19" r="2.5" />
                    <path d="m8.3 10.8 7.4-4.4M8.3 13.2l7.4 4.4" />
                  </svg>
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="6" rx="1" />
                    <rect x="3" y="14" width="18" height="6" rx="1" />
                  </svg>
                </div>
                <div
                  className="aadhaar-viewer__gesture-bar"
                  aria-hidden="true"
                />
              </>
            )}
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
