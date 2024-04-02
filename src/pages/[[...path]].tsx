import Head from "next/head";
import { Inter } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";
import PageLayout from "@/components/PageLayout";
import { PageLayoutItems } from "@/types/page-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: {pageLayoutItems:PageLayoutItems}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <PageLayout items={props.pageLayoutItems} />
      </main>
    </>
  );
}

export function getServerSideProps({req}:{req:NextRequest, res:NextResponse}){

  try {
    const pageLayoutItems = require(`../mock-data${req.url.replace(/\/$/g, '')}/index.json`)?.components ?? [];

    return {
      props: {
        pageLayoutItems,
      }
    }
  } catch {
    return {
      notFound: true,
    }
  }

}