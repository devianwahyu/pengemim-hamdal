import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [type, setType] = useState("10-Guy");
  const [topText, setTopText] = useState("Pangeran");
  const [bottomText, setBottomText] = useState("Meme Indonesia")

  return (
    <>
      <Header>mokan.js</Header>
      <Introduction>
        <Title>Pengemim Hamdal</Title>
        <SubTitle>Meme generator, Free, No sign-up</SubTitle>
      </Introduction>
      <Container>
        <Flex>
          <BoxForm>
            <FormTitle>Meme Settings</FormTitle>
            <Form>
              <FormLabel>Type</FormLabel>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="10-Guy">10 Guy</option>
                <option value="Advice-Doge">Advice Doge</option>
                <option value="1990s-First-World-Problems">1990s First World Problems</option>
              </select>
              <FormLabel>Top Text</FormLabel>
              <input type="text" name="top-text" onChange={(e) => setTopText(e.target.value)} />
              <FormLabel>Bottom Text</FormLabel>
              <input type="text" name="bottom-text" onChange={(e) => setBottomText(e.target.value)} />
            </Form>
          </BoxForm>
          <BoxForm>
            <img src={'http://apimeme.com/meme?meme=' + type + '&top=' + topText + '&bottom=' + bottomText} alt="meme" height="400" />
          </BoxForm>
        </Flex>
      </Container>
    </>
  );
};

const Header = styled.div`
  background-color: black;
  padding: 30px 120px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const Container = styled.div`
  padding-left: 120px;
  padding-right: 120px;
`;

const Introduction = styled.div`
  text-align: center;
  color: black;
`;

const Title = styled.p`
  margin-top: 40px;
  font-size: 3rem;
  font-weight: bold;
`;

const SubTitle = styled.p`
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: normal;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BoxForm = styled.div`
  flex: 1;
  border: 3px solid black;
  border-radius: 15px;
  padding: 50px;
  margin-top: 40px;
  margin-inline: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.p`
  margin-top: 8px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: normal;
`;

const FormLabel = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  font-weight: normal;
`;

export default App;
