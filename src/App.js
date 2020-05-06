import React from 'react';
import { Container, Header, Menu, Content, Filter, Box, Boxs, BoxTitle, Title, Row, Column } from './styles';
import GlobalStyle from './GlobalStyle';
import SimplePieChart from './charts/ChartAtivo';
import Multuario from './charts/Multuario';
import SaldoAtual from './charts/SaldoAtual';
import Produtos from './charts/Produtos';
import Enquadramento from './charts/Enquadramento';
import EquadramentoPie from './charts/EquadramentoPie';
import Prazo from './charts/Prazo';
import PrazoPie from './charts/PrazoPie';



function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>

      </Header>
      <Container>


        <Menu></Menu>

        <Content>
          <BoxTitle>
            <Title color="#20a8d8"> 
              Operacional 
            </Title>
            <Title>
              / Dashboard
            </Title>
          </BoxTitle>
          <Boxs>
            <Box background="#20a8d8" height="160px">Graph1</Box>
            <Box background="#00c49f" height="160px">Graph2</Box>
            <Box background="#ffc107" height="160px">Graph3</Box>
            <Box background="#f86c6b" height="160px">Graph3</Box>
          </Boxs>
          <Boxs>
            <Box background="#282c34" height="300px">
            <SimplePieChart />
            </Box>
            <Box background="#282c34" height="300px">
            <Multuario />
            </Box>
            <Box background="#282c34" height="300px"> 
            <SaldoAtual />
            </Box>
           
          </Boxs>
          <Boxs>

          <Box background="#282c34" height="300px"> 
            <Column>
            <Row>
            <EquadramentoPie />
            </Row>
            <Row>
            <Enquadramento />
            </Row>
            </Column>
            </Box>

          <Box background="#282c34" height="300px"> 
            <Produtos />
            </Box>

          </Boxs>
          <Boxs>
            <Box background="#282c34" height="300px"><Prazo /></Box>
            <Box background="#282c34" height="300px"><PrazoPie /></Box>
          </Boxs>
          <Boxs>
            <Box>Graph1</Box>
            <Box>Graph2</Box>
          </Boxs>
        </Content>

        <Filter></Filter>
      </Container>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
