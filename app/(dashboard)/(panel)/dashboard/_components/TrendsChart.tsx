"use client";
import { getChartOptions } from "@/lib/getSpendsChartOption";
import { BudgetWithExpense } from "@/lib/type";
import ApexCharts from "apexcharts";
import { ElementRef, useCallback, useEffect, useRef } from "react";

const data = [
  {
    january: 2000,
    february: 1000,
    march: 3000,
  },
];

type PropsType = {
  data: BudgetWithExpense[];
};

export const TrendsChart = ({ data }: PropsType) => {
  
  // console.log(data);
  const chartRef = useRef<ElementRef<"div">>(null);

  const refreshMode = useCallback(() => {
    if (!chartRef.current || !data) {
      return;
    }

    const keyArr = ["january", "february", "march"];
    const dataArr = [2000, 300, 1000];
    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(
        keyArr,
        dataArr.length > 6 ? dataArr.slice(0, 6) : dataArr
      )
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
      <h2 className="font-bold text-xl">Monthly Expense</h2>

      <div
        ref={chartRef}
        id="kt_charts_widget_3_chart"
        style={{ height: "350px" }}
      ></div>
    </div>
  );
};
