interface CompanyTitleProps {
  title: string;
}

export const CompanyTitle = ({ title }: CompanyTitleProps) => {
  return (
    <div className="relative mt-20 cursor-pointer">
      <h3 className="text-title leading-3 font-bold uppercase opacity-20">{title}</h3>
      <p className="font-bold text-8xl -translate-y-1/2 translate-x-1.5">{title}</p>
    </div>
  );
};
