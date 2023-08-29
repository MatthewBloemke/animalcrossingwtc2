import Head from "next/head";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Animal Crossing: What&apos;s the Catch?</title>
        <meta name="description" content="Animal Crossing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </>
  );
}
