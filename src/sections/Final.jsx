import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Final = () => {
	const videoRef = useRef(null); // Reference to the video element

	useGSAP(() => {
		gsap.set(".final-content", { opacity: 0 }); // Initial state

		gsap.timeline({
			scrollTrigger: {
				trigger: ".final", // Section to trigger the animation
				start: "top top", // When the top of the section hits the top of the viewport
				end: "90% top", // When 90% of the section has scrolled past the top of the viewport
				scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				pin: true, // Pin the section during the animation
			},
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".final", // Section to trigger the animation
				start: "top 80%", // When the top of the section hits 80% of the viewport height
				end: "90% top", // When 90% of the section has scrolled past the top of the viewport
				scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});

		tl.to(".final-content", {
			opacity: 1, // Fade in the content
			duration: 1, // Duration of the fade-in animation
			scale: 1, // Scale to normal size
			ease: "power1.inOut",
		});

		// Animate the video playback based on scroll position
		videoRef.current.onloadedmetadata = () => {
			tl.to(
				videoRef.current, // Target the video element
				{
					currentTime: videoRef.current.duration, // Animate to the end of the video
					duration: 3, // Duration of the video playback animation
					ease: "power1.inOut",
				},
				"<", // Start at the same time as the previous animation
			);
		};
	});
	return (
		<section className='final'>
			<div className='final-content size-full'>
				<video
					ref={videoRef}
					muted
					playsInline
					preload='auto'
					src='/videos/output3.mp4'
					className='size-full object-cover'
				/>
			</div>
		</section>
	);
};

export default Final;
