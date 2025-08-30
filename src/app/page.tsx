import Image from "next/image";

import { Button } from "~/components/atoms";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to the homepage!</h1>
      <Button>Add Transaction</Button>
    </>
  );
}
