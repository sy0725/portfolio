interface Props {
  children: React.ReactNode;
  justify?: string;
  className?: string;
}

function CardBox({
  children,
  justify = `justify-center`,
  className = "",
  ...props
}: Props) {
  return (
    <>
      <div
        className={`
      border relative rounded-[20px] min-w-[1000px] max-w-[1510px] h-auto max-h-full flex items-center shadow-md ${justify} ${className} `}
        {...props}>
        {children}
      </div>
    </>
  );
}

export default CardBox;