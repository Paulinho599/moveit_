import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentEcperience, experienceToNexLevel } = useContext(ChallengesContext);

    const percentToNexLevel = Math.round(currentEcperience * 100) / experienceToNexLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNexLevel}%` }} />

                <span className={styles.currenteExperience} style={{ left: `${percentToNexLevel}%` }}>
                    {currentEcperience} xp
                </span>
            </div>
            <span>{experienceToNexLevel} xp</span>
        </header>
    );
}