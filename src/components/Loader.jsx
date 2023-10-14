import { Container, Loader as MantineLoader } from "@mantine/core";

export default function Loader() {
  return (
    <>
      <Container >
        <MantineLoader color="blue" size="xl" type="bars" />
      </Container>
    </>
  );
}
