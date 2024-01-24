import INFO_LIST from "@/constants/INFO_LIST";

function Information() {
  const renderALinkOrSpan = (text: string) => {
    return text.includes("https" || "http") ? (
      <a
        href={text}
        target="_blank"
        rel="noopener noreferrer"
        className="underline 
        underline-offset-[1px]">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    );
  };

  return (
    <div className="flex gap-6 items-center justify-center">
      <ul>
        {INFO_LIST.map(({icon, text}, i) => (
          <li key={i} className="mobile:text-[1.125rem] mobile:leading-3 tablet:text-[1.75rem] tablet:leading-5 flex gap-5 items-center justify-start pb-2 leading-7">
            <span>{icon}</span>
            {renderALinkOrSpan(text)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Information;