import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <>
      {/* <div style={{ height: "50px", backgroundColor: "red" }}></div> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};
