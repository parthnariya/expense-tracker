import { ApexOptions } from "apexcharts";

/*  const labelColor = "#6b7280";
  const borderColor = "#e5e7eb";
  const baseColor = "#4845d2";
  const baseLightColor = "#C3C2FF"; */
export function getChartOptions(keys: string[], data: number[]): ApexOptions {
  const labelColor = "#6b7280";
  const borderColor = "#e5e7eb";
  const baseColor = "#4845d2";
  const lightColor = "#C3C2FF";

  return {
    series: [
      {
        name: "Spent",
        data: data,
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: keys,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      crosshairs: {
        position: "front",
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          const result = val ? `$${val}` : "0";
          return result;
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}
