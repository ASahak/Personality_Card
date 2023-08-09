import { AppProvider } from 'providers/app';
import PersonalityCard from 'components/PersonalityCard';

function App() {
  return (
    <AppProvider>
      <PersonalityCard />
    </AppProvider>
  );
}

export default App;
