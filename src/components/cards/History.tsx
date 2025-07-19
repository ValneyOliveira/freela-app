'use client';

import { CheckCircle, Clock, DollarSign, FileText, Search, Users, XCircle } from "lucide-react";
import { useHistory } from "@/context/HistoryContext";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { HistoryType } from "@/types";


export const HistoryTimeline = () => {
    const { history, searchTerm } = useHistory();

    const getActivityIcon = (type: string) => {
        switch (type) {
            case "sent":
                return <FileText className="h-4 w-4" />;
            case "add":
                return <Users className="h-4 w-4" />;
            case "acepted":
                return <CheckCircle className="h-4 w-4" />;
            case "rejected":
                return <XCircle className="h-4 w-4" />;
            case "follow-up":
                return "🔄";
            case "meeting":
                return <Clock className="h-4 w-4" />;
                case "payment":
                    return <DollarSign className="h-4 w-4" />;
            default:
                return <Clock className="h-4 w-4" />;
        }
    }

    const getActivityColor= (type: string) => {
        switch (type) {
            case "sent":
                return "text-blue-500";
            case "add":
                return "text-green-500";
            case "acepted":
                return "text-green-500";
            case "rejected":
                return "text-red-500";
            case "follow-up":
                return "text-yellow-500";
            case "meeting":
                return "text-purple-500";
            case "payment":
                return "text-orange-500";
            default:
                return "text-gray-500";
        }
    }

    const filteredActivities = history.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
    })
  
  return (
    <div className="history-list">
        {filteredActivities.map((activity: HistoryType) => (
            <Card key={activity.id} className="mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex items-start space-x-4">
                    <div className={`activity-icon ${getActivityColor(activity.type)}`}>
                        {getActivityIcon(activity.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="text-lg font-medium text-foreground mb-1">
                                    {activity.title}
                                </h3>
                                <p className="text-muted-foreground mb-3">
                                    {activity.description}
                                </p>

                                <div className="space-y-1">
                                    {activity.details.client && (
                                        <div className="flex items-center text-sm">
                                        <span className="text-muted-foreground mr-2">Cliente:</span>
                                        <span className="font-semibold text-md">{activity.details.client}</span>
                                        </div>
                                    )}
                                    {activity.details.proposal && (
                                        <div className="flex items-center text-sm">
                                        <span className="text-muted-foreground mr-2">Proposta:</span>
                                        <span className="font-semibold text-md">{activity.details.proposal}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col self-stretch justify-between items-end">
                                {activity.date && (
                                    <div>
                                        <span className="text-md font-semibold text-gray-700">{new Date(activity.date).toLocaleDateString('pt-BR')}</span>
                                    </div>
                                )}
                                {activity.details.value && (
                                    <div className="text-sm ">
                                        <span className={` ${activity.type == "payment" && "text-green-700"} font-medium`}>{activity.details.value}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
  );
}

export const HistoryFilter = () => {
    const { searchTerm, setSearchTerm } = useHistory();

    return(
        <Card className="mt-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="flex items-center justify-between space-x-4">
                <div className="relative flex-1 min-w-0">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Buscar atividades..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full"
                    />
                    </div>
            </CardContent>
      </Card>
    )
}

export const NoActivityFound = () => {
    const { searchTerm, filteredHistory } = useHistory();

    return (
        <>
        {filteredHistory.length == 0 && (
            <Card className="shadow-soft">
                <CardContent className="p-12 text-center">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                        Nenhuma atividade encontrada
                    </h3>
                    <p className="text-muted-foreground">
                        {!searchTerm && "Suas atividades aparecerão aqui conforme você usar o sistema."}
                    </p>
                </CardContent>
            </Card>
        )}
        </>
    )
}