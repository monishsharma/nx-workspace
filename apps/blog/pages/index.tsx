import styles from './index.module.css';
import { Header } from "@stores/header"
import { Footer } from "@stores/footer"
import { Content } from "@stores/content";

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div >
      <Header heading={"Blog"} />
      <Content pageTitle={"Blog"} />
      <Footer />
    </div>
  );
}

export default Index;
