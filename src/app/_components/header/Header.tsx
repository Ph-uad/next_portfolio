"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto my-10 text-left flex align-bottom justify-between gap-10 ">
      <div className="w-2/4 ">
        <h1 className="text-6xl leading-[2.4]">Hi i am Phuad</h1>
        <p className="text-2xl opacity-75">
          I am passionate about digital transformation and collaborating with
          creative minds, including developers, UI/UX designers, and
          stakeholders. Additionally, I enjoy analyzing complex data sets to
          extract valuable insights, which brings me a profound sense of
          satisfaction.
        </p>
      </div>
      <button
        className="h-fit px-4 py-2 border border-(--color-primary-transparent-light) rounded-md
            hover:bg-(--color-primary-transparent-light) 
            hover:text-black
            transition-colors
            duration-300
            ease-in-out
            "
      >
        <Link href="/">Get in Touch</Link>
      </button>
    </header>
  );
};

export default Header;

{
  /* <motion.blockquote
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                className='text-gray-500'
            >
                <p> "If no mistake have you made yet, losing you are, a different game you should play."</p>
            </motion.blockquote>
            <motion.figcaption className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
            >
                Master Yoda <cite>(Star wars)</cite>
            </motion.figcaption> */
}
