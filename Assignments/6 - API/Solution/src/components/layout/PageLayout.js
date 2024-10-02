import Header from './Header';
import Footer from './Footer';

function PageLayout({ beforeMain, children }) {
  return (
    <div id="page-layout" className="min-vh-100 d-flex flex-column">
      <Header />
      {beforeMain}
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
