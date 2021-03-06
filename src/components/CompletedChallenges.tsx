import { ReactElement, useContext } from "react";
import { ChallengeContext } from "../context/ChallengeContext";
import styles from "../styles/components/completedchallenges.module.css";

export function CompletedChallenges(): ReactElement {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
