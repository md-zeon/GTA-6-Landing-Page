import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FirstVideo = () => {
	const videoRef = useRef(null);
	useGSAP(() => {
		gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 }); // Initial state

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".first-vd-wrapper", // Trigger the animation when this section comes into view
				start: "top top", // When the top of the section hits the top of the viewport
				end: "+=200% top", // End after scrolling 200% of the viewport height
				scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				pin: true, // Pin the section in place during the animation
			},
		});

		tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" }); // Fade out the hero section
		tl.to(".first-vd-wrapper", {
			opacity: 1, // Fade in the video section
			duration: 2, // Duration of the fade-in animation
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
				"<", // Start this animation at the same time as the previous one
			);
		};
	}, []);
	return (
		<section className='first-vd-wrapper'>
			<div className='h-dvh'>
				<video
					ref={videoRef}
					muted
					playsInline
					preload='auto'
					src='/videos/output1.mp4'
					className='first-vd'
				/>
			</div>
		</section>
	);
};

export default FirstVideo;
