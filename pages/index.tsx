import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Babacar Thiam",
        description: "Discover the work of Babacar Thiam on his personal website",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Babacar Thiam</h1>
        <p>I am a full stack web/mobile developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, React Native, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, Python, Django and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
      </header>
    </div>
  )
}
