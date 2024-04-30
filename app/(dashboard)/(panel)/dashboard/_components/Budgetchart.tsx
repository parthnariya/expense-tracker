"use client";

import { getCSS, getChartOptions } from "@/lib/getChartOptions";
import { BudgetWithExpense } from "@/lib/type";
import ApexCharts from "apexcharts";
import { ElementRef, useCallback, useEffect, useRef } from "react";

type PropsType = {
  data: BudgetWithExpense[];
};

export function BudgetChart({ data }: PropsType) {
  const chartRef = useRef<ElementRef<"div">>(null);

  const refreshMode = useCallback(() => {
    if (!chartRef.current || !data) {
      return;
    }

    const totalSpent = data.map((item) => item.totalSpent);
    const totalAmount = data.map((item) => item.amount);
    const name = data.map((item) => item.name);
    const height = parseInt(getCSS(chartRef.current, "height"));
    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(height, totalAmount, totalSpent, name)
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
