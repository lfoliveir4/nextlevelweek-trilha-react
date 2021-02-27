import { ReactElement } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengeProvider } from "../context/ChallengeContext";
import { CountdownProvider } from "../context/CountdownContext";

import styles from "../styles/pages/home.module.css";

interface HomeProps {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export default function Home(props: HomeProps): ReactElement {
  return (
    <ChallengeProvider
      level={props.level}
      challengesCompleted={props.challengesCompleted}
      currentExperience={props.currentExperience}
    >
      <CountdownProvider>
        <div className={styles.container}>
          <Head>
            <title>Inicio | Moveit</title>
          </Head>

          <ExperienceBar />

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </div>
      </CountdownProvider>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, challengesCompleted, currentExperience } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience),
    },
  };
};
