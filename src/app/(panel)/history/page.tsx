import { HistoryFilter, HistoryTimeline, NoActivityFound } from '@/components/cards/History'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-2'>
      <Header 
        title="Histórico" 
        description="Timeline completo das suas atividades"
      />
      <HistoryFilter />
      <HistoryTimeline />
      <NoActivityFound />
    </div>
  )
}

export default page