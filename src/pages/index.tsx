import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChellenges } from '../components/CompletedChellenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'


import styles from '../styles/pages/Home.module.css'
import { ChallendBox } from '../components/ChallendBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentEcperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentEcperience={props.currentEcperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChellenges />
              <Countdown />
            </div>
            <div>
              <ChallendBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentEcperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentEcperience: Number(currentEcperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}