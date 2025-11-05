import Image, { type ImageProps } from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">It works!</h1>
        <Button>Click me</Button>
      </section>
    </main>
  );
}
