import { DateTime } from 'luxon';
import React from 'react';
import type { ChartEntry, Entry } from './show-bar-chart';
import { ShowBarChart } from './show-bar-chart';
import VerticalBar from './vertical-bar';
import { ReactChartsExample } from './react-charts-example';

export function RenderData(props: { data: Entry[] }) {
  const minTime = props.data.reduce((min: Entry, entry: Entry) => {
    return min.timestamp > entry.timestamp ? min : entry;
  }, props.data[0]);

  const maxTime = props.data.reduce((min: Entry, entry: Entry) => {
    return min.timestamp < entry.timestamp ? min : entry;
  }, props.data[0]);

  const chart1: ChartEntry = {};
  let format = 'dd MMMM yyyy HH:mm';
  let sMinTime = minTime.timestamp.split(',')[1].trim();
  let sMaxTime = maxTime.timestamp.split(',')[1].trim();
  const start = DateTime.fromFormat(sMinTime, format);
  const end = DateTime.fromFormat(sMaxTime, format);
  console.log(start, end);

  // make empty time slots
  let current = start;
  while (current < end) {
    if (!(current.toISO() in chart1)) {
      chart1[current.toISO()] = 0;
    }
    current = current.plus({ hours: 1 });
  }

  // fill time slots with data
  for (const entry of props.data) {
    let sTime = entry.timestamp.split(',')[1].trim();
    let time = DateTime.fromFormat(sTime, format);
    time = time.set({ minute: 0, second: 0 });
    // console.log(time.toISO());
    chart1[time.toISO()]++;
  }

  return (
    <div>
      <div>{minTime.timestamp}</div>
      <div>{maxTime.timestamp}</div>
      <div>{Object.keys(chart1).length}</div>
      {/*<ShowBarChart chart1={chart1} />*/}
      {/*<VerticalBar />*/}
      <ReactChartsExample />
    </div>
  );
}
