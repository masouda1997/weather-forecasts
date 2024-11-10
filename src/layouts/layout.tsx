import { ReactElement, ReactNode } from "react";

interface InLayout {
	children: ReactNode;
}

const randomImage = (numMin: number, numMax: number): string => {
	return Math.floor(
		Math.random() * (Math.floor(numMax) - Math.ceil(numMin) + 1) +
			Math.ceil(numMin)
	).toString();
};

const Layout = ({ children }: InLayout): ReactElement => {
	return (
		<main
			style={{
				backgroundImage: `url(/bg${randomImage(1, 3)}.jgp)`,
			}}
			className={` bg-cover`}
		>
			{children}
		</main>
	);
};

export default Layout;

// @@@@@@@@@@@@@ code trashes @@@@@@@@@@@@
// bg-[url(../public/bg${randomImage(1,3)}.jpg)]
