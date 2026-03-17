"use client";

import { Asterisk } from "lucide-react";

function Experience() {
  return (
    <div className="row-start-1 row-span-4 ">
      <div className="overflow-hidden bg-[url('/img/cards/hands.jpg')]  bg-cover h-full w-full rounded-4xl flex flex-col p-6 ">
        <div className="text-center font-light flex gap-2 items-center justify-center">
          <Asterisk className="text-xl animate-spin" />
          <h4 className="text-3xl">Experience</h4>
          <h2 className="font-extrabold text-xl animate-spin">米.</h2>
        </div>

        <ul className="mt-auto flex flex-col gap-y-4 ">
          <li className="flex items-center justify-between border-b border-(--color-primary-transparent-light) pb-4 last:border-b-0 last:pb-4 ">
            <span className="">mm-yyyy</span>
            <em> ±± </em>
            <h3>Job title</h3>
            <em> </em>
            <span>Company Name</span>
          </li>
          <li className="flex items-center justify-between border-b border-(--color-primary-transparent-light) pb-4 last:border-b-0 last:pb-4">
            <span className="">mm-yyyy</span>
            <Asterisk className=" animate-spin" />
            <h3>Job title</h3>
            <em> </em>
            <span>Company Name</span>
          </li>
          <li className="flex items-center justify-between border-b border-(--color-primary-transparent-light) pb-4 last:border-b-0 last:pb-6">
            <span className=""> mm-yyyy</span>
            <Asterisk />
            <h3>Job title</h3>
            <em> </em>
            <span>Company Name</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
