import { GwentProvider } from './context/GwentContext.jsx';
import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { CardList } from './components/CardList/CardList';
import { CardDetails } from './components/CardDetails/CardDetails';

export const App = () => {
  return (
    <GwentProvider>
      <Layout>
        <Header />
        <SearchInput />
        <CardDetails />
        <CardList />
      </Layout>
    </GwentProvider>
  );
};