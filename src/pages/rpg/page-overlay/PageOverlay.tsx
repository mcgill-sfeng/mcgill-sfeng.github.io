import { DownloadButton } from "../download-button";
import { Overlay } from "@mantine/core";
import styles from "./PageOverlay.module.css";

export const PageOverlay = () => (
    <Overlay className={styles["root"]} fixed backgroundOpacity={0}>
        <DownloadButton />
    </Overlay>
);
