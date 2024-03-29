import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import useActiveTabStorage from './hooks/useActiveTabStorage';
import useTabStorage from './hooks/useTabStorage';
import Header from './components/header/Header';
import ScreenArea from './components/layout/ScreenArea';
import ErrorBoundary from './ErrorBoundry';
import TabHeader from './components/header/TabHeader';
import WelcomeDialog from './components/dialogs/WelcomeDialog';

function App() {
  const [tabs, setTabs] = useTabStorage();
  const [activeTab, setActiveTab] = useActiveTabStorage();
  const [showNewCardDialog, setShowNewCardDialog] = useState<boolean>(false);
  const [cookies, setCookies] = useCookies(['seenWelcomeDialog']);

  const setSeenWelcomeDialog = () => {
    setCookies('seenWelcomeDialog', true, { path: '/' });
  };

  return (
    <CookiesProvider>
      <ErrorBoundary>
        <Header setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabHeader
          tabs={tabs}
          setTabs={setTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowNewCardDialog={setShowNewCardDialog}
        />
        <ErrorBoundary>
          <ScreenArea
            activeTab={activeTab}
            showNewCardDialog={showNewCardDialog}
            setShowNewCardDialog={setShowNewCardDialog}
          />
        </ErrorBoundary>
        <WelcomeDialog showWelcomeDialog={!cookies.seenWelcomeDialog} setSeenWelcomeDialog={setSeenWelcomeDialog} />
      </ErrorBoundary>
    </CookiesProvider>
  );
}

export default App;
