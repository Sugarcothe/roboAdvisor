// src/PolarAreaChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PolarAreaChart = () => {
  const chartRef = useRef(null); // Initialize with null

  useEffect(() => {
    const randomData = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 100)
    );

    const data = {
      labels: [
        "Label 1",
        "Label 2",
        "Label 3",
        "Label 4",
        "Label 5",
        "Label 6",
      ],
      datasets: [
        {
          data: randomData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        r: {
          beginAtZero: true,
        },
      },
    };

    // Ensure the chartRef has a canvas element before attempting to destroy
    if (chartRef.current) {
      // Destroy existing chart instance
      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
    }

    // Create a new chart instance
    const ctx = chartRef.current.getContext("2d");
     ctx.canvas.style.backgroundColor = "rgba(72, 29, 1, 0.2)";
    ctx.canvas.style.borderRadius = "5px";
    ctx.canvas.style.height = "10vh";
    new Chart(ctx, {
      type: "polarArea",
      data,
      options,
    });
  }, []); // Ensure dependencies array is empty if you only want this to run once

  return (
    <div>
      <canvas
        ref={chartRef}
        width="400"
        height="300"
      ></canvas>
    </div>
  );
};

export default PolarAreaChart;
