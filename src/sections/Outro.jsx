import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Outro = () => {
	useGSAP(() => {
		gsap.set(".final-message", { marginTop: "-100vh", opacity: 0 }); // Initial state

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".final-message", // Section to trigger the animation
				start: "top 30%", // When the top of the section hits 30% of the viewport height
				end: "top 10%", // When the top of the section hits 10% of the viewport height
				scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});

		tl.to(".final-content", {
			opacity: 0, // Fade out the content
			duration: 1, // Duration of the fade-out animation
			ease: "power1.inOut",
		});

		tl.to(".final-message", {
			opacity: 1, // Fade in the section
			duration: 1, // Duration of the fade-in animation
			ease: "power1.inOut",
		});
	});

	return (
		<section className='final-message'>
			<div className='h-full col-center gap-10'>
				<img
					src='/images/logo.webp'
					alt='Logo'
					className='md:w-72 w-52'
				/>

				<div>
					<h3 className='gradient-title'>
						Coming <br /> May 26th <br /> 2026
					</h3>
				</div>
				<div className='flex-center gap-10'>
					<img
						src='/images/ps-logo.svg'
						alt='PS5 Logo'
						className='md:w-32 w-20'
					/>
					<img
						src='/images/x-logo.svg'
						alt='Xbox Logo'
						className='md:w-52 w-40'
					/>
				</div>
			</div>
		</section>
	);
};

export default Outro;
