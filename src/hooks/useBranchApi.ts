import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { BranchsApi, Configuration } from '../api';
const useBranchsApi = (): [Promise<BranchsApi>] => {
  const { getAccessTokenSilently } = useAuth0();

  const branchsApi = useMemo(
    async () =>
      new BranchsApi(
        new Configuration({
          baseOptions: {
            headers: {
              Authorization: `Bearer ${await getAccessTokenSilently()}`,
            },
          },
        }),
      ),
    [],
  );
  return [branchsApi];
};
export default useBranchsApi;
