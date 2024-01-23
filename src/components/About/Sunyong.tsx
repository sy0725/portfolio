import Image from 'next/image';


function Sunyong() {
  return (
    <>
      <div className="w-[15rem] h-[15rem] relative rounded-full shadow-2xl overflow-hidden mobile:w-[7rem] mobile:h-[7rem] tablet:w-[10rem] tablet:h-[10rem]">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/About/sunyong.png"
          alt="선용"
        />
      </div>
    </>
  );
}

export default Sunyong;
