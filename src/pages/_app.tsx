import Layout from "~/components/layout/Layout";
import { type AppType } from "next/dist/shared/lib/utils";
import { RecoilRoot } from "recoil";
import "~/styles/globals.scss";
import "~/styles/tailwind.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
