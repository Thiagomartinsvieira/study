import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Routes = () => {
  const router = useRouter();

  const SimpleNavigation = (url) => {
    router.push(url);
  }

  function navigationWithParams(url, params) {
    router.push({
      pathname: '/routes/123/params', 
      query: {
        id: 123,
        name: 'Thiago'
      }
    })
  }

  return (
    <div>
      <h1>Routes Index</h1>
      <ul>
        <Link href='/routes/123/params?name=thiago'>
          <li>Param</li>
        </Link>
        <Link href='/routes/123/search'>
          <li>Search</li>
        </Link>
        <Link href='/routes/123/Lucas'>
          <li>Lucas</li>
        </Link>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <button onClick={navigationWithParams}>Params</button>
        <button onClick={() => router.push('/routes/123/search')}>Search</button>
        <button onClick={() => SimpleNavigation('/routes/123/Tomas')}>Tomas</button>
      </div>
    </div>
  );
}

export default Routes;
