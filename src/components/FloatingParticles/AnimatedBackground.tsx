import "./AnimatedBackground.css";

const particles = [
  { className: "particle particle-1" },
  { className: "particle particle-2" },
  { className: "particle particle-3" },
  { className: "particle particle-4" },
  { className: "particle particle-5" },
  { className: "particle particle-6" },
  { className: "particle particle-7" },
  { className: "particle particle-8" },
];

export default function AnimatedBackground() {
  return (
    <div
      className="animated-background pointer-events-none"
      aria-hidden="true"
    >
      {/* Large soft orbital curves */}
<svg
  className="background-orbits"
  viewBox="0 0 1200 1200"
  preserveAspectRatio="none"
>
  <ellipse
    className="orbit orbit-yellow"
    cx="600"
    cy="600"
    rx="500"
    ry="270"
  />

  <ellipse
    className="orbit orbit-tertiary"
    cx="600"
    cy="600"
    rx="200"
    ry="600"
  />

  <ellipse
    className="orbit orbit-green"

    cx="600"
    cy="600"
    rx="550"
    ry="155"
  />
</svg>

      {/* Decorative code symbols */}
      <div className="code-symbol code-symbol-left">
        <span>&lt;</span>
        <span>/</span>
        <span>&gt;</span>
      </div>

      <div className="code-symbol code-symbol-right">
        <span>{"{"}</span>
        <span>{"}"}</span>
      </div>

      <div className="code-symbol code-symbol-bottom">
        <span>&lt;</span>
        <span>/</span>
        <span>&gt;</span>
      </div>

      {/* Floating geometric shapes */}
      <svg
        className="background-shapes"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <rect
          className="shape shape-square shape-square-1"
          x="115"
          y="150"
          width="18"
          height="18"
          rx="4"
        />

        <rect
          className="shape shape-square shape-square-2"
          x="1040"
          y="155"
          width="14"
          height="14"
          rx="3"
        />

        <rect
          className="shape shape-square shape-square-3"
          x="970"
          y="610"
          width="20"
          height="20"
          rx="4"
        />

       
      </svg>


      {/* Tiny floating particles */}
      <div className="particles">
        {particles.map(({ className }) => (
          <span
            key={className}
            className={className}
          />
        ))}
      </div>

      {/* Small connected-node decoration */}
      <svg
        className="background-network"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
      <path
  className="network-line"
  d="
    M70 390
    C150 320 180 300 260 310
    C500 350 700 300 930 350
    C1000 330 1060 350 1130 300
  "
/>

        <circle
          className="network-node network-node-1"
          cx="70"
          cy="390"
          r="5"
        />

        <circle
          className="network-node network-node-2"
          cx="260"
          cy="310"
          r="5"
        />

        <circle
          className="network-node network-node-3"
          cx="930"
          cy="350"
          r="5"
        />

        <circle
          className="network-node network-node-4"
          cx="1130"
          cy="300"
          r="5"
        />
      </svg>
    </div>
  );
}