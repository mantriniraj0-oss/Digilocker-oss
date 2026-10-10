import "./_group.css";

export function DigiLockerDashboard() {
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
      </figure>
    </main>
  );
}
