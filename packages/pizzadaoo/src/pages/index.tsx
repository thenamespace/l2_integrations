import Head from "next/head";
import { MintForm } from "@components/components/MintForm";


export default function Home() {
  return (
    <>
      <Head>
        <title>PizzaDAO + Namespace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Namespace. The best place to manage ENS names and subnames for you and your community."
        />
        <meta property="og:title" content={`PizzaDAO + Namespace`} />
        <meta
          property="og:description"
          content="Namespace. The best place to manage ENS names and subnames for you and your community"
        />
        <meta name="twitter:card" />
        <meta name="twitter:title" content="Namespace" />
        <meta
          name="twitter:description"
          content="Namespace. The best place to manage ENS names and subnames for you and your community."
        />
        <meta name="theme-color" content="#5C61FF" />
      </Head>
      <MintForm/>
    </>
  );
}