import dynamic from "next/dynamic";

const ClientComponent = dynamic(() =>
  import("./Client").then((mod) => mod.ClientComponent)
);

export default function Home() {
  return <ClientComponent />;
}
