"use client";

import Image from "next/image";
import Logo from "@/public/favIcon.png";
import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "@/src/app/_providers/usePageTransition";

const MainNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { setIsExiting, setNewPathname, isExiting } = usePageTransition(
    (state: any) => state
  );

  const handleNavigation = (path: string) => {
    if (path !== pathname) {
      setIsExiting();
      setTimeout(() => {
        router.push(path);
        setNewPathname(path);
        setIsExiting();
      }, 3000);
    }
  };

  return (
    <nav
      className="z-10 bg-inherit min-h-[5vh] w-screen border-b border-black flex justify-center items-center sticky top-0  overflow-x-hidden flex-wrap z-2000 text-(--color-text-white)
                 text-[clamp(1.2rem,2vw,1.4rem)] "
    >
      <section className="flex flex-col md:flex-row self-center justify-between w-4/5 md:w-11/12 mx-auto capitalise ">
        <ul className="flex justify-between ">
          <li className="">
            <button onClick={() => handleNavigation("/")}>
              <figure className="h-10 w-10 ">
                <Image
                  alt="Logo"
                  src={Logo}
                  height={100}
                  width={100}
                  priority
                />
              </figure>
            </button>
          </li>
        </ul>
        <ul className="flex justify-between gap-x-10 ">
          <li className="">
            <button onClick={() => handleNavigation("/experience")}>
              Experience
            </button>
          </li>
          <li className="">
            <button onClick={() => handleNavigation("/")}>Projects</button>
          </li>
          <li className="list_item">
            <button onClick={() => handleNavigation("/about")}>About</button>
          </li>
        </ul>
        <ul className="flex justify-between">
          <li className="">
            <button onClick={() => handleNavigation("/")}>Conversations</button>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default MainNavigation;
