import React from 'react'
import { Auth } from '@/components/Auth'

const page = ({children} : {children: React.ReactNode}) => {

  return (
    <Auth>
      {children}
    </Auth>
  )
}

export default page