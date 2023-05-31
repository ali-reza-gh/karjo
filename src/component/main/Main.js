import { useState, useCallback, } from 'react';

//react-router-dom
import { Route, Routes, useLocation} from "react-router-dom";
//Components
import Home from './Home/Home';
import Jobs from './Jobs/Jobs';



import {
  Frame,
  Navigation,
  Page,
  TopBar,
  Layout
} from '@shopify/polaris';

import {
  ArrowLeftMinor,
  HomeMajor,
  JobsMajor
} from '@shopify/polaris-icons';


export default function Main() {
  const location = useLocation()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Logout', icon: ArrowLeftMinor }],
        },
      ]}
      name="Alireza"
      initials="A"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );
  const topBarMarkup = (
    <TopBar
      userMenu={userMenuMarkup}
    />
  );
  const navbar = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: '/home',
            label: 'Home',
            icon: HomeMajor,
          },
          {
            url: '/jobs',
            label: 'Jobs',
            icon: JobsMajor,
          }
        ]}
      />
    </Navigation>
  )
  return (
    <Frame topBar={topBarMarkup} navigation={navbar}>
      <Layout>
        <Page fullWidth divider>
        <Routes >
            <Route path='/home' element={<Home />}/>
            <Route path='/jobs/*' element={<Jobs />}/>
        </Routes>
        </Page>
        </Layout>
      </Frame>
  );
};