// import React, { useEffect, useState } from 'react';

// const MyFetch = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         'https://api.api-ninjas.com/v1/exercises?muscle=',
//         {
//           headers: {
//             'X-Api-Key': 'm3ldxl7CYU8tfLZ0aEIf6w==WzDHPa9kIIXDKQSk'
//           }
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Error: ' + response.status);
//       }

//       const data = await response.json();
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.error('Error', error);
//     }
//   };

//   return ( 
//   <>
  
//   </>
//   )
// };

// export default MyFetch;





// // const MyFetch = () => {
// //   useEffect(() => {
// //     const fetchCall = async () => {
// //       try {
// //         const response = await fetch('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {
// //           headers: {
// //             'X-Api-Key': 'm3ldxl7CYU8tfLZ0aEIf6w==WzDHPa9kIIXDKQSk'
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error('Error: ' + response.status);
// //         }

// //         const data = await response.json();
// //         console.log(data);
// //       } catch (error) {
// //         console.error('Error', error);
// //       }
// //     };

// //     const handleClick = () => {
// //       fetchCall();
// //     };

// //     document.getElementById('fetchCall').addEventListener('click', handleClick);

// //     return () => {
// //       document.getElementById('fetchCall').removeEventListener('click', handleClick);
// //     };
// //   }, []);

// //   return <h1 id="fetchCall">Fetch Call</h1>;
// // };

// // export default MyFetch
