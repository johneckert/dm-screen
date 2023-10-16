import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import useActiveTabStorage from './hooks/useActiveTabStorage';
import useTabStorage from './hooks/useTabStorage';
import Header from './components/header/Header';
import ScreenArea from './components/layout/ScreenArea';
import ErrorBoundary from './ErrorBoundry';

function App() {
  const [tabs, setTabs] = useTabStorage();
  const [activeTab, setActiveTab] = useActiveTabStorage();
  return (
    <ErrorBoundary>
      <Header tabs={tabs} setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScreenArea activeTab={activeTab} />
    </ErrorBoundary>
  );
}

export default App;
