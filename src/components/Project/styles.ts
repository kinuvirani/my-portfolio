import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* This ensures 3 items per row */
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%; /* Ensure the container doesn't exceed full width */
    grid-auto-rows: minmax(250px, auto); /* Adjust project height as needed */
  }

  .project {
    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 3.6rem;
      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      a > img {
        width: 5rem;
      }
    }

    h3 {
      margin-bottom: 2rem;
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
      a {
        color: #fff;
        border-bottom: 1px solid var(--green);
        transition: color 0.25s;
        &:hover {
          color: var(--green);
        }
      }
    }

    footer {
      margin-top: auto;
      .tech-list {
        display: flex;
        align-items: center;
        gap: 1rem; /* Adjust gap to prevent overflow */
        font-size: 1.4rem;
        opacity: 0.6;
        flex-wrap: wrap; /* Allow wrapping if there isn't enough space */
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr); /* For medium screen size */
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr; /* For small screen size */
    }
  }
`;
