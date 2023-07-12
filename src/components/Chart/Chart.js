import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //   console.log("Datapoints in Chart.js: " + dataPointValues);
  const totalMaximum = Math.max(...dataPointValues); //use spread operator to pull out all the array elements and add them as standalone arguments to this max method
  //   console.log("TotalMaximum in Chart.js: " + totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
