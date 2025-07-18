import { Clock, FileText } from 'lucide-react';
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// Stats Cards
type CardProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}; type CardList = { stats: CardProps[] }

// Recent Activities
type RecentActivitiesProps = {
  action: string;
  client: string
  time: string;
  type: 'proposal' | 'client' | 'success' | "followup" | string;
}; type RecentActivitiesList = { recentActivities: RecentActivitiesProps[]; }

// Active Proposals
type ActiveProposalsProps = {
  title: string;
  client: string;
  value: string | number;
  status: "Aguardando" | "Em análise" | "Negociação" | string;
  daysLeft: number;

}; type ActiveProposalsList = { activeProposals: ActiveProposalsProps[] }

 
const StatsCards: React.FC<CardList> = ({ stats }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {stats.map((stat, index) => (
        <Card key={index} className='hover:shadow-blue-100'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const RecentActivities: React.FC<RecentActivitiesList> = ({ recentActivities }) => {
  return (
    <>
    <Card className="shadow-soft">
      <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Atividades Recentes
        </CardTitle>
        <CardDescription>
          Últimas ações realizadas no sistema
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === 'success' ? 'bg-success' :
                activity.type === 'proposal' ? 'bg-primary' :
                activity.type === 'client' ? 'bg-accent' : 'bg-muted-foreground'
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.client} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    </>
  )
}

const ActivesProposal: React.FC<ActiveProposalsList> = ({ activeProposals }) => {
  return (
    <>
      <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Propostas Ativas
            </CardTitle>
            <CardDescription>
              Propostas aguardando resposta do cliente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeProposals.map((proposal, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">{proposal.title}</h4>
                    <span className="text-lg font-bold text-foreground">{proposal.value}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{proposal.client}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        proposal.status === 'Aguardando' ? 'bg-orange-300 text-warning-foreground' :
                        proposal.status === 'Em análise' ? 'bg-green-300 text-primary-foreground bg-war' :
                        'bg-accent/20 text-accent-foreground'
                      }`}>
                        {proposal.status}
                      </span>
                      <span>• {proposal.daysLeft} dias restantes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
    </>
  )
}

export { StatsCards, RecentActivities, ActivesProposal}