import "./index.css";
import Layout from "./layouts/layout";
import SearchBox from "./components/SearchBox";
import main from "./assets/styles/main.module.css";

import { BsBuildings } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { AiOutlineFall } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";


import fogIcon from './assets/images/fogIcon.svg'
import cloudIcon from './assets/images/cloudyIcon.svg'
import { ConfigProvider, Switch } from "antd";

import { PiWindDuotone ,PiSunDim ,PiSunHorizonDuotone ,PiDrop , PiGauge ,PiUsersThreeDuotone   } from "react-icons/pi";
import { GiOrbitalRays } from "react-icons/gi";



function App() {
	return (
		<Layout>
			<main className="flex justify-between items-center flex-col h-screen">
				<SearchBox />
				<section className={`${main.container} w-full  h-[90%]`}>
					{/* general info */}
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
								<figcaption className="capitalize text-sm">
									foggy weather
								</figcaption>
							</figure>
							<span className="self-end flex gap-4">
								<span className="inline-flex justify-center items-center">
									<strong>{10}&deg;</strong>
									<AiOutlineFall />
								</span>
								<span className="inline-flex justify-center items-center ">
									<strong>{17}&deg;</strong>
									<AiOutlineRise />
								</span>
							</span>
						</div>
					</section>
					{/* today forecasts } */}
					<section
						className={`${main.todayForecast} flex flex-col justify-between `}
					>
						<h2 className="basis-1/5 capitalize font-semibold text-sm ">
							today's forecasts{" "}
						</h2>
						<section className="flex justify-start items-center basis-4/5">
							<div className=" flex flex-col items-center gap-2 justify-between h-full px-4 py-1">
								<p>00:00</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									11 &deg;{" "}
									<span className="uppercase">c</span>{" "}
								</p>
							</div>
							<div className=" flex flex-col items-center gap-2 justify-between h-full px-4 py-1">
								<p>00:00</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									11 &deg;{" "}
									<span className="uppercase">c</span>{" "}
								</p>
							</div>
							<div className=" flex flex-col items-center gap-2 justify-between h-full px-4 py-1">
								<p>00:00</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									11 &deg;{" "}
									<span className="uppercase">c</span>{" "}
								</p>
							</div>
							<div className=" flex flex-col items-center gap-2 justify-between h-full px-4 py-1">
								<p>00:00</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									11 &deg;{" "}
									<span className="uppercase">c</span>{" "}
								</p>
							</div>
						</section>
					</section>
					{/* weakly forecasts */}
					<section
						className={`${main.weaklyForecast} flex flex-col justify-between `}
					>
						<div className="basis-1/5 flex justify-between items-center">
							<h2 className="basis-1/5 self-start capitalize font-semibold text-sm ">
								weakly forecasts{" "}
							</h2>

							<ConfigProvider
								theme={{
									token:{
										colorPrimary:"#8c8c8c80"
									},
									components:{
										Switch:{
										}
									}
								}}
							>
								<Switch
									className="customBtn"
									checkedChildren="14 day"
									unCheckedChildren="7 day"
								/>
							</ConfigProvider>
						</div>

						<section className="flex justify-between items-center basis-4/5">
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">saturday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">sunday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">monday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">tuesday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">wednesday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">thursday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
							<div className=" flex flex-col  items-center gap-2 justify-between h-full px-4 py-1">
								<p className="text-sm capitalize">friday</p>
								<figure>
									<img src={cloudIcon} alt=" " />
								</figure>
								<p className="text-sm">
									<span className="uppercase font-semibold">
										16
									</span>
									/<span className="uppercase">12</span>
								</p>
							</div>
						</section>
					</section>
					{/* humidity */}
					<section className={`${main.humidity} `}>
						<h2 className="flex items-center gap-2 text-sm font-semibold capitalize">
							wind
							<PiWindDuotone/>
						</h2>
					</section>
					{/* pressure */}
					<section className={`${main.pressure} `}>
						<h2 className="flex items-center gap-2 text-sm font-semibold capitalize">
							pressure
							<PiGauge/>
						</h2>
					</section>
					{/* UV index  */}
					<section className={`${main.UVIndex} `}>
						<h2 className="flex items-center gap-2 text-sm font-semibold capitalize">
							UV index
							<GiOrbitalRays />
						</h2>
					</section>
					{/* wind direction  */}
					<section className={`${main.windDirection} `}>
						<h2 className="flex items-center gap-2 text-sm font-semibold capitalize">
							humidity
							<PiDrop />
						</h2>
					</section>
					{/* sun set  */}
					<section className={`${main.sunset} `}>
						<h2 className="flex items-center gap-2 text-sm font-semibold capitalize">
							sunset
							<PiSunHorizonDuotone />
						</h2>
					</section>
					{/* air pollution and population  */}
					<section className={`${main.airPollutionPopulation} `}>
						<h2 className="flex items-center gap-2 text-sm font-semibold capitalize">
							population & air pollution
							<PiUsersThreeDuotone />
						</h2>
					</section>
					{/* map */}
					<section className={`${main.map} `}>4</section>
				</section>
			</main>
		</Layout>
	);
}

export default App;
