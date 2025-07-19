import { LoginForm } from '@/components/Auth'
import React from 'react'

const page = () => {
  return (

    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-blue-50">

      <div className="w-full max-w-sm">
        <LoginForm />
      </div>

    </div>
  )
}

export default page