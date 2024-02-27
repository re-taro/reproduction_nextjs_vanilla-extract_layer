import { component } from "@/styles/layers.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	"@layer": {
		[component]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginBottom: "2em",
		},
	},
});
