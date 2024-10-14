import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export function memberCarousel() {
	return (
		<Carousel className="border">
			<CarouselContent>
				<CarouselItem>...</CarouselItem>
				<CarouselItem>...</CarouselItem>
				<CarouselItem>...</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
