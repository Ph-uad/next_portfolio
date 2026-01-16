"use client";

import Link from "next/link";

// import FooterBg from '@/public/images/footer-bg.jpg';

const Footer = () => {
  return (
    <footer className="footer flex ">
      <div className="self-end p-10 flex flex-col md:flex-row gap-6 md:gap-32 text-right text-xl">
        <div className="flex-grow-0 w-96">
          <h4>Recently,</h4>
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
          <h4>Contact,</h4>
          <ul>
            <li>
              <a href="mailto:temidayo26j@gmail.com">temidayo26j@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="container flex ">
        <section></section>

        <section>
          <h6 className="heading-senary">Get in Touch</h6>
          <ul className="list flex">
            <li className="list_item">
              <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="list_item">
              <a href="mailto:your@email.com">Mail</a>
            </li>
          </ul>
        </section>
      </div> */}
     
    </footer>
  );
};

export default Footer;
