import { useEffect, useState } from 'react'

import axios from 'axios';


export const ApiFetch = () => {
  const BASE_URL = 'https://dummyapi.io/data/api';
  const APP_ID = '6094473bb9d4713e07396847';
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
      setLoading(true);
      axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
          .then(({ data }) => setData(data))
          .catch(console.error)
          .finally(() => setLoading(false));
  }, []);

  return ({ loading, data });
};


