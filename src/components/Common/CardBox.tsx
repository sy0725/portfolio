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
      border-[0.313rem] rounded-[1.25rem] min-w-[94.375rem] max-w-[94.375rem] mobile:min-w-[37.5rem] mobile:max-w-[37.5rem] tablet:min-w-[68.75rem] tablet:max-w-[68.75rem] h-auto flex shadow-md justify-around py-[5rem] ${flex} ${className}`}
        {...props}>
        {children}
      </div>
    </>
  );
}

export default CardBox;