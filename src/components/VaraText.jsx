import { useEffect } from 'react';
import Vara from 'vara';

function VaraText({ text, yPosition, id, delay = 0 }) {
  useEffect(() => {
    const container = document.getElementById(id);

    // Clear previous Vara instance content if any
    if (container) {
      container.innerHTML = '';
    }

    // Calculate font size based on screen width
    let fontSize = 20;

    // Split text based on <br> tags
    const lines = text.split('<br>');

    // Initialize Vara
    const vara = new Vara(
      `#${id}`,
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
      lines.map((line, index) => ({
        text: line.trim(), // Remove extra whitespace
        y: yPosition + index * 80, // Adjust vertical position for each line
        fromCurrentPosition: { y: false },
        duration: 2500,
        delay: delay, // Apply the same delay to all lines within this VaraText component
      })),
      {
        strokeWidth: 2.3,
        color: "#fff",
        fontSize: fontSize,
        textAlign: "center",
      }
    );

    // Add animation end effect
    vara.ready(function() {
      let erase = false;
      vara.animationEnd(function(i, o) {
        if (i === "no_erase") erase = false;
        if (erase) {
          o.container.style.transition = "opacity 1s 1s";
          o.container.style.opacity = 0;
        }
      });
    });

    // Clean up function
    return () => {
      // Remove event listeners or any other cleanup logic here
      // No need to destroy vara instance as it doesn't have destroy method by default
    };
  }, [text, yPosition, id, delay]); // Ensure effect runs only when text, yPosition, id, or delay changes

  return (
    <div id={id} className="z-[20]"></div>
  );
}

export default VaraText;
