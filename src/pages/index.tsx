// src/pages/index.tsx

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Projects from "@/components/index/Projects";
import Footer from "@/components/index/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const descRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Zuxie.me</title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <meta
          name="description"
          content="Zuxie (aka Nigger Slayer) personal site"
        />
        <meta
          property="og:image"
          content="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png"
        />
        <meta property="theme-color" content="#17171a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <div className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <img src="./parse-black.gif" width={250} alt="Loading..." />
        </div>
      ) : (
        <div>
          <Navbar />
          <main className="relative pattern-grid-lg min-h-screen text-primary overflow-x-hidden px-6">
            <Hero inView={true} descRef={descRef} />
            <About />
            <Projects />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
