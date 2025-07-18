import React from 'react'

import { 
  ProposalBoxFilter, ProposalFormDialog, 
  ShowFilteredProposal, ShowProposalList 
} from '@/components/cards/ProposalCard'
import Header from '@/components/Header'

const page = () => {
  return (
    <div className='space-y-2'>
      <Header title='Propostas' description='Gerencie todas as suas propostas e negociações'>
        <ProposalFormDialog/>
      </Header>

      <div className='w-full my-7 mb-5'>
        <ProposalBoxFilter  /> 
      </div>
    
      <ShowProposalList />
      <ShowFilteredProposal />
  </div>
  )
}

export default page