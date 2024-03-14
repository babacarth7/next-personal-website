import Image, { StaticImageData } from "next/image";
import imageGestionDeBudget from "../public/images/projects/11.png";
import imageSamazoneWeb from "../public/images/projects/10.png";
import imageGestionDeBudgetApi from "../public/images/projects/9.png";
import imageSamazoneMobile from "../public/images/projects/7.jpeg";
export async function getStaticProps() {
  return {
    props: {
      pageId: "projects",
    },
  };
}

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData
};

function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props;
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              🔗 {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Things I do</h1>
        <p className="text-base mt-6 text-zinc-600">I have been working on a number of small projects</p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl">Web Apps</h2>
        <ul  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name={"Gestion de Budget: Une Application Web de Gestion de Budget"}
            url={"https://github.com/babacarth7/gestion-de-budget"}
            urlDisplay={"GitHub"}
            imageSrc={imageGestionDeBudget}
          />

          <ProjectItem
            name={"Samazone App: Une Application E-Commerce"}
            url={"https://github.com/babacarth7/samazone"}
            urlDisplay={"GitHub"}
            imageSrc={imageSamazoneWeb}
          />

          <ProjectItem
            name={"API de Gestion de Budget: L'API Gestion de Budget"}
            url={"https://github.com/babacarth7/gestion-de-budget-api-v1"}
            urlDisplay={"GitHub"}
            imageSrc={imageGestionDeBudgetApi}
          />
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl">Mobile Apps</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name={"Samazone Mobile: Application Mobile de Samazone"}
            url={"https://github.com/babacarth7/samazone_client"}
            urlDisplay={"GitHub"}
            imageSrc={imageSamazoneWeb}
          />
        </ul>
      </div>
    </div>
  );
}
