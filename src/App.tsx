import "./index.css";
import Layout from "./layouts/layout";
import SearchBox from "./components/SearchBox";
import main from "./assets/styles/main.module.css";

import { BsBuildings } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { AiOutlineFall } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";


import fogIcon from './assets/images/fogIcon.svg'

function App() {
	return (
		<Layout>
			{/* <Counter/> */}
			<main className="flex justify-between items-center flex-col h-screen">
				<SearchBox />
				<section className={`${main.container} w-full  h-[90%]`}>
					<section
						className={`${main.generalInfo} flex flex-col justify-between `}
					>
						<div className="flex justify-between">
							<div className="flex flex-col items-start ">
								<span className="capitalize text-sm">
									monday
								</span>
								<span className="capitalize font-bold flex items-center justify-start gap-1 ">
									tehran <BsBuildingsFill />{" "}
								</span>
							</div>
							<div className="text-sm font-semibold">
								12:15:20
							</div>
						</div>
						<div className="flex justify-center items-center basis-1 font-black text-9xl">
							{15}&deg;
						</div>
						<div className="flex justify-between items-center ">
							<figure>
								<img src={fogIcon} alt="" />
								<figcaption className="capitalize text-sm">foggy weather</figcaption>
							</figure>
							<span className="self-end flex gap-4">
								<span className="inline-flex justify-center items-center"> 
									<strong>{10}&deg;</strong> 
									<AiOutlineFall/> 
								</span>
								<span className="inline-flex justify-center items-center ">
									<strong>{17}&deg;</strong>
									<AiOutlineRise/>
								</span>
							</span>
						</div>
					</section>
					<section className={`${main.fiveDayFactors} `}>2w</section>
					<section className={`${main.wdf} `}>2</section>
					<section className={`${main.mo} `}>3</section>
					<section className={`${main.map} `}>4</section>
				</section>
			</main>
		</Layout>
	);
}

export default App;
