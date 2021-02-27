import { useContext } from "react";
import { ChallengeContext } from "../context/ChallengeContext";
import styles from "../styles/components/profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lfoliveir4.png" alt="Luis" />

      <div>
        <strong>Luis Filipe</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
