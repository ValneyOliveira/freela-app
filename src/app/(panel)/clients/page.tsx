// 'use client'

import React from 'react'

import { CustomerFormDialog, ClientsBoxFilter, ShowFilteredClients, ShowClientsList } from '@/components/cards/ClientsCards';

const Clients = () => {
  return (
    <div className='space-y-2'>
        <div className='w-full flex flex-col sm:flex gap-y-4 sm:flex-row sm:justify-between sm:items-center'>
            <div>
                <h1 className="text-2xl font-bold text-gray-700">Clientes</h1>
                <span>Gerencie todos os seus clientes e prospects</span>
            </div>
            <CustomerFormDialog/>
        </div>

        <div className='w-full my-7 mb-5'>
            <ClientsBoxFilter  />
        </div>

        <ShowClientsList />
        <ShowFilteredClients />
    </div>
  )
};

export default Clients