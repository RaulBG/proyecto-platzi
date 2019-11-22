import { useState } from 'react';

const useInitialState = (API) => {
  const initialState = {
    'nationals': [
      {
        'name': 'Ciudad de Mexico - Cancun',
        'cost': 2500,
        'date': '12/12/2019 20:00',
      },
      {
        'name': 'Ciudad de Mexico - Los Cabos',
        'cost': 3500,
        'date': '12/12/2019 15:00',
      },
    ],
    'internationals': [
      {
        'name': 'Ciudad de Mexico - Madrid, España',
        'cost': 22000,
        'date': '12/12/2019 20:00',
      },
      {
        'name': 'Ciudad de Mexico - Buenos Aires, Argentina',
        'cost': 15000,
        'date': '12/12/2019 15:00',
      },
    ],
    'cart': [],
  };

  // const [data, setData] = useState(initialState);
  const [data] = useState(initialState);
  // Traer data desde una API
  /*  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); */

  return data;
};

export default useInitialState;

