import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
	useGSAP(() => {
		gsap.set(".jason", { marginTop: "-80vh" });

		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".jason", // trigger the animation when .jason section is in view
					start: "top 90%", // when the top of .jason hits 90% of the viewport height
					end: "10% center", // when 10% of .jason hits the center of the viewport
					scrub: 2, // smooth scrubbing, takes 2 seconds to "catch up"
				},
			})
			.to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" }); // fade out the first video

		gsap.to(
			".jason .img-box", // target the img-box inside the .jason section
			{
				scrollTrigger: {
					trigger: ".jason", // trigger the animation when .jason section is in view
					start: "top center", // when the top of .jason hits the center of the viewport
					end: "80% center", // when 80% of .jason hits the center of the viewport
					scrub: 2, // smooth scrubbing, takes 2 seconds to "catch up"
				},
				y: -300, // move up by 300px
				duration: 1,
				ease: "power1.inOut",
			},
			"<", // sync with previous animation
		);
	});
	return (
		<section className='jason'>
			<div className='max-w-lg jason-content'>
				<h1>Jason Duval</h1>
				<h2>Jason wants an easy life, but things just keep getting harder.</h2>
				<p>
					Jason grew up around grifters and crooks. After a stint in the Army
					trying to shake off his troubled teens, he found himself in the keys
					doing what he knows best, working for local drug runners. It might be
					time to try something new.
				</p>

				<div className='jason-2'>
					<img
						src='/images/jason-2.webp'
						alt="Jason's Image 2"
					/>
				</div>
			</div>
			<div className='space-y-5 mt-96 img-box'>
				<div className='jason-1'>
					<img
						src='/images/jason-1.webp'
						alt="Jason's Image 1"
					/>
				</div>
				<div className='jason-3'>
					<img
						src='/images/jason-3.webp'
						alt="Jason's Image 3"
					/>
				</div>
			</div>
		</section>
	);
};

export default Jason;
