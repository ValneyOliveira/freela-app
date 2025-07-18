'use client'

import React, { FormEvent, useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Building, Mail, Phone, Plus } from 'lucide-react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { ClientsType } from '@/types'
import { useClients } from '@/context/ClientsContext'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

export const ClientFormDialog = ({ title }: {title?: string}) => {
  const { addClient } = useClients();
  const [isModalOpen, setIsModalOpen] = useState<boolean | undefined>(Boolean)

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [project, setProject] = useState<string>("");
  const [observation, setObservation] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [totalValue, setTotalValue] = useState<string>("R$: 500.00");
  
  const handleAddClient = (e: FormEvent) =>  { 
    e.preventDefault();

    addClient({ id: Math.random(), name, email, phone, project, status,  
      totalValue, contactDate: new Date().toLocaleDateString(['en-US', 'pt-BR'])
    });
    setIsModalOpen(false) 
  }
  
  return (
    <div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className='bg-blue-500 hover:bg-blue-400 hover:cursor-pointer'>
              <Plus className="w-4 h-4 mr-2" />
              { title ? title : "Novo Cliente"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Cliente</DialogTitle>
              <DialogDescription>
                Preencha as informações do cliente para adicioná-lo ao seu CRM.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome/Empresa</Label>
                  <Input id="nome" placeholder="Nome do cliente" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="cliente@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projeto">Projeto</Label>
                <Input id="projeto" placeholder="Descrição do projeto" 
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status"/>
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="negotiation">Em Negociação</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
                    <SelectItem value="lost">Perdido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea id="observacoes" placeholder="Notas adicionais sobre o cliente..."
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-3 text-white">
                <Button onClick={() => setIsModalOpen(false)} className='bg-red-500 hover:bg-red-400 hover:cursor-pointer'>
                  Cancelar
                </Button>
                <Button onClick={handleAddClient} className='bg-blue-500 hover:bg-blue-400 hover:cursor-pointer'>
                  Adicionar Cliente
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export const ShowClientsList = () => {
  const { filteredClients } = useClients();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "negotiation":
      return "bg-orange-500";
      case "completed":
        return "bg-blue-500";
      case "lost":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Ativo";
      case "negotiation":
        return "Em Negociação";
      case "completed":
        return "Concluído";
      case "lost":
        return "Perdido";
      default:
        return status;
  }
  };
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredClients.map((client: ClientsType) => (
      <Card key={client.id} className="shadow-soft hover:shadow-medium transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{client.name}</CardTitle>
            <Badge className={getStatusColor(client.status)}>
              {getStatusLabel(client.status)}
            </Badge>
          </div>
        </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    {client.email}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    {client.phone}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    {client.project}
                </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-lg font-bold text-neutral-800">
                      {client.totalValue}
                </span>
                <span className="text-xs text-muted-foreground">
                {new Date(client.contactDate).toLocaleDateString('pt-BR')}
                </span>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 hover:cursor-pointer" onClick={() => alert(`Editando cliente: ${client.name}`)}>
                  Editar
                </Button>
                <Button size="sm" className="flex-1 bg-blue-500 hover:cursor-pointer hover:bg-blue-400" onClick={() => alert(`Ver detalhes do cliente: ${client.name}`)}>
                  Ver Detalhes
                </Button>
              </div>
          </CardContent>
      </Card>
    ))}
  </div>
  )
}

export const ClientsBoxFilter = () => {
  const { searchTerm, setSearchTerm } = useClients();

  return (
    <div className="flex items-center space-x-4 md:w-auto">
      <Input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full "
      />
    </div>
  )
}

export const ShowFilteredClients = () => {
  const { filterStatus, searchTerm, filteredClients } = useClients();
  
  return (
    <>
      {filteredClients.length === 0 && (
        <Card className="shadow-soft">
          <CardContent className="p-12 text-center">
            <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Nenhum cliente encontrado
              </h3>
              <p className="text-muted-foreground mb-4">
                { searchTerm || filterStatus !== "todos" ? "Tente ajustar os filtros de busca." : "Adicione seu primeiro cliente para começar." }
              </p>
            {!searchTerm && filterStatus === "todos" && (
              <ClientFormDialog title="Adicionar Primeiro Cliente"/>
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}