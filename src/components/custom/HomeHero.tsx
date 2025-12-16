import React from 'react';


function HomeHero() {
  return (
    <div
      className="hero hero--primary hero--showcase"
      style={{
        background: "#0d0d0d",
        color: "white",
        padding: "4rem 1rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE – TEXT CONTENT */}
        <div style={{ maxWidth: "480px", textAlign: "left" }}>
          <h1
            className="hero__title"
            style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: "1.2" }}
          >
            Welcome to the AI-Native Book!
          </h1>

          <p className="hero__subtitle" style={{ opacity: 0.8, fontSize: "1.2rem" }}>
            A premium resource for AI-Native Driven Development.
          </p>

          <p className="hero__subtitle" style={{ opacity: 0.8, marginBottom: "2rem" }}>
            By Qaimudin Khuwaja
          </p>

          <div className="hero__buttons">
            <a
              href="/docs/introduction/what-is-physical-ai"
              className="button button--secondary button--lg"
            >
              Start Reading
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – BOOK IMAGE */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0k4bC6dWJR_n-pRppHi6nEs3kec3zNFTVA&s"
            alt="Book Cover"
            style={{
              width: "260px",
              borderRadius: "12px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
