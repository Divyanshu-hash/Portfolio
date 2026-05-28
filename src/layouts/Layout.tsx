import { Outlet } from 'react-router-dom';
import Header from '@components/UI/Header';
import MobileHeader from '@components/UI/MobileHeader';
import Footer from '@components/Footer';
import Cursor from '@components/UI/Cursor';
import * as config from '@config/portfolio.config';

export default function Layout() {

  return (
    <div id="home">
      <Header config={config.headerConfig} />
      <MobileHeader config={config.headerConfig} />

      <main className="max-w-[1450px] mx-auto px-6">
        <Outlet />
      </main>

      <Footer config={config.footerConfig} />
      <Cursor />
    </div>
  );
}
