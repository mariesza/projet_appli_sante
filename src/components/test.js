import React, { useEffect, useState } from 'react';

// function MyComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://fake-health-data-api.shrp.dev/');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <div>
//       {data ? (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default MyComponent;

const axios = require('axios').default;

async function MyComponent() {
    try {
      const response = await axios.get('/people/0b3a6122-7b14-4a01-9bea-e6e185dace07/physiological-data');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  export default MyComponent;