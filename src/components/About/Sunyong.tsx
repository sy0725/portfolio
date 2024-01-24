import Image from 'next/image';


function Sunyong() {
  return (
    <>
      <div className="w-[25rem] h-[25rem] relative rounded-full shadow-2xl overflow-hidden mobile:w-[13rem] mobile:h-[13rem] tablet:w-[18rem] tablet:h-[18rem]">
        <Image
          layout="fill"
          src="/images/About/sunyong.png"
          alt="선용"
        />
      </div>
    </>
  );
}

export default Sunyong;
