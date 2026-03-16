interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="relative mt-20">
      <span aria-hidden="true" className="text-[6.8rem] leading-3 font-bold uppercase opacity-20">{title}</span>
      <span className="block font-bold text-6xl -translate-y-[90%] capitalize translate-x-1.5">{title}</span>
    </div>
  );
};
