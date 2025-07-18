'use client'

import React, { FormEvent, useState } from 'react'

import { Label } from '../ui/label'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Building, Calendar, Clock, DollarSign, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from '../ui/select'
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger 
} from '../ui/dialog'
import { useProposal } from '@/context/ProposalContext'


export const ProposalFormDialog = ({ btn_name }: { btn_name?: string}) => {
  const { addProposal } = useProposal();
  const [isModalOpen, setIsModalOpen] = useState<boolean | undefined>(Boolean)

  const [title, setTitle] = useState<string>("");
  const [cliente, setCliente] = useState<string>("");
  const [valorEstimado, setValorEstimado] = useState<string>("");
  const [prazo, setPrazo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [prazoResposta, setPrazoResposta] = useState<string>("");
  const [status, setStatus] = useState<string>("enviada");
  
  const handleAddProposal = (e: FormEvent) =>  { 
    e.preventDefault();

    addProposal({ id: Math.random(), titulo: title, cliente, valorEstimado, status, 
      dataEnvio: new Date().toLocaleDateString(['en-US', 'pt-BR']), prazoResposta, descricao, prazo
    });
    setIsModalOpen(false) 
  }
  
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className='bg-blue-500 hover:bg-blue-400 hover:cursor-pointer'>
              <Plus className="w-4 h-4 mr-2" />
              Nova Proposta
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Criar Nova Proposta</DialogTitle>
              <DialogDescription>
                Preencha os detalhes da proposta comercial.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título da Proposta</Label>
                  <Input id="titulo" placeholder="Ex: Landing Page Responsiva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cliente-select">Cliente</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech-solutions">Tech Solutions Ltda</SelectItem>
                      <SelectItem value="startup">Startup Inovadora</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Plus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor Estimado</Label>
                  <Input id="valor" placeholder="R$ 5.000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prazo-projeto">Prazo do Projeto</Label>
                  <Input id="prazo-projeto" placeholder="30 dias úteis" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao-proposta">Descrição do Projeto</Label>
                <Textarea 
                  id="descricao-proposta" 
                  placeholder="Descreva detalhadamente o que será desenvolvido..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prazo-resposta">Prazo para Resposta</Label>
                  <Input id="prazo-resposta" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status-inicial">Status Inicial</Label>
                  <Select defaultValue="enviada">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enviada">Enviada</SelectItem>
                      <SelectItem value="negociacao">Em Negociação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-3 text-white">
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className='bg-red-500 hover:bg-red-400 hover:cursor-pointer'>
                  Cancelar
                </Button>
                <Button onClick={ handleAddProposal} className='bg-blue-500 hover:bg-blue-400 hover:cursor-pointer'>
                  Criar Proposta
                </Button>
              </div>
            </form>
          </DialogContent>
      </Dialog>
    </div>
  )
}

export const ShowProposalList = () => {
  const { filteredProposals } = useProposal();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-blue-500";
      case "accepted":
        return "bg-green-500";
      case "negotiation":
        return "bg-orange-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500 ";
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "sent":
        return "Enviada";
      case "accepted":
        return "Aceita";
      case "negotiation":
        return "Em Negociação";
      case "rejected":
        return "Rejeitada";
      default:
        return status;
    }
  };

  const getDaysRemaining = (prazoResposta: string) => {
    const today = new Date();
    const responseDate = new Date(prazoResposta);
    const timeDiff = responseDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProposals.map((proposal : any) => {
      const daysRemaining = getDaysRemaining(proposal.deadlineResponse);
      return (
        <Card key={proposal.id} className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg line-clamp-2">{proposal.title}</CardTitle>
              <Badge className={getStatusColor(proposal.status)}>
                {getStatusLabel(proposal.status)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{proposal.client}</p>
          </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {proposal.description}
              </p>
                
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Valor
                  </span>
                  <span className="font-bold text-foreground">{proposal.estimatedValue}</span>
                </div>
                  
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Enviada em
                  </span>
                  <span className="text-foreground">
                    {new Date(proposal.dataEnvio).toLocaleDateString('pt-BR')}
                   </span>
                </div>

                {proposal.status === 'enviada' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      Resposta em
                    </span>
                    <span className={`font-medium ${
                      daysRemaining <= 2 ? 'text-destructive' : 
                      daysRemaining <= 5 ? 'text-warning' : 'text-foreground'
                    }`}>
                      {daysRemaining > 0 ? `${daysRemaining} dias` : 'Vencida'}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1 hover:cursor-pointer" onClick={() => alert(`Editando proposta: ${proposal.title}`)}>
                  Editar
                </Button>
                <Button size="sm" className="flex-1 bg-blue-500 hover:cursor-pointer hover:bg-blue-400" onClick={() => alert(`Ver detalhes da proposta: ${proposal.title}`)}>
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  )
}

export const ProposalBoxFilter = () => {
  const { searchTerm, setSearchTerm } = useProposal();

  return (
    <div className="flex items-center space-x-4 md:w-auto">
      <Input
        type="text"
        placeholder="Pesquisar propostas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full "
      />
    </div>
  )
}

export const ShowFilteredProposal = () => {
  const { filteredProposals } = useProposal();
  
  return (
    <>
      {filteredProposals.length === 0 && (
        <Card className="shadow-soft">
          <CardContent className="p-12 text-center">
            <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Nenhuma proposta encontrada
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar os filtros de busca ou adicione sua primeira proposta.
              </p>
            <ProposalFormDialog btn_name="Adicionar Primeira Proposta"/>
          </CardContent>
        </Card>
      )}
    </>
  )
}