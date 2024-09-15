const HomePage = () => {
	return (
		<div className="bg-green-600 w-screen h-screen min-w-screen min-h-screen flex">
			<div className="bg-red-600 w-1/12 min-h-screen "></div>
			<div className="overflow-scroll no-scrollbar">
				<section className="bg-blue-600 h-[500px] w-screen">Header</section>
				<section className="bg-blue-500 h-[500px] w-screen">About FGL</section>
				<section className="bg-blue-400 h-[500px] w-screen">
					Group Projects
				</section>
				<section className="bg-blue-300 h-[500px] w-screen">
					Team Members Cards Stack
				</section>
				<section className="bg-blue-200 h-[500px] w-screen">Footer</section>
			</div>
		</div>
	);
};

export default HomePage;
