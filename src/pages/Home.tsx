import { memberCarousel } from '../components/memberCarousel.tsx';

const HomePage = () => {
	return (
		<>
			<div className="flex flex-col items-center h-screen w-screen gradient-bg no-scrollbar">
				{/* Navigation Bar */}
				<nav className="flex border-b justify-between items-center w-[70vw] py-5 mt-1 ">
					<div className="flex items-center text-lg font-bold text-white">
						FGL
					</div>
					<ul className="nav-links list-none flex gap-5 text-white">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#members">Members</a>
						</li>
						<li>
							<a href="#portfolios">Portfolios</a>
						</li>
						<li>
							<a href="#about">About Us</a>
						</li>
					</ul>
					<button className="px-3 py-1 text-white rounded-full border-2">
						Blogs
					</button>
				</nav>

				{/* Header Section */}
				<header className="header w-screen flex flex-grow flex-col  justify-center items-center gap-1">
					<h1 className="text-6xl font-bold underline text-white my-2">
						Future Gadget Laboratory
					</h1>
					<h2 className="text-6xl  text-white">
						Where Developers Turn Ideas into <br />
						Reality
					</h2>
					<p className="text-white my-11 ">
						Explore Our Team's Portfolios, Innovative Projects, and Upcoming
						Blog Insights
					</p>
					<svg
						width="489"
						height="120"
						viewBox="0 0 489 70 "
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							className="animate-bounce delay-0"
							cx="118"
							cy="49"
							r="49"
							fill="#BD4D4D"
						/>
						<circle
							className="animate-bounce delay-75"
							cx="181"
							cy="49"
							r="49"
							fill="#D9D9D9"
						/>
						<circle
							className="animate-bounce delay-100"
							cx="240"
							cy="49"
							r="49"
							fill="#76A46F"
						/>
						<circle
							className="animate-bounce delay-150"
							cx="303"
							cy="49"
							r="49"
							fill="#45398E"
						/>
						<circle
							className="animate-bounce delay-200"
							cx="370"
							cy="49"
							r="49"
							fill="#A84072"
						/>
					</svg>
				</header>
			</div>

			{/* Members Section */}
			<div className="flex flex-col justify-center items-center h-screen w-screen ">
				<div className="flex flex-col border w-[80%] h-[77%] items-start">
					<h1 className="text-black text-5xl border">Members</h1>
					<div className="border self-center flex justify-center items-center h-full">
						{memberCarousel()}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
