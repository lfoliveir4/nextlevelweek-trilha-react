import { ReactElement, useContext } from "react";
import { ChallengeContext } from "../context/ChallengeContext";
import styles from "../styles/components/levelupmodal.module.css";

export function LevelUpModal(): ReactElement {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>parabens</strong>

        <p>voce alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
