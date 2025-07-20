import { DollarSign, FileText, TrendingUp, Users } from "lucide-react";

 const stats_data = [
    {
      title: "Total de Clientes",
      value: "12",
      description: "+2 este mês",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Propostas Ativas",
      value: "8",
      description: "4 aguardando resposta",
      icon: FileText,
      color: "text-orange-600"
    },
    {
      title: "Faturamento Previsto",
      value: "R$ 15.400",
      description: "+22% vs mês passado",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Taxa de Conversão",
      value: "68%",
      description: "+5% vs mês passado",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const recentActivities_data = [
    {
      action: "Nova proposta enviada",
      client: "Empresa Tech Solutions",
      time: "há 2 horas",
      type: "proposal"
    },
    {
      action: "Cliente adicionado",
      client: "Startup Inovadora",
      time: "há 5 horas",
      type: "client"
    },
    {
      action: "Proposta aceita",
      client: "E-commerce Plus",
      time: "há 1 dia",
      type: "success"
    },
    {
      action: "Follow-up enviado",
      client: "Agency Creative",
      time: "há 2 dias",
      type: "followup"
    }
  ];

  const activeProposals_data = [
    {
      title: "Landing Page Responsiva",
      client: "Tech Solutions",
      value: "R$ 2.500",
      status: "Aguardando",
      daysLeft: 3
    },
    {
      title: "E-commerce Completo",
      client: "Loja Virtual",
      value: "R$ 8.000",
      status: "Em análise",
      daysLeft: 7
    },
    {
      title: "App Mobile React Native",
      client: "Startup App",
      value: "R$ 12.000",
      status: "Negociação",
      daysLeft: 5
    }
  ];

export { stats_data, recentActivities_data, activeProposals_data }