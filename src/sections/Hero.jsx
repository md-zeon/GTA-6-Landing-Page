import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComingSoon from "./ComingSoon";
import { useMaskSettings } from "../../constants";

const Hero = () => {
	const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
		useMaskSettings();

	useGSAP(() => {
		gsap.set(".mask-wrapper", {
			maskPosition: initialMaskPos,
			maskSize: initialMaskSize,
		});

		gsap.set(".mask-logo", {
			marginTop: "-100vh",
			opacity: 0,
		});

		gsap.set(".entrance-message", {
			marginTop: "0vh",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-section", // Section to pin for scrolling
				start: "top top", // When the top of the section hits the top of the viewport
				scrub: 2.5, // Smooth scrubbing, takes 2.5 seconds to "catch up" to the scrollbar
				end: "+=200%", // When to end the scroll effect (200% of the viewport height)
				pin: true, // Pin the section while scrolling
			},
		});

		tl.to(".fade-out", {
			opacity: 0,
			ease: "power1.inOut",
		})
			.to(".scale-out", {
				scale: 1,
				ease: "power1.inOut",
			})
			.to(
				".mask-wrapper",
				{
					maskSize: maskSize, // Final mask size
					ease: "power1.inOut",
				},
				"<", // Sync with previous animation
			)
			.to(".mask-wrapper", {
				opacity: 0,
			})
			.to(
				".overlay-logo",
				{
					opacity: 1,
					onComplete: () => {
						gsap.to(".overlay-logo", {
							opacity: 0,
						});
					},
				},
				"<",
			)
			.to(
				".entrance-message",
				{
					duration: 1,
					ease: "power1.inOut",
					maskImage:
						"radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
				},
				"<",
			);
	});
	return (
		<section className='hero-section'>
			<div className='size-full mask-wrapper'>
				<img
					src='/images/hero-bg.webp'
					alt='Grand Theft Auto Image'
					className='scale-out'
				/>
				<img
					src='/images/hero-text.webp'
					alt='Hero Logo'
					className='title-logo fade-out'
				/>
				<img
					src='/images/watch-trailer.png'
					alt='Trailer'
					className='trailer-logo fade-out'
				/>
				<div className='play-img fade-out'>
					<img
						src='/images/play.png'
						alt='Play'
						className='w-7 ml-1'
					/>
				</div>
			</div>
			<div>
				<img
					src='/images/big-hero-text.svg'
					alt='Logo'
					className='size-full object-cover mask-logo'
				/>
			</div>
			<div className='fake-logo-wrapper'>
				<img
					src='/images/big-hero-text.svg'
					alt='Hero Text'
					className='overlay-logo'
				/>
			</div>
			<ComingSoon />
		</section>
	);
};

export default Hero;
