import type { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { inferSSRProps } from "../utils/inferSSRProps";
import { trpc } from "../utils/trpc";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  const { data, isLoading, error } = trpc.useQuery(["hellomessage"]);
  return (
    <>
      <div>
        <div>
          <div>
            <span>Stacked.</span>
            {isLoading && <div>loading...</div>}
            {!isLoading && !error && <span>{data}</span>}
          </div>
          <Link passHref href="/about">
            <a>About Page</a>
          </Link>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: {} };
};

export default Index;
