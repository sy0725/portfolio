interface Props {
  children: React.ReactNode;
  className?: string;
  flex? : string
}

function CardBox({
  children,
  className = "",
  flex = 'flex-row',
  ...props
}: Props) {
  return (
    <>
      <div
        className={`
      border-[3px] rounded-[20px] min-w-[1510px] max-w-[1510px] mobile:min-w-[600px] mobile:max-w-[600px] tablet:min-w-[1100px] tablet:max-w-[1100px] h-auto flex shadow-md justify-around py-[100px] ${flex} ${className}`}
        {...props}>
        {children}
      </div>
    </>
  );
}

export default CardBox;