import { Container } from "./styles";
import phpIcon from "../../assets/php.svg";
import pythonIcon from "../../assets/python.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import dockerIcon from "../../assets/docker.svg";
import kubernetesIcon from "../../assets/kubernetes.svg";
import ScrollAnimation from "react-animate-on-scroll";
import javaIcon from "../../assets/java.svg";
import springBootIcon from "../../assets/springboot.svg";
import kafkaIcon from "../../assets/kafka.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Kiran, a Full Stack Developer with a proven track record of building user-centric web applications. My expertise spans both front-end and back-end development, leveraging React.js to craft immersive UIs and Node.js for building robust server-side solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            In addition to JavaScript technologies, I specialize in Java, utilizing Spring Boot and Hibernate to develop scalable, high-performance applications. I also have hands-on experience with messaging services like Kafka, ensuring efficient event-driven architectures.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My dedication to streamlining the development lifecycle extends into DevOps. I have a strong grasp of CI/CD pipelines, containerization with Docker and Docker Swarm, and container orchestration with Kubernetes, enabling seamless deployments and optimized infrastructure.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>
            I'm proficient in utilizing cloud platforms like AWS and GCP to deploy and manage web applications effectively.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={phpIcon} alt="PHP" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={dockerIcon} alt="Docker" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={kubernetesIcon} alt="Kubernetes" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={springBootIcon} alt="Spring Boot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={kafkaIcon} alt="Apache Kafka" />
            </ScrollAnimation>
          </div>
         
        </div>
      </div>
    </Container>
  )
}
