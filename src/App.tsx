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
  const [showNewCardDialog, setShowNewCardDialog] = useState<boolean>(false);

  return (
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
    </ErrorBoundary>
  );
}

export default App;
