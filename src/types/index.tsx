export type ClientsType =  {
    id: number,
    name: string,
    email: string,
    phone: string,
    project: string,
    status: string,
    totalValue: string,
    contactDate: string | Date | any,
    observations?: string
}

export type ProposalType = {
    id: number;
    title: string;
    client: string;
    estimatedValue: string;
    status: string;
    shippingDate: string;
    deadlineResponse: string;
    description: string;
    term: string;
}



