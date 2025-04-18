import { Head } from "$fresh/runtime.ts";
import Button from "../components/Button.tsx";
import * as Layout from "../components/Layout.tsx";
import * as Text from "../components/Text.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Layout.Page>
        <Layout.Element>
          <Text.Title>404 - Page not found</Text.Title>
          <br />
          <Text.Paragraph>
            The page you were looking for does not exist.
          </Text.Paragraph>
          <Button href="/">
            <Text.SubHeading>
              Go back home
            </Text.SubHeading>
          </Button>
        </Layout.Element>
      </Layout.Page>
    </>
  );
}
