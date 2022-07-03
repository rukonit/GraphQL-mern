import Header from "./components/Header";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Client from "./components/Client";

function App() {
  
  const client = new ApolloClient(
    {
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache
    }
  )

  return (
    <>
    <ApolloProvider client={client}>
    <Header></Header>
    <div className="container">
   <Client />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
