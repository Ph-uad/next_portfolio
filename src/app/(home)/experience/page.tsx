import { CompanyTitle } from "./_components/company_title";

const ExperiencePage = () => {
  return (
    <main className="page overflow-scroll flex flex-col ">
      <aside className="flex h-[120vh] bg-red-500 w-full justify-center items-start mt-96 gap-10">

        <div className="justify-center flex-[0.4]py-6 text-right gap-4 items-center">
          <div className="flex flex-row justify-end gap-4 px-5 h-fit items-center">
            <h3 className="text-title leading-[1.1] uppercase">Phuad</h3>
            <h3 className="self-end">.ft</h3>
            <div className="w-4 h-2 bg-neutral-700 self-end my-8 " />
          </div>
        </div>

        <div className=" flex flex-1 h-40 overflow-y-visible">
          <ul className="flex flex-col gap-4 h-full">
            <li>
              <CompanyTitle title="Vortedge" />
            </li>

            <li>
              <CompanyTitle title="Tizeti" />
            </li>
            <li>
              <CompanyTitle title="Others" />
            </li>
          </ul>
        </div>

      </aside>
    </main>
  );
};

export default ExperiencePage;
