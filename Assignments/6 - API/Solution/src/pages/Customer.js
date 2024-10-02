import { useEffect } from 'react';

import PageLayout from 'components/layout/PageLayout';
import UserInfo from 'components/customer/UserInfo';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'assets/stylesheets/global.css';
import 'assets/stylesheets/customer.css';

function Customer() {
  useEffect(() => { document.title = 'Customer'; }, []);

  return (
    <PageLayout>
      <div className="container pt-4">
        <UserInfo />
        <h1 className="mt-5 text-center fs-5">Work in progress...</h1>
      </div>
    </PageLayout>
  );
}

export default Customer;
