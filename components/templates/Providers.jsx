'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { VapesProvider } from '@contexts/VapesContext'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}graphql`,
  cache: new InMemoryCache({ addTypename: false }),
})

const Providers = ({ children }) => (
  <ApolloProvider client={client}>
    <PrimeReactProvider value={{ unstyled: false }}>
      <VapesProvider>{children}</VapesProvider>
    </PrimeReactProvider>
  </ApolloProvider>
)

export default Providers
