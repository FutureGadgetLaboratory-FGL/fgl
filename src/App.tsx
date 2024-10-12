import HomePage from '@/pages/Home';
import '@/App.css';
import {
	IconBrandGithub,
	IconBrandX,
	IconExchange,
	IconHome,
	IconNewSection,
	IconTerminal2,
} from '@tabler/icons-react';

function App() {
	const links = [
		{
			title: 'Home',
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: '#',
		},

		{
			title: 'Products',
			icon: (
				<IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: '#',
		},
		{
			title: 'Components',
			icon: (
				<IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: '#',
		},
		{
			title: 'Aceternity UI',
			icon: '',
			href: '#',
		},
		{
			title: 'Changelog',
			icon: (
				<IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: '#',
		},

		{
			title: 'Twitter',
			icon: (
				<IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: '#',
		},
		{
			title: 'GitHub',
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: '#',
		},
	];

	return (
		<>
			<HomePage />
		</>
	);
}

export default App;
