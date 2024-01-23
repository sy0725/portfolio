import INFORMATION from '@/constants/INFORMATION'
import React from 'react'
import CardBox from '../Common/CardBox'

function Profile() {
  return (
    <div>
      <CardBox>
      {INFORMATION.name}
      </CardBox>
    </div>
  )
}

export default Profile