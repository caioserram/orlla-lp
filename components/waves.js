import styles from "./waves.module.scss";

export default function WavesComponent() {
  return (
    <div>
    <img className={styles.wet_sand} src="wet_sand.svg"></img>
        <img className={styles.light_blue_wave} src="light_blue_wave.svg"></img>
        <img className={styles.dark_blue_wave} src="dark_blue_wave.svg"></img>
        <img className={styles.medium_dark_blue_wave} src="medium_dark_blue_wave.svg"></img>
    </div>
  );
}