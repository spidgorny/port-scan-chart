import React, { PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';
import type { Entry } from './show-bar-chart';

export function FetchData(
  props: PropsWithChildren<{ children: (data: Entry[]) => JSX.Element }>,
) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('/data.json');
    setData(res.data);
  };

  useEffect(() => {
    fetchData().then((r) => {});
  }, []);

  if (!data || !data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{data.length}</div>
      <div>{props.children(data)}</div>
    </div>
  );
}
