import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallendBox.module.css';

export function ChallendBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function hendleChallengeSuccesded() {
        completeChallenge();
        resetCountdown();
    }

    function hendleChallengeFaleid() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challendBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challendActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafios</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challendFailedButton}
                            onClick={hendleChallengeFaleid}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challedSucceededButton}
                            onClick={hendleChallengeSuccesded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challendNotActive}>
                        <strong>Finalize um ciclo para receber desafios</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios.
                </p>
                    </div>
                )
            }
        </div >
    )
}