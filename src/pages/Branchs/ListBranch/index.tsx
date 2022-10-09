import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function ListBranch() {
  const { getAccessTokenSilently } = useAuth0();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'localhost:5000/',
        });

        const response = await fetch(`http://localhost:5000/branchs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();

        alert(responseData.message);
      } catch (error) {
        const err = error as Error;
        alert(err.message);
      }
    };
    fetchData();
  }, []);

  return <div>ListBranch</div>;
}
