'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { VapesProvider } from '@contexts/VapesContext'
import { PrimeReactProvider } from 'primereact/api'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}graphql`,
  cache: new InMemoryCache({ addTypename: false }),
})

const Providers = ({ children }) => (
  <ApolloProvider client={client}>
    <PrimeReactProvider value={{ unstyled: false }}>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        }}
      >
        <VapesProvider>{children}</VapesProvider>
      </PayPalScriptProvider>
    </PrimeReactProvider>
  </ApolloProvider>
)

export default Providers
