import React from 'react'
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';

import {  SidebarMobileCustomButtom } from '@/components/SidebarCustomButtom';
import { ActivesProposal, RecentActivities, StatsCards } from '@/components/cards/Dashboard';
import { activeProposals_data, recentActivities_data, stats_data } from '@/data/dashboardMockData';

const Dashboard = () => {

  return (
    <div className='w-full space-y-2'>
      <div className='w-full flex justify-between items-center '>
        <div>
          <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
          <span>Bem-vindo de volta! Aqui está um resumo dos seus projetos.</span>
        </div>
        <SidebarMobileCustomButtom />

        <div className='hidden lg:flex flex-wrap gap-4 items-center'>
          <Button  className="flex items-center bg-blue-500 hover:bg-blue-400">
            <Plus/>
            <span>Novo Cliente</span>
          </Button>
          <Button variant={"outline"} className="flex items-center">
            <FileText className="mr-2" />
            <span>Nova Proposta</span>
          </Button>
        </div>
      </div>

      <>
        <StatsCards stats={stats_data}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          <RecentActivities recentActivities={recentActivities_data}/>
          <ActivesProposal activeProposals={activeProposals_data} />
        </div>
      </>
    </div>
  )
}

export default Dashboard;