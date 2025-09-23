import styled from '@emotion/styled';
import TodoStarter from './components/TodoStarter';

const AppWrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <TodoStarter />
    </AppWrapper>
  );
}

export default App;
