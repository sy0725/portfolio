import React from 'react';
import CardBox from '../Common/CardBox';
import Information from './Information';
import Sunyong from './Sunyong';

function Profile() {
  return (
    <section className='flex flex-col items-center justify-center' style={{ height: '100vh' }}>
      <span className='font-bold text-[32px] pb-[40px] mobile:text-[24px] tablet:text-[28px]'>About Me</span>
      <CardBox>
        <Sunyong />
        <Information />
      </CardBox>
    </section>
  );
}

export default Profile;
