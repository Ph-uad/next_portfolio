import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav
          className="flex items-center sticky top-0 w-full flex-wrap z-2000 text-(--color-text-white)
                 text-[clamp(1.2rem,2vw,1.4rem)]
                 bg-[linear-gradient(80deg,var(--color-primary-transparent)/60%,var(--bg-color)/61%)]
              p-6"
        >
      <section className="ml-[90%] max-w-[20rem] ">
        <ul className="flex justify-between gap-x-10 uppercase ">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="list_item"> 
            <Link href="/about">About</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default MainNavigation;
