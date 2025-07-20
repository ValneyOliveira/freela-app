'use client'

import React, { createContext, useState, useContext } from 'react';
import { ProposalType } from '@/types';

const initialProposals: ProposalType[] = [
    {
        id: 1, 
        title: "Desenvolvimento de Site Institucional",
        client: "Tech Solutions Ltd",
        estimatedValue: "R$ 5,000",
        status: "sent",
        shippingDate: "15-05-2026",
        deadlineResponse: "2025-02-15",
        description: "Desenvolvimento de um site institucional responsivo.",
        term: "30 dias",
        createdAt: new Date("2025-4-5")
      
    },
    {
        id: 2,
        title: "Landing Page para Campanha de Marketing",
        client: "Innovative Startup",
        estimatedValue: "R$ 3,500",
        status: "negotiation",
        shippingDate: "2025-01-10",
        deadlineResponse: ("2024-02-10"),
        description: "Criação de uma landing page otimizada para conversão.",
        term: "20 dias",
        createdAt: new Date("2025-2-5")
    },
    {
        id: 3,
        title: "Sistema de Gestão para E-commerce",
        client: "E-commerce Plus",
        estimatedValue: "R$ 22,000",
        status: "accepted",
        shippingDate: "2023-12-20",
        deadlineResponse: "2025-01-20",
        description: "Desenvolvimento de um sistema completo de gestão para e-commerce.",
        term: "60 dias",
        createdAt: new Date("2025-7-6")
    }, {
        id: 4,
        title: "Aplicativo Móvel para Agência Criativa",
        client: "Agency Creative",
        estimatedValue: "R$ 18,000",
        status: "rejected",
        shippingDate: "2025-01-05",
        deadlineResponse: "2025-02-05",
        description: "Criação de um aplicativo móvel para gerenciamento de projetos.",
        term: "45 dias",
        createdAt: new Date("2025-4-5")
    }
]

type ProposalContextType = {
  proposals: ProposalType[];
  setProposals: React.Dispatch<React.SetStateAction<ProposalType[]>>;
  addProposal: (newProposal: ProposalType) => void;
  updateProposal: (id: number | string, updatedData: ProposalType) => void;
  removeProposal: (id: number | string) => void;
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filteredProposals: ProposalType[];
};

const ProposalContext= createContext<ProposalContextType>({
  proposals: [],
  setProposals: () => {},
  addProposal: () => {},
  updateProposal: () => {},
  removeProposal: () => {},
  filterStatus: "all",
  setFilterStatus: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  filteredProposals: [],
});

export const ProposalProvider = ({ children } : { children: React.ReactNode }) => {
  const [proposals, setProposals] = useState<ProposalType[]>(initialProposals);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addProposal = (newProposal: ProposalType) => {
    setProposals((prev: ProposalType[]) => [...prev, newProposal]);
  };

  const updateProposal = (id: number | string, updatedData: ProposalType) => {
    setProposals((prev: ProposalType[]) =>
      prev.map(proposal =>
        proposal.id === id ? { ...proposal, ...updatedData } : proposal
      )
    );
  };

  const removeProposal = (id: number | string) => {
    setProposals((prev: ProposalType[]) => prev.filter(proposal => proposal.id !== id));
  };

  const filteredProposals = proposals.filter((proposal: ProposalType | undefined) => {
      const matchesSearch = proposal?.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal?.client.toLowerCase().includes(searchTerm.toLowerCase());
  
      return matchesSearch
  });

  return (
      <ProposalContext.Provider value={{ proposals, setProposals, addProposal, updateProposal, removeProposal, filterStatus, setFilterStatus, searchTerm, setSearchTerm, filteredProposals }}
    >
      {children}
    </ProposalContext.Provider>
  );
}; 

export const useProposal = () => useContext(ProposalContext);
