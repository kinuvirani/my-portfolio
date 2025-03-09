import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3> Trading App</h3>
              <p>
                {" "}
                Developed a high-performance trading application for processing
                trade data, increasing positions, and managing transactions.
                Utilized Hibernate and JDBC for database operations, RabbitMQ
                for asynchronous messaging, and MySQL for data persistence.
                Optimized trade execution workflow for real-time data updates.
                Implemented robust error handling and ensured high availability
                for trading operations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Hibernate</li>
                <li>RabbitMQ</li>
                <li>JDBC</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3> Recreational Event App</h3>
              <p>
                {" "}
                Designed and developed a recreational event management
                application that allows users to browse and register for
                courses. Integrated Twilio SMS for user notifications and
                implemented two-factor authentication (2FA) using Twilio OTP.
                Secured user authentication with Spring Security and Okta
                OAuth2. Used SendGrid for email notifications and Kafka for
                event-driven messaging. Optimized real-time event updates with
                Artemis message broker.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PostgreSQL</li>
                <li>Spring Boot</li>
                <li>Spring JPA</li>
                <li>Spring Security</li>
                <li>Okta OAuth2</li>
                <li>Twilio</li>
                <li>SendGrid</li>
                <li>Artemis</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="211112qqqhttp://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://gitlab.com/lambton_clg/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> Weather-app</h3>
              <p>
                {" "}
                Developed Python Flask weather app with GitLab CI/CD for weather
                updates for specific cities. Utilized Docker GitLab for version
                control. Automated deployment with GitLab Runner, GCP VM setup.
                Implemented CI/CD pipeline with build, test, deploy stages.
                Conducted tests(Unit, Integration) for reliability. Deployed app
                for public access.
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Python</li> <li>Flask</li> <li>GCP</li> <li>Gitlab</li>
                <li>CI/CD</li> <li>Docker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/kinuvirani/Ecom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-commerce</h3>
              <p>
                This platform empowers users to engage in online shopping. The
                application was constructed using Docker and subsequently
                deployed on EC2 instances, which were manually created through
                the AWS console for both the front end and backend.
                Additionally, a Jenkins pipeline was employed for Continuous
                Integration and Continuous Deployment (CI/CD) purposes,
                streamlining the process and ensuring a secure and error-free
                deployment.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li> Node.js</li>
                <li> Express.js</li>
                <li> MySQL</li>
                <li>AWS</li>
                <li> GitHub</li>
                <li> Jenkins</li>
                <li>CI/CD</li>
                <li> Docker</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.crunchbase.com/organization/lock-stock"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Lockandstock</h3>
              <p>
                This application enables users to set a designated period during
                which their phone will be locked, encouraging them to cultivate
                a habit of taking breaks from their device. The aim is to divert
                their attention to other activities such as studying for
                students, addressing children’s needs for parents, and focusing
                on business tasks for professionals.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li> Javascript</li>
                <li> Node.js</li>
                <li> Express.js</li>
                <li>MySQL</li>
                <li> AWS</li>
                <li> Github</li>
                <li>CI/CD</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Solicitation System</h3>
              <p>
                This is a specialized job portal designed for government jobs in
                the US territory of Guam. The platform allows applicants to
                easily find and apply for jobs that match their interests and
                requirements. Users can also subscribe to receive notifications
                regarding job openings. In this context, the term ”solicitation”
                refers to the process of inviting applications or proposals for
                job opportunities.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Bitbucket</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Gearup Camera</h3>
              <p>
                This is an E-commerce application specifically designed for
                buying and selling camera gear. Users can easily browse through
                the available products and place orders either by making online
                payments or by adding funds to their app wallet. The app also
                facilitates communication between buyers and sellers to ensure a
                smooth transaction process.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Mongodb</li>
                <li>AWS</li>
                <li>Stripe</li>
                <li>Twilio</li>
                <li>Bitbucket</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://24carrots.cpptl.co/login/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>24-carrots</h3>
              <p>
                This is an event management web application that empowers users
                to create and manage events on behalf of clients. Users have the
                flexibility to handle various aspects of the event, including
                selecting the venue, designing the menu, choosing recipes and
                ingredients, offering different packages, coordinating staff,
                and applying discounts. The web app provides comprehensive tools
                for efficient event planning and execution.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li> Javascript</li>
                <li> Node.js</li>
                <li> React.js</li>
                <li> feathers.js</li>
                <li>PostgreSQL</li>
                <li> Gitlab</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://app.sendbay.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sendbay</h3>
              <p>
                This web application consolidates various communication tools
                such as SMS, email, and push notifications into a unified
                platform. With this app, users can integrate push notifications
                and email functionality into their own applications without the
                need to separately integrate multiple services. By utilizing our
                app, users can efficiently implement both push notifications and
                email capabilities in a streamlined manner.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li> Javascript</li>
                <li> Node.js</li>
                <li> React.js</li>
                <li> GraphQL</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
                <li>Twilio</li>
                <li> Gitlab</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
