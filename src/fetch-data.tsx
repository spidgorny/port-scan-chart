import React, { PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';

export function FetchData(props: PropsWithChildren<{}>): React.FC {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('/data.json');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
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
