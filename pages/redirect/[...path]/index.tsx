import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const { path } = router.query;

  const redirect = useCallback(() => {
    const handleDeepLink = (path: string): void => {
      window.location.href = `checkly://${path}`;
    };

    if (isArray(path)) {
      handleDeepLink(path.join('/'));
    }

    if (isString(path)) {
      handleDeepLink(path);
    }
  }, [path]);

  useEffect(() => {
    redirect();
  }, [redirect]);

  return (
    <div>
      <h2>Redirecting to Checkly app...</h2>
      <button onClick={() => redirect()}>
        <h3>Click here if auto open app does not work</h3>
      </button>
    </div>
  );
};

export default RedirectPage;
