import { CardUserProfile, UserProfileForm } from '@/components/cards/UserProfile'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>

      <div>
        <Header title="Perfil" description="Gerencie suas informações profissionais" />
      </div>

      <div className='grid gap-4 p-2'>
        <CardUserProfile />
        <UserProfileForm />
      </div>
    </div>
  )
}

export default page;