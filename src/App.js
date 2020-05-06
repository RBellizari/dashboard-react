import React from 'react';
import { Container, Header, Menu, Content, Filter, Box, Boxs, BoxTitle, Title, Row, Column, Card, Label, Line, RowLine } from './styles';
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
            <Card background="#20a8d8" height="150px">  
            <Line>
            <Label size="16px" height="40px">
              Operações Ativas
            </Label>
            <Label size="16px" height="30px" color="#20a8d8">
            Operações Ativas
            </Label>
            </Line>
            <Line>
            <Label size="25px" height="32px">
              35
            </Label>
            <Label size="23px" height="32px">
              R$ 66.575.941,00
            </Label>
            </Line>
            <Line>
            <Label size="13px" height="50px">
              Operações
            </Label>
            <Label size="13px" height="50px">
              Saldo Atual
            </Label>
            </Line>
            <Line>
            <Label size="20px" height="50px">
              + 2%
            </Label>
            <Label size="20px" height="50px">
              + 5%
            </Label>
            </Line>

           </Card>
            <Card background="#00c49f" height="150px">
            <Line>
            <Label size="16px" height="40px">
              Operações Ativas
            </Label>
            <Label size="16px" height="30px" color="#00c49f">
            Operações Ativas
            </Label>
            </Line>
            <Line>
            <Label size="25px" height="32px">
              35
            </Label>
            <Label size="23px" height="32px">
              R$ 66.575.941,00
            </Label>
            </Line>
            <Line>
            <Label size="13px" height="50px">
              Operações
            </Label>
            <Label size="13px" height="50px">
              Saldo Atual
            </Label>
            </Line>
            <Line>
            <Label size="20px" height="50px">
              + 2%
            </Label>
            <Label size="20px" height="50px">
              + 5%
            </Label>
            </Line>
            </Card>
            <Card background="#ffc107" height="150px">
            <Line>
            <Label size="16px" height="40px">
              Operações Ativas
            </Label>
            <Label size="16px" height="30px" color="#ffc107">
            Operações Ativas
            </Label>
            </Line>
            <Line>
            <Label size="25px" height="32px">
              35
            </Label>
            <Label size="23px" height="32px">
              R$ 66.575.941,00
            </Label>
            </Line>
            <Line>
            <Label size="13px" height="50px">
              Operações
            </Label>
            <Label size="13px" height="50px">
              Saldo Atual
            </Label>
            </Line>
            <Line>
            <Label size="20px" height="50px">
              + 2%
            </Label>
            <Label size="20px" height="50px">
              + 5%
            </Label>
            </Line>
            </Card>
            <Card background="#f86c6b" height="150px">
            <Line>
            <Label size="16px" height="40px">
              Operações Ativas
            </Label>
            <Label size="16px" height="30px" color="#f86c6b">
            Operações Ativas
            </Label>
            </Line>
            <Line>
            <Label size="25px" height="32px">
              35
            </Label>
            <Label size="23px" height="32px">
              R$ 66.575.941,00
            </Label>
            </Line>
            <Line>
            <Label size="13px" height="50px">
              Operações
            </Label>
            <Label size="13px" height="50px">
              Saldo Atual
            </Label>
            </Line>
            <Line>
            <Label size="20px" height="50px">
              + 2%
            </Label>
            <Label size="20px" height="50px">
              + 5%
            </Label>
            </Line>
            </Card>
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
