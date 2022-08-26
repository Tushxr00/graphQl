import BookList from "./components/BookList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AddBook from "./components/AddBook";

// Apollo Client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} >
      <div id="main">
        <h1>Ninja's reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
