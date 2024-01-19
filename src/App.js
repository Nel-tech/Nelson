import { Header } from "./Component/Home/Header";
import { Section } from "./Component/Home/Section";
import { Intro } from "./Component/Home/Intro";

export default function app() {
  return (
    <div>
      <Section>
        <Header />
        <Intro />
      </Section>
    </div>
  );
}
