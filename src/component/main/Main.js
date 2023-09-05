import { useState, useCallback, useEffect } from 'react';

//react-router-dom
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

//Components
import Home from './Home/Home';
import Jobs from './Jobs/Jobs';

//Polaris
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
  const navigate = useNavigate()
  const location = useLocation()

  const token = localStorage.getItem("token")

  useEffect(() => {
    if (!token) { navigate("/login") }
  }, [])
  
  const userEmail = localStorage.getItem("user");
    const userSplit = userEmail ? userEmail.split("@") : null;
    const userName = userEmail ? userSplit[0] : null;
    const userInitials = userEmail ? userEmail.slice(0, 1).toUpperCase() : null;

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );


  const logouteHandler = () => {
    localStorage.clear("token", "user")
    navigate("/login", { replace: true })
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Logout', icon: ArrowLeftMinor, onAction: logouteHandler }],
        },
      ]}
      name={userName}
      detail={userEmail}
      initials={userInitials}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
      activatorContent={logouteHandler}
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
            <Route path='/home' element={<Home />} />
            <Route path='/jobs/*' element={<Jobs />} />
          </Routes>
        </Page>
      </Layout>
    </Frame>

  );
};