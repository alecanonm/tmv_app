'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}graphql`,
  cache: new InMemoryCache({ addTypename: false }),
})

const Providers = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default Providers
