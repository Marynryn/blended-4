import { Container, Header, SearchForm, Section, Text } from 'components';
import GridList from 'components/GridList/GridList';
import { useSelector } from 'react-redux';

export const App = () => {
  const todos = useSelector(state => state.todos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <GridList />
        </Container>
      </Section>
    </>
  );
};
