import React, { PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';
import * as moment from 'moment';

export interface Entry {
  timestamp: string;
  ip: string;
  typeOfAlert: 'PortScan' | 'Login';
  message: string;
}

type ChartEntry = Record<Date, number>;

export function RenderData(props: { data: Entry[] }): React.FC {
  const minTime = props.data.reduce((min: Entry, entry: Entry) => {
    return min.timestamp > entry.timestamp ? min : entry;
  }, props.data[0]);

  const maxTime = props.data.reduce((min: Entry, entry: Entry) => {
    return min.timestamp < entry.timestamp ? min : entry;
  }, props.data[0]);

  const chart1: ChartEntry = {};
  const start = moment(minTime.timestamp);
  const end = moment(maxTime.timestamp);

  while (start.lessThan(end)) {
    const threeMinuteEnd = moment(start).add(3, 'minutes');
    chart1[start.format('YYYY-MM-DD hh:ii')] = 0;
  }

  return (
    <div>
      <div>{minTime.timestamp}</div>
      <div>{maxTime.timestamp}</div>
      <div>{chart1.length}</div>
    </div>
  );
}
function moment(timestamp: any) {
  throw new Error('Function not implemented.');
}
