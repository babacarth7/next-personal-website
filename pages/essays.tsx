export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
    },
  };
}

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Babacar Thiam</h1>
      </header>
    </div>
  );
}
