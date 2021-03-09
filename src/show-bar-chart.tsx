import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
// @ts-ignore
import { _adapters } from 'chart.js';

console.log(_adapters);

export interface Entry {
  timestamp: string;
  ip: string;
  typeOfAlert: 'PortScan' | 'Login';
  message: string;
}

export type ChartEntry = Record<string, number>;

export function ShowBarChart(props: { chart1: Record<string, number> }) {
  console.log(Object.keys(props.chart1));
  Object.entries(props.chart1).map(([key, el]) =>
    el ? console.log(key, el) : 2 + 2,
  );

  return (
    <Bar
      data={{
        labels: Object.keys(props.chart1),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(props.chart1),
          },
        ],
      }}
      width={100}
      height={250}
      options={{ maintainAspectRatio: true }}
    />
  );
}
