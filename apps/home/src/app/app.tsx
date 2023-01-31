// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Header } from "@stores/header";
import { Footer } from "@stores/footer";
import { Content } from "@stores/content"

export function App() {
  return (
    <>
      <Header heading={"Home"} />
      <Content pageTitle={"Home"} />
      <Footer />
    </>
  );
}

export default App;
