import React from 'react'

import { ClientFormDialog, ClientsBoxFilter, ShowFilteredClients, ShowClientsList } from '@/components/cards/ClientsCards';
import Header from '@/components/Header';

const Clients = () => {
  return (
    <div className='space-y-2'>
        <Header title='Clientes' description='Gerencie todos os seus clientes e prospects'>
          <ClientFormDialog/>
        </Header>

        <div className='w-full my-7 mb-5'>
            <ClientsBoxFilter  />
        </div>

        <ShowClientsList />
        <ShowFilteredClients />
    </div>
  )
};

export default Clients