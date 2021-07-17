import Image from "next/image";

import styles from "./styles/PokemonsPreview.module.scss";

type PokemonPreviewProps = {
  name: string;
  id: string;
  img: string;
};

export const PokemonPreview = (props: PokemonPreviewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <Image src={props.img} alt={props.name} width={200} height={130} />
      </div>
      <div className={styles.info}>
        <h1>{props.name}</h1>
        <span>{props.id.padStart(3, "0")}</span>
      </div>
    </div>
  );
};
