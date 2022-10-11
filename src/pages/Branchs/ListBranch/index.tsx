import { useQuery } from '@tanstack/react-query';

import useBranchsApi from '../../../hooks/useBranchApi';

export default function ListBranch() {
  const [branchsApi] = useBranchsApi();
  const { data } = useQuery(['branchs'], () =>
    branchsApi.then((branchAPI) => branchAPI.branchsControllerFindAll()),
  );
  return (
    <div>
      <h2>ListBranch</h2>
      <div>
        {data?.data.map((elem: any) => (
          <h6 key={elem.id}>{elem.name}</h6>
        ))}
      </div>
    </div>
  );
}
