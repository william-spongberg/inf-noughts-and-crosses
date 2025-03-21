import * as Layout from "../components/Layout.tsx";
import * as Text from "../components/Text.tsx";
import Button from "../components/Button.tsx";
import InfGrid from "../islands/InfGrid.tsx";

export default function Play() {
  return (
    <>
      <Layout.Page>
        <InfGrid />
        <RulesButton />
        <HomeButton />
      </Layout.Page>
    </>
  );
}

function HomeButton() {
  return (
    <div class="fixed bottom-10 right-8">
      <Button href="/">
        <Text.SubHeading>
          Home
        </Text.SubHeading>
      </Button>
    </div>
  );
}

function RulesButton() {
  return (
    <div class="fixed bottom-10 right-32">
      <Button href="/rules">
        <Text.SubHeading>
          Rules
        </Text.SubHeading>
      </Button>
    </div>
  );
}
