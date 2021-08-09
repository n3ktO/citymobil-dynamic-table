import styled from 'styled-components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  margin-bottom: 48px;
`;

function App() {
  return (
    <AppStyle>
      <Header />
      <Content>
        <Sidebar />
        <Main />
      </Content>
      <Footer />
    </AppStyle>
  );
}

export default App;
