import { inter } from "@/app/ui/fonts";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations("Page");

  return (
    <div className="px-4 py-8 bg-white text-black dark:bg-gray-800 dark:text-gray-100 m-0 w-auto ">
      {/* Presentacion Section */}
      <section id="presentacion" className={`mb-12 pt-36 lg:pt-18 transition`}>
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("Presentacion.sectionTitle")}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              {t("Presentacion.paragraph1_part1")}
              <span className="font-bold">
                {t("Presentacion.companyAligare")}
              </span>
              {t("Presentacion.paragraph1_part2")}
              <span className="font-bold">
                {t("Presentacion.companyCruzVerde")}
              </span>
              ,{" "}
              <span className="font-bold">
                {t("Presentacion.companyClaro")}
              </span>{" "}
              y{" "}
              <span className="font-bold">
                {t("Presentacion.companyRipley")}
              </span>
              .{t("Presentacion.paragraph1_part3")}
              <span className="font-bold">
                {t("Presentacion.companyRipley")}
              </span>
              {t("Presentacion.paragraph1_part4")}
              <span className="font-bold">
                {t("Presentacion.companyAligare")}
              </span>
              {t("Presentacion.paragraph1_part5")}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techReact")}{" "}
                <img
                  src="/icons/react-icon.svg"
                  alt="React"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techAngular")}{" "}
                <img
                  src="/icons/angular-icon.svg"
                  alt="Angular"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techNode")}{" "}
                <img
                  src="/icons/nodejs-icon.svg"
                  alt="Node.js"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techJava")}{" "}
                <img
                  src="/icons/java-icon.svg"
                  alt="Java Spring Boot"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techDotnet")}{" "}
                <img
                  src="/icons/dotnet-icon.svg"
                  alt=".NET Core"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techPostgres")}{" "}
                <img
                  src="/icons/postgresql-icon.svg"
                  alt="PostgreSQL"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techMongo")}{" "}
                <img
                  src="/icons/mongodb-icon.svg"
                  alt="MongoDB"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techOracle")}{" "}
                <img
                  src="/icons/oracle-icon.svg"
                  alt="Oracle"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techDocker")}{" "}
                <img
                  src="/icons/docker-icon.svg"
                  alt="Docker"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techJenkins")}{" "}
                <img
                  src="/icons/jenkins-icon.svg"
                  alt="Jenkins"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>{" "}
              y{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techGit")}{" "}
                <img
                  src="/icons/git-icon.svg"
                  alt="Git"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              , {t("Presentacion.paragraph1_part6")}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techJira")}{" "}
                <img
                  src="/icons/jira-icon.svg"
                  alt="Jira"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>{" "}
              y{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("Presentacion.techConfluence")}{" "}
                <img
                  src="/icons/confluence-icon.svg"
                  alt="Confluence"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              .{t("Presentacion.paragraph1_part7")}
            </p>
          </div>
        </div>
      </section>

      {/* Experiencia Laboral Section */}
      <section id="experiencia" className="mb-12 pt-36 lg:pt-20 -mt-16">
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("WorkExperience.sectionTitle")}
        </h2>
        <div className="space-y-8">

          {/* Role Manager App  Junio 2025 - Agosto 2025 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">{t("WorkExperience.personalProject2.companyName")}</span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.personalProject2.jobTitle")}{" "}
              <span className="font-bold">{t("WorkExperience.personalProject2.jobTitleEmphasis")}</span>{" "}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("WorkExperience.personalProject2.date")}
              </p>
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>{t("WorkExperience.personalProject2.bullet1")}</li>
              <li>
                {t("WorkExperience.personalProject2.bullet2")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  React 19 <img src="/icons/react-icon.svg" alt="React" className="ml-1 h-4 w-4 inline" />
                </span>
                , NextJS, Typescript, Material UI,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  PostgreSQL <img src="/icons/mongodb-icon.svg" alt="MongoDB" className="ml-1 h-4 w-4 inline" />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Express
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Node.js <img src="/icons/nodejs-icon.svg" alt="NodeJS" className="ml-1 h-4 w-4 inline" />
                </span>
                , JWT.
              </li>
              <li>
                {t("WorkExperience.personalProject.bullet3")}
                <a href="https://role-manager-front-umber.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                  https://role-manager-front-umber.vercel.app/
                </a>
              </li>
            </ul>
          </div>

          {/* Kitchen Blog Feb 2025 - Jun 2025 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">{t("WorkExperience.personalProject.companyName")}</span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.personalProject.jobTitle")}{" "}
              <span className="font-bold">{t("WorkExperience.personalProject.jobTitleEmphasis")}</span>{" "}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("WorkExperience.personalProject.date")}
              </p>
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>{t("WorkExperience.personalProject.bullet1")}</li>
              <li>
                {t("WorkExperience.personalProject.bullet2")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  React 18 <img src="/icons/react-icon.svg" alt="React" className="ml-1 h-4 w-4 inline" />
                </span>
                , Vite, Material UI, Emotion, Framer Motion, Cloudinary, React Router,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  MongoDB <img src="/icons/mongodb-icon.svg" alt="MongoDB" className="ml-1 h-4 w-4 inline" />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Express
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Node.js <img src="/icons/nodejs-icon.svg" alt="NodeJS" className="ml-1 h-4 w-4 inline" />
                </span>
                , JWT, SSE.
              </li>
              <li>
                {t("WorkExperience.personalProject.bullet3")}
                <a href="https://kitchen-blog-front.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                  https://kitchen-blog-front.vercel.app/
                </a>
              </li>

            </ul>
          </div>

          {/* English Proficiency */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">
                {t("WorkExperience.english.companyName")}
              </span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.english.level")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("WorkExperience.english.date")}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>{t("WorkExperience.english.course")}</li>
              <li>
                {t("WorkExperience.english.ielts")} –{" "}
                <span className="font-bold">{t("WorkExperience.english.ieltsLevel")}</span>
              </li>
              <li>
                <span className="font-bold">{t("WorkExperience.english.speaking")}</span>{" "}
                6.5 |{" "}
                <span className="font-bold">{t("WorkExperience.english.reading")}</span>{" "}
                6 |{" "}
                <span className="font-bold">{t("WorkExperience.english.listening")}</span>{" "}
                6 |{" "}
                <span className="font-bold">{t("WorkExperience.english.writing")}</span>{" "}
                6
              </li>
            </ul>
          </div>

          {/* Aligare */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">
                {t("WorkExperience.aligare.companyName")}
              </span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.aligare.jobTitle")}{" "}
              <span className="font-bold">
                {t("WorkExperience.aligare.jobTitleEmphasis")}
              </span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("WorkExperience.aligare.date")}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                {t("WorkExperience.aligare.bullet1_part1")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet1_aligare")}
                </span>
                {t("WorkExperience.aligare.bullet1_part2")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet1_ripley")}
                </span>
                ,{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet1_claro")}
                </span>{" "}
                {t("WorkExperience.aligare.bullet1_and")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet1_cruzVerde")}
                </span>
                .
              </li>
              <li>
                {t("WorkExperience.aligare.bullet2_part1")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet2_postgresql")}{" "}
                  <img
                    src="/icons/postgresql-icon.svg"
                    alt="PostgreSQL"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.aligare.bullet2_part2")}.
              </li>
              <li>
                {t("WorkExperience.aligare.bullet3_part1")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet3_react")}{" "}
                  <img
                    src="/icons/react-icon.svg"
                    alt="React"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet3_angular")}{" "}
                  <img
                    src="/icons/angular-icon.svg"
                    alt="Angular"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet3_nodejs")}{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="NodeJS"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.aligare.bullet3_and")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet3_java")}{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                , {t("WorkExperience.aligare.bullet3_part2")}.
              </li>
              <li>
                {t("WorkExperience.aligare.bullet4_part1")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet4_web")}
                </span>{" "}
                {t("WorkExperience.aligare.bullet4_and")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet4_desktop")}
                </span>
                .
              </li>
              <li>
                {t("WorkExperience.aligare.bullet5_part1")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet5_crossFunctional")}
                </span>{" "}
                {t("WorkExperience.aligare.bullet5_part2")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.aligare.bullet5_highQuality")}
                </span>
                .
              </li>
              <li>
                {t("WorkExperience.aligare.bullet6_part1")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_react")}{" "}
                  <img
                    src="/icons/react-icon.svg"
                    alt="React"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_angular")}{" "}
                  <img
                    src="/icons/angular-icon.svg"
                    alt="Angular"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_javascript")}{" "}
                  <img
                    src="/icons/javascript-icon.svg"
                    alt="JavaScript"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_nodejs")}{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="NodeJS"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_springBoot")}{" "}
                  <img
                    src="/icons/springboot-icon.svg"
                    alt="Spring Boot"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_postgresql")}{" "}
                  <img
                    src="/icons/postgresql-icon.svg"
                    alt="PostgreSQL"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_sqlserver")}{" "}
                  <img
                    src="/icons/sql-icon.svg"
                    alt="SQLServer"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_oracle")}{" "}
                  <img
                    src="/icons/oracle-icon.svg"
                    alt="Oracle"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_mongodb")}{" "}
                  <img
                    src="/icons/mongodb-icon.svg"
                    alt="MongoDB"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_docker")}{" "}
                  <img
                    src="/icons/docker-icon.svg"
                    alt="Docker"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_jenkins")}{" "}
                  <img
                    src="/icons/jenkins-icon.svg"
                    alt="Jenkins"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_java8")}{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java 8"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_git")}{" "}
                  <img
                    src="/icons/git-icon.svg"
                    alt="Git"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_jira")}{" "}
                  <img
                    src="/icons/jira-icon.svg"
                    alt="Jira"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.aligare.bullet6_and")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.aligare.bullet6_confluence")}{" "}
                  <img
                    src="/icons/confluence-icon.svg"
                    alt="Confluence"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
            </ul>
          </div>

          {/* Farmacias Cruz Verde Chile */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">
                {t("WorkExperience.cruzVerde.companyName")}
              </span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.cruzVerde.jobTitle")}{" "}
              <span className="font-bold">
                {t("WorkExperience.cruzVerde.jobTitleEmphasis")}
              </span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("WorkExperience.cruzVerde.date")}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                {t("WorkExperience.cruzVerde.bullet1_part1")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.cruzVerde.bullet1_transactionalSystem")}
                </span>{" "}
                {t("WorkExperience.cruzVerde.bullet1_for")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.cruzVerde.bullet1_cruzVerdeCompanies")}
                </span>
                .
              </li>
              <li>
                {t("WorkExperience.cruzVerde.bullet2_part1")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.cruzVerde.bullet2_reactJs")}{" "}
                  <img
                    src="/icons/react-icon.svg"
                    alt="React Js"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.cruzVerde.bullet2_nodeJs")}{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="Node Js"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.cruzVerde.bullet2_sequelize")}{" "}
                  <img
                    src="/icons/sequelize-icon.svg"
                    alt="Sequalize"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.cruzVerde.bullet2_awsLambda")}{" "}
                  <img
                    src="/icons/aws-icon.svg"
                    alt="AWS Lambda"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.cruzVerde.bullet2_and")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.cruzVerde.bullet2_gitLab")}{" "}
                  <img
                    src="/icons/gitlab-icon.svg"
                    alt="Git Lab"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
            </ul>
          </div>

          {/* Ripley Chile y Peru */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">
                {t("WorkExperience.ripley.companyName")}
              </span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.ripley.jobTitle")}{" "}
              <span className="font-bold">
                {t("WorkExperience.ripley.jobTitleEmphasis")}
              </span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("WorkExperience.ripley.date")}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                <span className="font-bold">
                  {t("WorkExperience.ripley.bullet1_dataCorrection")}
                </span>{" "}
                {t("WorkExperience.ripley.bullet1_inDatabase")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.ripley.bullet1_postgresql")}{" "}
                  <img
                    src="/icons/postgresql-icon.svg"
                    alt="PostgreSQL"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.ripley.bullet1_production")}.
              </li>
              <li>
                {t("WorkExperience.ripley.bullet2_apiDevelopment")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.ripley.bullet2_nodeJs")}{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="Node Js"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.ripley.bullet2_forUseIn")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.ripley.bullet2_companyName")}
                </span>
                .
              </li>
              <li>
                <span className="font-bold">
                  {t("WorkExperience.ripley.bullet3_serviceMonitoring")}
                </span>{" "}
                {t("WorkExperience.ripley.bullet3_in")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.ripley.bullet3_jenkins")}{" "}
                  <img
                    src="/icons/jenkins-icon.svg"
                    alt="Jenkins"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
              <li>
                <span className="font-bold">
                  {t("WorkExperience.ripley.bullet4_ticketManagement")}
                </span>{" "}
                {t("WorkExperience.ripley.bullet4_in")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.ripley.bullet4_jira")}{" "}
                  <img
                    src="/icons/jira-icon.svg"
                    alt="Jira"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
              <li>
                {t("WorkExperience.ripley.bullet5_processDocumentation")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.ripley.bullet5_confluence")}{" "}
                  <img
                    src="/icons/confluence-icon.svg"
                    alt="Confluence"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
              <li>
                <span className="font-bold">
                  {t("WorkExperience.ripley.bullet6_softwareUpdates")}
                </span>{" "}
                {t("WorkExperience.ripley.bullet6_of")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.ripley.bullet6_companyName")}
                </span>{" "}
                {t("WorkExperience.ripley.bullet6_developedIn")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.ripley.bullet6_java")}{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
            </ul>
          </div>

          {/* Claro Chile S.A */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">
                {t("WorkExperience.claro.companyName")}
              </span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {t("WorkExperience.claro.jobTitle")}{" "}
              <span className="font-bold">
                {t("WorkExperience.claro.jobTitleEmphasis")}
              </span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("WorkExperience.claro.date")}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                <span className="font-bold">
                  {t("WorkExperience.claro.bullet1_modifySoftware")}
                </span>{" "}
                {t("WorkExperience.claro.bullet1_developedIn")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.claro.bullet1_java8")}{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java 8"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.claro.bullet1_of")}{" "}
                <span className="font-bold">
                  {t("WorkExperience.claro.bullet1_companyName")}
                </span>
                .
              </li>
              <li>
                <span className="font-bold">
                  {t("WorkExperience.claro.bullet2_addNewIdentity")}
                </span>{" "}
                {t("WorkExperience.claro.bullet2_toSoftware")}.
              </li>
              <li>
                {t("WorkExperience.claro.bullet3_use")}{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  {t("WorkExperience.claro.bullet3_github")}{" "}
                  <img
                    src="/icons/github-icon.svg"
                    alt="GitHub"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                {t("WorkExperience.claro.bullet3_versionControl")}.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competencias Section */}
      <section id="competencias" className="mb-12 pt-36 lg:pt-20 -mt-16">
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("Skills.sectionTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div>
            <ul className="list-disc list-inside">
              <li>{t("Skills.bullet1")}</li>
              <li>{t("Skills.bullet2")}</li>
              <li>{t("Skills.bullet3")}</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>{t("Skills.bullet4")}</li>
              <li>{t("Skills.bullet5")}</li>
              <li>{t("Skills.bullet6")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competencias Técnicas Section */}
      <section
        id="competencias-tecnicas"
        className="mb-12 pt-36 lg:pt-20 -mt-16"
      >
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("TechnicalSkills.sectionTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.frontendTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/react-icon.svg"
                  alt="ReactLogo"
                  width={35}
                  height={35}
                />
                React JS/TS (Redux, Next JS)
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/angular-icon.svg"
                  alt="AngularLogo"
                  width={35}
                  height={35}
                />
                <p>Angular JS/TS</p>
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.backendTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/nodejs-icon.svg"
                  alt="NodeLogo"
                  width={35}
                  height={35}
                />
                Node Js (Express Js, Nest Js, Sequalize)
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/springboot-icon.svg"
                  alt="SpringbootLogo"
                  width={35}
                  height={35}
                />
                SpringBoot (Maven)
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/dotnet-icon.svg"
                  alt="dotnetLogo"
                  width={35}
                  height={35}
                />
                .Net Core (Entity Framework, LinQ)
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.databaseTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/postgresql-icon.svg"
                  alt="PostgresqlLogo"
                  width={35}
                  height={35}
                />
                PostgreSQL
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/mongodb-icon.svg"
                  alt="MongodbLogo"
                  width={35}
                  height={35}
                />
                Mongo DB
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/sql-icon.svg"
                  alt="SqlLogo"
                  width={35}
                  height={35}
                />
                SQL Express
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/oracle-icon.svg"
                  alt="OracleLogo"
                  width={35}
                  height={35}
                />
                Oracle
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.programmingLanguageTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/javascript-icon.svg"
                  alt="JavascriptLogo"
                  width={35}
                  height={35}
                />
                JavaScript
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/typescript-icon.svg"
                  alt="TypescriptLogo"
                  width={35}
                  height={35}
                />
                TypeScript
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/java-icon.svg"
                  alt="JavaLogo"
                  width={35}
                  height={35}
                />
                Java
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/csharp-icon.svg"
                  alt="CsharpLogo"
                  width={35}
                  height={35}
                />
                C#
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.versionControlTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/github-icon.svg"
                  alt="GithubLogo"
                  width={35}
                  height={35}
                />
                GitHub
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/gitlab-icon.svg"
                  alt="GitlabLogo"
                  width={35}
                  height={35}
                />
                GitLab
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/bitbucket-icon.svg"
                  alt="BitbucketLogo"
                  width={35}
                  height={35}
                />
                Bitbucket
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.cloudTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/aws-icon.svg"
                  alt="AwsLogo"
                  width={35}
                  height={35}
                />
                AWS (Lambda, Cognito, S3)
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/azure-icon.svg"
                  alt="AzureLogo"
                  width={35}
                  height={35}
                />
                Azure (Azure service)
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {t("TechnicalSkills.othersTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/jenkins-icon.svg"
                  alt="JenkinsLogo"
                  width={35}
                  height={35}
                />
                Jenkins
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/docker-icon.svg"
                  alt="DockerLogo"
                  width={35}
                  height={35}
                />
                Docker
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/confluence-icon.svg"
                  alt="ConfluenceLogo"
                  width={35}
                  height={35}
                />
                {t("TechnicalSkills.confluence")}
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/jira-icon.svg"
                  alt="JiraLogo"
                  width={35}
                  height={35}
                />
                {t("TechnicalSkills.jira")}
              </div>
            </ul>
          </div>
        </div>
      </section>

      {/* Educación Section */}
      <section id="educacion" className="mb-12 pt-36 lg:pt-20 -mt-16">
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("Education.sectionTitle")}
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>{t("Education.degree")}</li>
        </ul>
        <div className="mt-4 flex gap-4">
          <a
            href="/pdf/certificado-titulo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            {t("Education.viewCertificate")}
          </a>
          <a
            href="/pdf/certificado-titulo.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
          >
            {t("Education.downloadCertificate")}
          </a>
        </div>
      </section>

      {/* Idioma Section */}
      <section id="idioma" className="mb-12 pt-36 lg:pt-20 -mt-16">
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("Language.sectionTitle")}
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>{t("Language.certificate")}</li>
        </ul>
        <div className="mt-4 flex gap-4">
          <a
            href="/pdf/certificado-ingles.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            {t("Language.viewCertificate")}
          </a>
          <a
            href="/pdf/certificado-ingles.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
          >
            {t("Language.downloadCertificate")}
          </a>
        </div>
      </section>

      {/* Carta de Recomendaciones Section */}
      <section
        id="carta-recomendaciones"
        className="mb-12 pt-36 lg:pt-20 -mt-16"
      >
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("Recommendations.sectionTitle")}
        </h2>

        {/* Recommendation 1: Juan Patricio Rojas Morales */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 dark:bg-gray-700 dark:shadow-lg">
          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            {t("Recommendations.jprm.date")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.jprm.paragraph1")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.jprm.paragraph2")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.jprm.paragraph3")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.jprm.paragraph4")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.jprm.paragraph5")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.jprm.paragraph6")}
          </p>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            {t("Recommendations.jprm.closing")}
          </p>
          <p className="font-semibold text-gray-800 dark:text-gray-100">
            {t("Recommendations.jprm.name")}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("Recommendations.jprm.title")}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("Recommendations.jprm.address")}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            jrojasmo@ripley.com | +56 984577319
          </p>
        </div>

        {/* Recommendation 2: Richard Casas */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            {t("Recommendations.rc.date")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.rc.paragraph1")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.rc.paragraph2")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.rc.paragraph3")}
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            {t("Recommendations.rc.paragraph4")}
          </p>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            {t("Recommendations.rc.closing")}
          </p>
          <p className="font-semibold text-gray-800 dark:text-gray-100">
            {t("Recommendations.rc.name")}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("Recommendations.rc.title")}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Alcántara N°44, Piso 7, Las Condes, www.aligare.cl, +56 2 22320303,
            +56 9 66554953
          </p>
        </div>
      </section>

      {/* Redes Sociales Section */}
      <section id="redes-sociales" className="mb-12 pt-36 lg:pt-20 -mt-16">
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("SocialNetworks.sectionTitle")}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 text-gray-700 dark:text-gray-300">
          <a
            href="https://www.linkedin.com/in/emmanuel-morales-inzunza-0b5a4a333/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl transition"
          >
            <img
              src="/icons/linkedin-icon.svg"
              alt="LinkedIn"
              className="h-5 w-5"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/emoralesi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl transition"
          >
            <img
              src="/icons/github-icon.svg"
              alt="GitHub"
              className="h-5 w-5"
            />
            GitHub
          </a>
        </div>
        <br />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("SocialNetworks.sectionSubTitle")}
        </h2>

        {/* Proyectos */}
        <div className="mt-6 space-y-8 max-w-xl mx-auto">
          {/* Proyecto 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
              CV Online
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              {t("SocialNetworks.proyect_1.description")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
              {t("SocialNetworks.proyect_1.tecnologies")}
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://cv-9vk8pgu5y-emoralesis-projects.vercel.app/es/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                {t("SocialNetworks.visit")}
              </a>
              <a
                href="https://github.com/emoralesi/cv-web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73
            1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933
            0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.404c1.018.004 2.045.138 3.003.404
            2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.37.814 1.103.814 2.222
            0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub Frontend
              </a>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
              Kitchen Blog
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              {t("SocialNetworks.proyect_2.description")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
              {t("SocialNetworks.proyect_2.tecnologies")}
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://kitchen-blog-front.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                {t("SocialNetworks.visit")}
              </a>
              <a
                href="https://github.com/emoralesi/KitchenBlogFront"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73
            1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933
            0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.404c1.018.004 2.045.138 3.003.404
            2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.37.814 1.103.814 2.222
            0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub Frontend
              </a>
              <a
                href="https://github.com/emoralesi/KitchenBlogBack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73
            1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933
            0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.404c1.018.004 2.045.138 3.003.404
            2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.37.814 1.103.814 2.222
            0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub Backend
              </a>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-600">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
              Role Manager App
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              {t("SocialNetworks.proyect_3.description")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
              {t("SocialNetworks.proyect_3.tecnologies")}
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://role-manager-front-umber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                {t("SocialNetworks.visit")}
              </a>
              <a
                href="https://github.com/emoralesi/role-manager-front"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
        -1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997
        .107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.47-2.38 1.236-3.22
        -.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.404
        c1.018.004 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176
        .77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.37.814 1.103.814 2.222
        0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12
        c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Frontend
              </a>
              <a
                href="https://github.com/emoralesi/backend-my-proyect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
        -1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997
        .107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.47-2.38 1.236-3.22
        -.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.404
        c1.018.004 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176
        .77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.37.814 1.103.814 2.222
        0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12
        c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Backend
              </a>
            </div>
          </div>
        </div>

        <br />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("SocialNetworks.futureProjects")}
        </h2>

      </section>
    </div>
  );
}
