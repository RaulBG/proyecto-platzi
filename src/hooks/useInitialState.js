import { useState } from 'react';

const useInitialState = (API) => {
  const initialState = {
    'cart': [],
    'flies': [
      {
        'id': 1,
        'type': 'national',
        'name': 'Ciudad de Mexico - Cancun',
        'cost': 2500,
        'date': '12/12/2019 20:00',
      },
      {
        'id': 2,
        'type': 'national',
        'name': 'Ciudad de Mexico - Los Cabos',
        'cost': 3500,
        'date': '12/12/2019 15:00',
      },
      {
        'id': 3,
        'type': 'international',
        'name': 'Ciudad de Mexico - Madrid, España',
        'cost': 22000,
        'date': '12/12/2019 20:00',
      },
      {
        'id': 4,
        'type': 'international',
        'name': 'Ciudad de Mexico - Buenos Aires, Argentina',
        'cost': 15000,
        'date': '12/12/2019 15:00',
      },
    ],
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

