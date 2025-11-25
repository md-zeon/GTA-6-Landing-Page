import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
	useGSAP(() => {
		gsap.set(".lucia-life", { marginTop: "-80vh" }); // Initial offset

		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".lucia-life", // element that triggers the animation
					start: "top 80%", // when the top of the trigger hits 80% of the viewport height
					end: "10% center", // when 10% of the trigger hits the center of the viewport
					scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				},
			})
			.to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" }); // Fade out the second video

		gsap.to(
			".lucia-life .img-box", // Target the image box within the lucia-life section
			{
				scrollTrigger: {
					trigger: ".lucia-life", // element that triggers the animation
					start: "top center", // when the top of the trigger hits the center of the viewport
					end: "80% center", // when 80% of the trigger hits the center of the viewport
					scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				},
				y: -200, // Move up by 200px
				duration: 1, // Duration of the animation
				ease: "power1.inOut", // Easing function
			},
			"<",
		);
	});
	return (
		<section className='lucia-life'>
			<div className='flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96'>
				<div className='lucia-1'>
					<img
						src='/images/lucia-1.webp'
						alt="Lucia's Image 1"
					/>
				</div>
				<div className='lucia-3'>
					<img
						src='/images/lucia-3.webp'
						alt="Lucia's Image 3"
					/>
				</div>
			</div>

			<div className='lg:w-1/2 lucia-life-content'>
				<div className='max-w-xl lg:ps-32 ps-10'>
					<h1>Lucia Caminos</h1>
					<h2>Lucia's father taught her to fight as soon as she could walk.</h2>
					<p>
						Life has been coming at her swinging over since. Fighting for her
						family landed her in the Leonida Penitentiary. Sheer luck got her
						out. Lucia's learned her lesson - only smart moves from here.
					</p>
				</div>

				<div className='lucia-2'>
					<img
						src='/images/lucia-2.webp'
						alt="Lucia's Image 2"
					/>
				</div>

				<p className='max-w-xl lg:ps-32 ps-10'>
					More than anything, lucia wants the good life her mom has dreamed of
					since their days in Liberty City - but instead of half-baked fantasis,
					lucia is prepared to take matters into her own hands.
				</p>
			</div>
		</section>
	);
};

export default Lucia;
