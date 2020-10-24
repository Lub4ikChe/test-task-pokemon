import React from 'react';
import { Header, MainContent, FilterList } from './components';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <FilterList />
      <MainContent />
    </>
  );
}

export default App;
