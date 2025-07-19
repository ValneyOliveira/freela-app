'use client'

import { HistoryType } from "@/types";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


const initialHistory: HistoryType[] = [
    {
        id: 1,
        type: "sent",
        title: "Proposta enviada",
        description: "Landing Page Responsiva enviada para Tech Solutions",
        date: "2024-01-05",
        details: {
            proposal: "Landing Page Responsiva",
            client: "Tech Solutions Ltda",
            value: "R$ 15,000"
        }

    }, 
    {
        id: 2,
        type: "add",
        title: "Novo cliente adicionado",
        description: "Tech Solutions Ltda foi adicionado ao CRM",
        date: "2024-01-10",
        details: {
            proposal: "CRM Setup",
            client: "Tech Solutions Ltda",
            value: "R$ 18,000"
        }
    },
    {
        id: 3,
        type: "acepted",
        title: "Proposta aceita! 🎉",
        description: "E-commerce Completo foi aceito pela Loja Virtual",
        date: "2024-01-14T16:20:00",
        details: {
            proposal: "E-commerce Completo",
            client: "Loja Virtual",
            value: "R$ 8.000"
        }
        
    }
    
]

type HistoryContextType = {
    history: HistoryType[];
    setHistory: Dispatch<SetStateAction<HistoryType[]>>;
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    filteredHistory: HistoryType[]
}

const HistoryContext = createContext<HistoryContextType>({} as HistoryContextType);

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {

    const [history, setHistory] = useState<HistoryType[] >(initialHistory);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredHistory = history.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <HistoryContext.Provider value={{ history, setHistory, searchTerm, setSearchTerm, filteredHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);