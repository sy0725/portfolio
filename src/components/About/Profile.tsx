import React from 'react';
import CardBox from '../Common/CardBox';
import Information from './Information';
import Sunyong from './Sunyong';
import DownBottom from "@/components/Common/DownBottom";

function Profile() {
  return (
    <section className='flex flex-col items-center justify-center' style={{ height: '100vh' }}>
      <span className='font-bold text-[2rem] pb-[2.5rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>About Me</span>
      <CardBox>
        <Sunyong />
        <Information />
      </CardBox>
      <DownBottom/>

    </section>
  );
}

export default Profile;
