import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Section } from 'components/Section/Section';
import { Suspense } from 'react';
import Preloader from './Preloader/Preloader';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Suspense fallback={<Preloader />}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};

export default Layout;
