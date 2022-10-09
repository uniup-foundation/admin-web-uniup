import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { BASE_URL } from '../../../config';

export default function ListBranch() {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();

        const response = await fetch(`${BASE_URL}/branchs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        const err = error as Error;
        alert(err.message);
      }
    };
    fetchData();
  }, [getAccessTokenSilently]);
  return (
    <div>
      <h2>ListBranch</h2>
      <div>
        {data?.map((elem: any) => (
          <h6 key={elem.id}>{elem.name}</h6>
        ))}
      </div>
    </div>
  );
}
