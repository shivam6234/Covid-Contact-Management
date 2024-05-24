// Covid Death graph

import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { useQuery} from '@tanstack/react-query';

interface CovidData {
  date: string;
  cases: number;
  deaths: number;
  recovered: number;
}


const CovidDeathGraph: React.FC = () => {

  const { data, isLoading, error } = useQuery<CovidData[], Error>({
    queryKey: ['covidData'],
    queryFn: async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      return formatData(jsonData);
    }
  });

  const formatData = (data: any): CovidData[] => {
    const formattedData: CovidData[] = [];
    for (const date in data.cases) {
      formattedData.push({
        date,
        cases: data.cases[date],
        deaths: data.deaths[date],
        recovered: data.recovered[date],
      });
    }
    return formattedData;
  };

  const getOption = (): EChartsOption => {
    const yAxisLabelFormatter = (value: number): string => {
      if (value >= 1000000) {
        return `${value / 1000000}M`;
      }
      return value.toString();
    };

    

    return {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Deaths'],
      },
      xAxis: {
        type: 'category',
        data: data ? data.map((item) => item.date) : [],
      },
      yAxis: {
        type: 'value',
        min: 0,
        axisLabel: {
          show: true,
          formatter:  yAxisLabelFormatter,
        },
      },
      series: [
        {
          name: 'Deaths',
          type: 'line',
          data: data ? data.map((item) => item.deaths) : [],
          smooth: true,
          lineStyle: {
            color: 'red',
          },
        },
      ],
    };
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    {/* Large Screen */}
    <div className="hidden md:hidden lg:flex  bg-yellow-100 flex-col mt-10" style={{ height: '65vh', width: '100%' }}>
        <h1 className="mb-5 text-center text-3xl underline font-bold">Covid-19 Death Data</h1>
        <div className="mx-auto" style={{ height: '70%', width: '80%' }}>
          <ReactECharts className="mx-auto bg-white" option={getOption()} style={{ height: '100%', width: '75%' }} />
        </div>
      </div>
      {/* Medium Screen */}
      <div className="hidden lg:hidden md:flex bg-yellow-100 flex-col mt-10" style={{ height: '60vh', width: '100%' }}>
        <h1 className="mb-5 text-center text-3xl underline font-bold">Covid-19 Death Data</h1>
        <div className="mx-auto px-5" style={{ height: '70%', width: '100%' }}>
          <ReactECharts className="mx-auto ps-5 bg-white" option={getOption()} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex md:hidden lg:hidden  bg-yellow-100 flex-col " style={{ height: '50vh', width: '100%' }}>
        <h1 className="mb-5 text-center text-xl underline font-bold">Covid-19 Death Data</h1>
        <div className="px-3 flex" style={{ height: '70%', width: '100%' }}>
          <ReactECharts className="bg-white" option={getOption()} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default CovidDeathGraph;