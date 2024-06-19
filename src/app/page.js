import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Desenvolvido por&nbsp;
          <a href="https://github.com/Cocottinha" target="_blank">
            <code className="font-mono font-bold">Lucas Cotta</code>
          </a>
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center text-4xl gap-10 flex-grow">
        Horas Complementares
        <Image src={"/unnamed.gif"} width={150} height={50}/>
      </div>
    </main>
  );
}
