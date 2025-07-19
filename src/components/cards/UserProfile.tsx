'use client'

import { Camera, Mail, MapPin, Phone, Save, User } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { FormEvent, useState } from "react"
import { useUser } from "@/context/UserContext"
import { Label } from "../ui/label"
import { Input } from "../ui/input"


export const CardUserProfile = () => {
    const { profileData } = useUser();

    return (
        <div>
            <Card>
            <CardContent className="p-5 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl bg-blue-400 text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full p-2 h-8 w-8 bg-gray-500"
                  >
                    <Camera className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {profileData?.name || "Nome do Usuário"}
              </h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvedor Full Stack
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {profileData?.location || "Localização não definida"}
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  {profileData?.email}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    )
}


export const UserProfileForm = () => {
    const { profileData,  updateProfile } = useUser();

    const [name, setName] = useState(profileData?.name || "");
    const [email, setEmail] = useState(profileData?.email || "");
    const [phone, setPhone] = useState(profileData?.phone || "")
    const [location, setLocation] = useState(profileData?.location || "");


    const  handleSave = (e: FormEvent) => {
        e.preventDefault()

        updateProfile({  id: profileData?.id ?? 1, name, email, phone, location,
            avatar: profileData?.avatar ?? "https://example.com/avatar.jpg"
        })

        console.log(profileData)
    };

    
    return (
        <>
        <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Seus dados de contato e informações básicas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e?.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="localizacao">Localização</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="localizacao"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <Button onClick={handleSave} className='mt-4 bg-blue-500 hover:bg-blue-400 hover:cursor-pointer'>
                <Save className="w-4 h-4 mr-2" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </>
    )
}
