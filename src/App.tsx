import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/header/Header';
import ScreenArea from './components/layout/ScreenArea';
import ErrorBoundary from './ErrorBoundry';

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <ScreenArea />
      </ErrorBoundary>
    </>
  );
}

export default App;
