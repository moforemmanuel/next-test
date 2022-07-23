import axios from 'axios';
import { getSession, signIn, useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const { data, status } = useSession();

  if (status !== 'loading') {
    // console.log({ dash: dashboardData });

    (async function securePage() {
      // const session = await getSession();
      if (!data) {
        signIn();
      } else {
        // setIsLoading(false);
      }
    })();
  }

  // getSession()
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  useEffect(() => {
    // (async function securePage() {
    //   const session = await getSession();
    //   if (!session) {
    //     signIn();
    //   } else {
    //     setIsLoading(false);
    //   }
    // })();
    console.log('getting data');

    (async function fetchDashboardData() {
      const response = await axios.get('http://localhost:4000/dashboard');
      const data = response.data;
      setDashboardData(data);
      setIsLoading(false);
    })();
  }, []);

  // if (isLoading) {
  //   return <h2>Loading .useEffect..</h2>;
  // }
  if (status === 'loading') {
    return <h2>Loading ... useSession...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
}

// Dashboard.getLayout = function PageLayout(page) {
//   return (
//     <>
//       {page}
//       <Header />
//     </>
//   );
// };
