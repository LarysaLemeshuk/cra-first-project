import { useState, useEffect } from 'react';

const useData = (loadData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    loadData()
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useData;

/*

1. Хук - JS функція (не клас!)
2. Імʼя хуку має починатися з "use"
3. У хуках ми можемо використовувати інші хуки.

*/
