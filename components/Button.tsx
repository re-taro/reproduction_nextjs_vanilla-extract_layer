"use client";

import type { ReactNode } from "react";
import * as styles from "./Button.css";

export default function Button({ children }: { children: ReactNode }) {
	return (
		<button onClick={() => console.log("click")} className={styles.button}>
			{children}
		</button>
	);
}
