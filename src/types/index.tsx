export type ClientsType =  {
    id: number,
    name: string,
    email: string,
    phone: string,
    project: string,
    status: string,
    totalValue: string,
    contactDate: string | Date,
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
    createdAt: string | Date;
}

export type HistoryType = {
    id: number;
    type: string;
    title: string;
    description: string;
    date: string;
    details: {
        proposal: string;
        client: string;
        value: string;
    };
}

export type UserType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    avatar?: string;
}