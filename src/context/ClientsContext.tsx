'use client'

import React, { createContext, useState, useContext } from 'react';
import { ClientsType } from '@/types';

const initialClients = [
  {
    id: 1,
    name: "Tech Solutions Ltd",
    email: "contact@techsolutions.com",
    phone: "(11) 99999-9999",
    project: "E-commerce Platform",
    status: "active",
    totalValue: "R$ 15,000",
    contactDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Innovative Startup",
    email: "hello@startup.com",
    phone: "(11) 88888-8888",
    project: "Landing Page",
    status: "negotiation",
    totalValue: "R$ 3,500",
    contactDate: "2024-01-10"
  },
  {
    id: 3,
    name: "E-commerce Plus",
    email: "sales@ecommerceplus.com",
    phone: "(11) 77777-7777",
    project: "Management System",
    status: "completed",
    totalValue: "R$ 22,000",
    contactDate: "2023-12-20"
  },
  {
    id: 4,
    name: "Agency Creative",
    email: "projects@agency.com",
    phone: "(11) 66666-6666",
    project: "Mobile App",
    status: "lost",
    totalValue: "R$ 18,000",
    contactDate: "2024-01-05"
  }
];

const ClientsContext = createContext<ClientsType[] | any>({
    id: 1,
    name: "Tech Solutions Ltd",
    email: "contact@techsolutions.com",
    phone: "(11) 99999-9999",
    project: "E-commerce Platform",
    status: "active",
    totalValue: "R$ 15,000",
    contactDate: new Date().toLocaleDateString('PT-BR'), 

});

export const ClientsProvider = ({ children } : { children: React.ReactNode }) => {

  const [clients, setClients] = useState<ClientsType[] | any >(initialClients);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addClient = (newClient: ClientsType) => {
    setClients((prev: ClientsType[]) => [...prev, newClient]);
  };

  const updateClient = (id: number | string, updatedData: ClientsType) => {
    setClients((prev: ClientsType[]) =>
      prev.map(client =>
        client.id === id ? { ...client, ...updatedData } : client
      )
    );
  };

  const removeClient = (id: number | string) => {
    setClients((prev: ClientsType[]) => prev.filter(client => client.id!== id));
  };

  const filteredClients = clients.filter((client: ClientsType | undefined) => {
      const matchesSearch = client?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client?.email.toLowerCase().includes(searchTerm.toLowerCase());
  
      return matchesSearch
  });

  return (
    <ClientsContext.Provider
      value={{ 
        clients, addClient, updateClient, removeClient, filterStatus, 
        setFilterStatus,  searchTerm, setSearchTerm, filteredClients 
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => useContext(ClientsContext);
