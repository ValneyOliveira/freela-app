'use client'

import { ClientsProvider } from "./ClientsContext"
import { HistoryProvider } from "./HistoryContext"
import { ProposalProvider } from "./ProposalContext"

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <ClientsProvider>
        <ProposalProvider>
          <HistoryProvider>
            {children}
          </HistoryProvider>
        </ProposalProvider>
    </ClientsProvider>
  )
}

export default AppWrapper;