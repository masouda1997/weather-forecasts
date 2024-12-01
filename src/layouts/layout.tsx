import { ReactElement, ReactNode } from "react";
import backgroundPicker from "../utility/backgroundPicker";

interface InLayout {
	children: ReactNode;
}



const Layout = ({ children }: InLayout): ReactElement => {
	return (
		<main
			style={{
				backgroundImage: `url(/bg${backgroundPicker(1, 3)}.jpg)`,
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
