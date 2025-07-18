'use client'

import { ClientsProvider } from "./ClientsContext"
import { ProposalProvider } from "./ProposalContext"

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <ClientsProvider>
        <ProposalProvider>
            {children}
        </ProposalProvider>
    </ClientsProvider>
  )
}

export default AppWrapper;