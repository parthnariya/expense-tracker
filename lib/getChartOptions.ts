import { ApexOptions } from "apexcharts";
/* const labelColor = "#6b7280";
const borderColor = "#e5e7eb";
const baseColor = "#4845d2";
const lightColor = "#C3C2FF"; */
function getChartOptions(
  height: number,
  amountArray: number[],
  totalSpentArray: number[],
  budgetsNamesArray: string[]
): ApexOptions {
  const labelColor = "#6b7280";
  const borderColor = "#e5e7eb";
  const baseColor = "#4845d2";
  const baseLightColor = "#C3C2FF";
  return {
    series: [
      {
        name: "Amount",
        data: amountArray,
        // data: [10, 15, 10, 10, 10, 10],
      },
      {
        name: "Total Spent",
        data: totalSpentArray,
        // data: [10, 15, 10, 10, 10, 10],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: budgetsNamesArray,
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
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1,
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
      intersect: false,
      shared: true,
    },
    colors: [baseColor, baseLightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
function getCSS(el: HTMLElement, styleProp: string) {
  const defaultView = (el.ownerDocument || document).defaultView;

  if (!defaultView) {
    return "";
  }

  // sanitize property name to css notation
  // (hyphen separated words eg. font-Size)
  styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();

  return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
}
export { getChartOptions, getCSS };
