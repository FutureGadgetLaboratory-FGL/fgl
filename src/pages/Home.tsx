const HomePage = () => {
	return (
		<div className="">
			<div className="flex flex-col items-center h-screen w-screen gradient-bg no-scrollbar">
				{/* Navigation Bar */}
				<nav className="navbar flex border-b justify-around items-center gap-80 w-max p-5 mt-1 ">
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
				</header>
			</div>

			{/* Members Section */}
			<div className="h-screen w-screen bg-gray-500">
				<h1>Members</h1>
			</div>
		</div>
	);
};

export default HomePage;
