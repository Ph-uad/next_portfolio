"use client";

import Link from "next/link"; 

const Footer = () => {
  return (
    <footer className="absolute bottom-1 w-fit self-end py-2 px-10 flex flex-col md:flex-row gap-6 md:gap-32 text-right text-sm text-white">
      <div className="flex-grow-0 w-96">
        <h4 className="uppercase">Recently,</h4>
        <p>
          {" "}
          just completed an <strong>MS</strong>c in Big Data Analysis{" "}
          <Link
            href="/about#experience"
            className="underline mt-2 mb-6 hover:underline-offset-4 transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </p>
      </div>
      <div className="flex-grow-0">
        <h4 className="uppercase">Contact,</h4>
        <ul>
          <li>
            <a href="mailto:temidayo26j@gmail.com">temidayo26j@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
