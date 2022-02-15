import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAddress = (address) => {
  const [map, setMap] = useState({ data: [], error: null, loading: true });
  // Location IQ access token
  const API_KEY = 'pk.471e1f5eb75d86885a7628ef16e18bdb';

  useEffect(() => {
    const getLatlng = async () => {
      const { data } = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${address}&format=json`
      );
      const { lat, lon } = data[0];

      setMap({ data: [lat, lon], error: null, loading: false });
    };

    getLatlng();
  }, [address]);

  return map;
};
