import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaOpencart } from "react-icons/fa";

const ManiLayout = ({ title, description, children }) => {
  return (
    <>
      <div>
        <Head>
          <title>{title ? `${title} - Amazon clone` : "Amazon clone"}</title>
          {description && (
            <meta name="description" content={description}></meta>
          )}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className=" bg-slate-900 py-3 text-white">
          <div className="max-w-full lg:max-w-screen-xl mx-auto px-5">
            <div className="flex items-center justify-between">
              <Link href="/">
                <h1 className="text-2xl font-semibold text-red-500 flex items-center gap-x-1">
                  <FaOpencart /> <span>Amazon</span>
                </h1>
              </Link>
              <div className="flex gap-x-4">
                <Link href="#">Cart</Link>
                <Link href="#">Login</Link>
              </div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ManiLayout;
