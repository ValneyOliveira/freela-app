'use client'

import { ClientsProvider } from "./ClientsContext"
import { HistoryProvider } from "./HistoryContext"
import { ProposalProvider } from "./ProposalContext"
import { UserProvider } from "./UserContext"

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <ClientsProvider>
        <ProposalProvider>
          <HistoryProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </HistoryProvider>
        </ProposalProvider>
    </ClientsProvider>
  )
}

export default AppWrapper;