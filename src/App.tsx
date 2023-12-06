import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react';
import useActiveTabStorage from './hooks/useActiveTabStorage';
import useTabStorage from './hooks/useTabStorage';
import Header from './components/header/Header';
import ScreenArea from './components/layout/ScreenArea';
import ErrorBoundary from './ErrorBoundry';
import TabHeader from './components/header/TabHeader';

function App() {
  const [tabs, setTabs] = useTabStorage();
  const [activeTab, setActiveTab] = useActiveTabStorage();
  const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);

  return (
    <ErrorBoundary>
      <Header
        tabs={tabs}
        setTabs={setTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowNewCardModal={setShowNewCardModal}
      />
      <TabHeader tabs={tabs} setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ErrorBoundary>
        <ScreenArea
          activeTab={activeTab}
          showNewCardModal={showNewCardModal}
          setShowNewCardModal={setShowNewCardModal}
        />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

export default App;
