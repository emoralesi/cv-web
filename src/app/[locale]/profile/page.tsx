import { inter } from "@/app/ui/fonts";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations("Presentacion");

  return (
    <div className="px-4 py-8 bg-white text-black dark:bg-gray-800 dark:text-gray-100 m-0 w-auto ">
      {/* Presentacion Section */}
      <section id="presentacion" className={`mb-12 pt-36 lg:pt-18 transition`}>
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          {t("sectionTitle")}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              {t("paragraph1_part1")}
              <span className="font-bold">{t("companyAligare")}</span>
              {t("paragraph1_part2")}
              <span className="font-bold">{t("companyCruzVerde")}</span>,{" "}
              <span className="font-bold">{t("companyClaro")}</span> y{" "}
              <span className="font-bold">{t("companyRipley")}</span>.
              {t("paragraph1_part3")}
              <span className="font-bold">{t("companyRipley")}</span>
              {t("paragraph1_part4")}
              <span className="font-bold">{t("companyAligare")}</span>
              {t("paragraph1_part5")}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techReact")}{" "}
                <img
                  src="/icons/react-icon.svg"
                  alt="React"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techAngular")}{" "}
                <img
                  src="/icons/angular-icon.svg"
                  alt="Angular"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techNode")}{" "}
                <img
                  src="/icons/nodejs-icon.svg"
                  alt="Node.js"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techJava")}{" "}
                <img
                  src="/icons/java-icon.svg"
                  alt="Java Spring Boot"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techDotnet")}{" "}
                <img
                  src="/icons/dotnet-icon.svg"
                  alt=".NET Core"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techPostgres")}{" "}
                <img
                  src="/icons/postgresql-icon.svg"
                  alt="PostgreSQL"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techMongo")}{" "}
                <img
                  src="/icons/mongodb-icon.svg"
                  alt="MongoDB"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techOracle")}{" "}
                <img
                  src="/icons/oracle-icon.svg"
                  alt="Oracle"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techDocker")}{" "}
                <img
                  src="/icons/docker-icon.svg"
                  alt="Docker"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              ,{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techJenkins")}{" "}
                <img
                  src="/icons/jenkins-icon.svg"
                  alt="Jenkins"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>{" "}
              y{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techGit")}{" "}
                <img
                  src="/icons/git-icon.svg"
                  alt="Git"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              , {t("paragraph1_part6")}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techJira")}{" "}
                <img
                  src="/icons/jira-icon.svg"
                  alt="Jira"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>{" "}
              y{" "}
              <span className="inline-flex items-center whitespace-nowrap font-bold">
                {t("techConfluence")}{" "}
                <img
                  src="/icons/confluence-icon.svg"
                  alt="Confluence"
                  className="ml-1 h-4 w-4 inline"
                />
              </span>
              .{t("paragraph1_part7")}
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
          Experiencia Profesional
        </h2>
        <div className="space-y-8">
          {/* Aligare */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              <span className="font-bold">Aligare</span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              Desarrollador <span className="font-bold">Full Stack</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Noviembre 2021 - Mayo 2024
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                Desarrollé aplicaciones de software, estimadas y respaldadas con
                éxito para la consultora{" "}
                <span className="font-bold">Aligare</span> donde además trabajé
                en proyectos para <span className="font-bold">Ripley</span>,{" "}
                <span className="font-bold">Claro</span> y{" "}
                <span className="font-bold">Cruz Verde</span>.
              </li>
              <li>
                Implementé modelos de datos robustos y consultas optimizadas en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  PostgreSQL{" "}
                  <img
                    src="/icons/postgresql-icon.svg"
                    alt="PostgreSQL"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                para mejorar la gestión y recuperación de datos.
              </li>
              <li>
                Utilicé una variedad de tecnologías, incluidas{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  React{" "}
                  <img
                    src="/icons/react-icon.svg"
                    alt="React"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Angular{" "}
                  <img
                    src="/icons/angular-icon.svg"
                    alt="Angular"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  NodeJS{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="NodeJS"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                y{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Java{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                , para crear aplicaciones escalables y eficientes.
              </li>
              <li>
                Desarrollé aplicaciones <span className="font-bold">Web</span> y
                de <span className="font-bold">Escritorio</span>.
              </li>
              <li>
                Colaboré con diferentes equipos{" "}
                <span className="font-bold">multifuncionales</span> para ofrecer
                productos de software de{" "}
                <span className="font-bold">alta calidad</span>.
              </li>
              <li>
                Habilidades Técnicas:{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  React{" "}
                  <img
                    src="/icons/react-icon.svg"
                    alt="React"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Angular{" "}
                  <img
                    src="/icons/angular-icon.svg"
                    alt="Angular"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  JavaScript{" "}
                  <img
                    src="/icons/javascript-icon.svg"
                    alt="JavaScript"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  NodeJS{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="NodeJS"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Spring Boot{" "}
                  <img
                    src="/icons/springboot-icon.svg"
                    alt="Spring Boot"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  PostgreSQL{" "}
                  <img
                    src="/icons/postgresql-icon.svg"
                    alt="PostgreSQL"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  SQLServer{" "}
                  <img
                    src="/icons/sql-icon.svg"
                    alt="SQLServer"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Oracle{" "}
                  <img
                    src="/icons/oracle-icon.svg"
                    alt="Oracle"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  MongoDB{" "}
                  <img
                    src="/icons/mongodb-icon.svg"
                    alt="MongoDB"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Docker{" "}
                  <img
                    src="/icons/docker-icon.svg"
                    alt="Docker"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Jenkins{" "}
                  <img
                    src="/icons/jenkins-icon.svg"
                    alt="Jenkins"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Java 8{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java 8"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Git{" "}
                  <img
                    src="/icons/git-icon.svg"
                    alt="Git"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Jira{" "}
                  <img
                    src="/icons/jira-icon.svg"
                    alt="Jira"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                y{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Confluence{" "}
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
              <span className="font-bold">Farmacias Cruz Verde Chile</span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              Desarrollador <span className="font-bold">full stack</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Noviembre 2021 - Enero 2022
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                Desarrollé un{" "}
                <span className="font-bold">sistema transaccional</span> para{" "}
                <span className="font-bold">Cruz Verde Chile/Colombia</span>.
              </li>
              <li>
                Utilicé las siguientes tecnologías para su desarrolló:{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  React Js{" "}
                  <img
                    src="/icons/react-icon.svg"
                    alt="React Js"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Node Js{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="Node Js"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Sequalize{" "}
                  <img
                    src="/icons/sequelize-icon.svg"
                    alt="Sequalize"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                ,{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  AWS Lambda{" "}
                  <img
                    src="/icons/aws-icon.svg"
                    alt="AWS Lambda"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                y{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Git Lab{" "}
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
              <span className="font-bold">Ripley Chile y Peru</span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              Desarrollador <span className="font-bold">full stack</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Febrero 2022 - Diciembre 2023
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                <span className="font-bold">Corrección de datos</span> en base
                de datos{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  PostgreSQL{" "}
                  <img
                    src="/icons/postgresql-icon.svg"
                    alt="PostgreSQL"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                de producción.
              </li>
              <li>
                Desarrollo de <span className="font-bold">APIs RESTful</span> en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Node Js{" "}
                  <img
                    src="/icons/nodejs-icon.svg"
                    alt="Node Js"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                para su uso en diferentes areas de{" "}
                <span className="font-bold">Ripley</span>.
              </li>
              <li>
                <span className="font-bold">Monitoreos de servicios</span> en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Jenkins{" "}
                  <img
                    src="/icons/jenkins-icon.svg"
                    alt="Jenkins"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
              <li>
                <span className="font-bold">Gestión de tickets</span> en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Jira{" "}
                  <img
                    src="/icons/jira-icon.svg"
                    alt="Jira"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>
                .
              </li>
              <li>
                Crear{" "}
                <span className="font-bold">documentación de procesos</span> en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Confluence{" "}
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
                  Actualizaciones al software de transacciones
                </span>{" "}
                de <span className="font-bold">Ripley</span> desarrollado en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Java{" "}
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
              <span className="font-bold">Claro Chile S.A</span>
            </h3>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              Desarrollador <span className="font-bold">full stack</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Febrero 2024 - Mayo 2024
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              <li>
                <span className="font-bold">Modificar software</span>{" "}
                desarrollado en{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  Java 8{" "}
                  <img
                    src="/icons/java-icon.svg"
                    alt="Java 8"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                de <span className="font-bold">Claro</span>.
              </li>
              <li>
                <span className="font-bold">Agregar nueva identidad</span> al
                software desarrollado.
              </li>
              <li>
                Utilizar{" "}
                <span className="inline-flex items-center whitespace-nowrap font-bold">
                  GitHub{" "}
                  <img
                    src="/icons/github-icon.svg"
                    alt="GitHub"
                    className="ml-1 h-4 w-4 inline"
                  />
                </span>{" "}
                para controlar las versiones.
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
          Competencias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div>
            <ul className="list-disc list-inside">
              <li>Conocimientos técnicos sólidos y en continuo crecimiento</li>
              <li>Capacidad de solucionar problemas</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>Adaptabilidad para las nuevas tecnologías</li>
              <li>Comunicación efectiva</li>
              <li>Gestión del tiempo de las tareas a realizar</li>
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
          Competencias Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Front-end:
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
              Back-end:
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
              Base de Datos:
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
              Lenguaje de Programación:
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
              Control de Versiones:
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
              Cloud:
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
              Otros:
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
                Documentación con Confluence
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/jira-icon.svg"
                  alt="JiraLogo"
                  width={35}
                  height={35}
                />
                Distribución y monitoreo de tareas con Jira
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
          Educación
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Ingeniería en informática Duoc UC</li>
        </ul>
        <div className="mt-4 flex gap-4">
          <a
            href="/pdf/certificado-titulo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            Ver Certificado de Titulo
          </a>
          <a
            href="/pdf/certificado-titulo.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
          >
            Descargar Certificado de Titulo
          </a>
        </div>
      </section>

      {/* Idioma Section */}
      <section id="idioma" className="mb-12 pt-36 lg:pt-20 -mt-16">
        <hr className="bg-white" />
        <h2
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-900 dark:text-white`}
        >
          Idioma
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>
            Certificado de Inglés IELTS B2 (independiente), Examen realizado en
            Glasgow, Scotland
          </li>
        </ul>
        <div className="mt-4 flex gap-4">
          <a
            href="/pdf/certificado-ingles.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            Ver Certificado IELTS
          </a>
          <a
            href="/pdf/certificado-ingles.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
          >
            Descargar Certificado IELTS
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
          Carta de Recomendaciones
        </h2>

        {/* Recommendation 1: Juan Patricio Rojas Morales */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 dark:bg-gray-700 dark:shadow-lg">
          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Santiago de Chile, 09 de Julio de 2024
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Estimados, Me complace escribir esta carta de recomendación para
            Emmanuel Morales Inzunza, quien ha trabajado como Ingeniero
            Informático en Ripley.com bajo mi supervisión directa, en el área de
            Gestión de Servicios Transaccionales a nivel Corporativo (Chile -
            Perú). Durante su tiempo con nosotros, Emmanuel ha demostrado ser un
            profesional excepcional, contribuyendo significativamente al
            desarrollo de nuestra área de tecnología.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Emmanuel posee un manejo sobresaliente de las tecnologías más
            recientes y una capacidad notable para adaptarse rápidamente a
            nuevos sistemas y herramientas. Su habilidad para analizar y
            resolver problemas técnicos es impresionante, y a menudo ha ofrecido
            soluciones innovadoras y efectivas a desafíos complejos. Su enfoque
            analítico y detallado asegura que cualquier proyecto en el que
            trabaja se realice con precisión y calidad.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Una de las cualidades más destacadas de Emmanuel es su proactividad.
            No solo cumple con sus tareas asignadas, sino que constantemente
            busca maneras de mejorar procesos y optimizar el rendimiento de
            nuestros sistemas. Esta iniciativa ha sido invaluable para nuestra
            empresa, y su disposición para asumir responsabilidades adicionales
            ha sido ampliamente apreciada.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Además, Emmanuel es conocido por su capacidad para trabajar en
            equipo. Colabora eficazmente con sus compañeros, compartiendo
            conocimientos y apoyando a los demás para alcanzar los objetivos
            comunes. Su capacidad para comunicarse claramente y trabajar en
            conjunto con otros departamentos ha sido crucial para el éxito de
            nuestros proyectos.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Emmanuel también se destaca por su esfuerzo y cumplimiento de
            tiempos. Siempre ha demostrado un compromiso inquebrantable para
            cumplir con los plazos establecidos, asegurando que los proyectos se
            completen de manera oportuna y sin comprometer la calidad del
            trabajo. Su ética de trabajo y dedicación son ejemplares.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            En resumen, Emmanuel Morales ha sido un gran aporte para el
            desarrollo de nuestra área de tecnología durante su tiempo en
            nuestra empresa. Su profesionalismo, habilidades técnicas y actitud
            proactiva lo convierten en un activo valioso para cualquier equipo.
            Dado el alto nivel de desempeño que ha demostrado, no dudaría en
            trabajar nuevamente con él en el futuro.
          </p>
          <p className="text-gray-700 mb-2 dark:text-gray-200">Atentamente,</p>
          <p className="font-semibold text-gray-800 dark:text-gray-100">
            Juan Patricio Rojas Morales | Empresas Ripley
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Defect Manager & Líder de Gestion De Servicios Transaccionales Corp.
            Gerencia Continuidad Operacional y QA
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Alonso de Cordoba 5320, Piso 9. Las Condes - Santiago - Chile.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            jrojasmo@ripley.com | +56 984577319
          </p>
        </div>

        {/* Recommendation 2: Richard Casas */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700 dark:shadow-lg">
          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            11 de julio de 2024, 9:53
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            A quien corresponda, Tengo el agrado de recomendar a Emmanuel
            Morales, quien trabajó conmigo desde febrero de 2021 en Consultora
            Tecnológica Aligare, hasta mayo de este año. Durante este tiempo,
            Emmanuel demostró ser un profesional comprometido y una pieza clave
            para nuestro equipo.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Emmanuel tuvo una excelente disposición y una gran capacidad de
            aprendizaje, lo que le permitió adaptarse rápidamente a nuevos
            desafíos tanto personales como tecnológicos. Su habilidad para
            trabajar en equipo fue sobresaliente, colaborando eficazmente con
            sus compañeros y manteniendo una relación fluida y profesional con
            nuestros clientes.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            Además, Emmanuel mostró una buena capacidad de análisis, autonomía y
            gran responsabilidad. Estas cualidades le permitieron abordar y
            resolver problemas de manera eficiente, cumpliendo siempre con los
            plazos establecidos y manteniendo un alto nivel de calidad en su
            trabajo.
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            En resumen, considero que Emmanuel Morales sería una excelente
            incorporación para cualquier equipo y estoy seguro de que continuará
            sobresaliendo en cualquier proyecto que emprenda. Estoy a su
            disposición para proporcionar cualquier información adicional que
            pueda necesitar.
          </p>
          <p className="text-gray-700 mb-2 dark:text-gray-200">Atentamente,</p>
          <p className="font-semibold text-gray-800 dark:text-gray-100">
            Richard Casas Farias
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Gerente de Operaciones
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
          Redes Sociales
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
        <h2 className="bold">
          Futuros proyectos seran publicados, de momento estan siendo
          desarrollados y puedes ver su progreso en GitHub !
        </h2>
      </section>
    </div>
  );
}
