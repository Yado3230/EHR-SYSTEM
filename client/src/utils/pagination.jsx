// import React from 'react';
// import { Link } from 'react-router-dom';

// const Pagination = ({ itemsCount, pageSize }) => {
//   const pagesCount = itemsCount / pageSize;
//   return (
//     <nav>
//       <ul>
//         <li className="border rounded shadow">
//           <Link to="/">1</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationExampleCompact = () => {
  return (
    <Pagination
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  );
};

export default PaginationExampleCompact;
