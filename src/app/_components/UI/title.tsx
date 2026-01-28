interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="relative mt-20 cursor-pointer">
      <span aria-hidden="true" className="text-[7.8rem] leading-3 font-bold uppercase opacity-20">{title}</span>
      <p className="font-bold text-8xl -translate-y-1/2 capitalize translate-x-1.5">{title}</p>
    </div>
  );
};
