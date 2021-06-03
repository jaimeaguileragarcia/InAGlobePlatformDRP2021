import { useState, useEffect } from 'react';

const useDelete = (url) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        })
        .catch(err => {
            // auto catches network / connection error
            setError(err.message);
        })
  }, [url])

  return { error };
}
 
export default useDelete;