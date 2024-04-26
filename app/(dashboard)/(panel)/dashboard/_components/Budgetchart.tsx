"use client";

import { getCSS, getChartOptions } from "@/lib/getChartOptions";
import { ElementRef, useCallback, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const data = [200, 100, 300, 400];
const amount = [300, 110, 400, 450];
const key = ["budget1", "budget2", "budget3", "budget4"];

export function BudgetChart() {
  const chartRef = useRef<ElementRef<"div">>(null);

  const refreshMode = useCallback(() => {
    if (!chartRef.current || !data) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, "height"));
    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(height, amount, data, key)
    );
    if (chart) {
      chart.render();
    }

    return chart;
  }, []);

  useEffect(() => {
    let chart: ApexCharts | undefined = undefined;
    if (data) {
      chart = refreshMode();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, refreshMode]);

  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-xl">Activity</h2>
      <div
        ref={chartRef}
        // id="kt_charts_widget_3_chart"
        style={{ height: "350px" }}
      ></div>
    </div>
  );
}
