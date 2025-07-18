export type ClientsType =  {
    id: number,
    name: string,
    email: string,
    phone: string,
    project: string,
    status: string,
    totalValue: string,
    contactDate: string | Date | any
}

export type ProposalType = {
    id: number;
    titulo: string;
    cliente: string;
    valorEstimado: string;
    status: string;
    dataEnvio: string;
    prazoResposta: string;
    descricao: string;
    prazo: string;
}



