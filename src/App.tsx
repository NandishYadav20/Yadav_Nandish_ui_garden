import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Label,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
  Dropdown,
  RadioButton,
  Img,
  HeroImage,
  Card,
} from './library';
import { PLACEHOLDER_IMAGE } from './shared/placeholder';

const Page = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  display: grid;
  gap: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
`;

const App: React.FC = () => (
  <Page>
    <HeroImage src={PLACEHOLDER_IMAGE} alt="Placeholder banner" title="Yadav Nandish UI Garden" />

    <Row>
      <Button text="Enabled button" />
      <Button text="Disabled button" disabled />
      <Label text="Name" htmlFor="name" />
      <Text text="Body text sample" />
    </Row>

    <Row>
      <Dropdown options={['Winnipeg', 'Toronto', 'Vancouver']} />
      <RadioButton text="Option A" name="options" />
      <RadioButton text="Option B (disabled)" name="options" disabled />
    </Row>

    <Row>
      <Img src={PLACEHOLDER_IMAGE} alt="Placeholder image" />
      <Card title="Card title" text="A short description inside a card." />
    </Row>

    <Table>
      <TableHeader columns={['Item', 'Qty']} />
      <tbody>
        <TableRow>
          <TableCell text="Apples" />
          <TableCell text="3" />
        </TableRow>
      </tbody>
      <TableFooter text="Total items: 3" />
    </Table>
  </Page>
);

export default App;
