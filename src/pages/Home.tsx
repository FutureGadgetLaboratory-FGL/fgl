import { CardWithForm } from '@/components/CardWithForm';

const HomePage = () => {
	return (
		// <div className="bg-green-600 w-screen h-screen min-w-screen min-h-screen flex">
		// 	<div className="bg-red-600 w-1/12 min-h-screen "></div>
		// 	<div className="overflow-scroll no-scrollbar">
		// 		<section className="bg-blue-500 h-screen w-screen">
		// 			<section className="bg-blue-600 h-[500px] w-screen">Header</section>
		// 			About FGL
		// 		</section>
		// 		<section className="bg-blue-400 h-[500px] w-screen">
		// 			Group Projects
		// 		</section>
		// 		<section className="bg-blue-300 h-[500px] w-screen">
		// 			Team Members Cards Stack
		// 		</section>
		// 		<section className="bg-blue-200 h-[500px] w-screen">Footer</section>
		// 	</div>
		// </div>

		<div className="home-container h-screen w-screen bg-gray-700 ">
			{/* Navigation Bar */}
			<nav className="navbar flex border justify-around items-center gap-80 w-max maxw p-6">
				<div className=" border flex items-center">
					{/* <p className=" font-bold text-2xl  text-white">FGL</p> */}
					FGL
				</div>
				<ul className="nav-links border list-none flex gap-5">
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
				<button className="border">Blog</button>
			</nav>

			{/* Header Section */}
			<header className="header border">
				<h1>Future Gadget Laboratory:</h1>
				<h2>Where Developers Turn Ideas into Reality</h2>
				<p>
					Explore Our Team's Portfolios, Innovative Projects, and Upcoming Blog
					Insights
				</p>

				{/* Circle Color Palette */}
				<div className="color-palette">
					<span className="circle red"></span>
					<span className="circle green"></span>
					<span className="circle purple"></span>
					<span className="circle blue"></span>
					<span className="circle magenta"></span>
				</div>
			</header>
		</div>
	);
};

export default HomePage;
