import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const container = useRef(null);
    const counterRef = useRef(null);
    const textRef = useRef(null);
    const curtainRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Counter Animation 0 -> 100
        tl.to(counterRef.current, {
            innerHTML: 100,
            duration: 1.5,
            snap: { innerHTML: 1 },
            ease: "power2.inOut",
            onUpdate: function () {
                counterRef.current.innerHTML = Math.round(this.targets()[0].innerHTML) + "%";
            }
        });

        // Text Reveal
        tl.fromTo(textRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.5"
        );

        // Hold for a moment
        tl.to({}, { duration: 0.5 });

        // Curtain Reveal (Slide Up)
        tl.to(curtainRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
        });

        // Hide container ensuring it doesn't block interactions
        tl.set(container.current, { display: "none" });

    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900 text-white overflow-hidden pointer-events-auto">

            {/* Curtain Base */}
            <div ref={curtainRef} className="absolute inset-0 bg-gray-900 z-10 flex flex-col items-center justify-center">

                {/* Counter */}
                <div ref={counterRef} className="font-display text-9xl font-bold text-accent mb-4 tracking-tighter opacity-80">
                    0%
                </div>

                {/* Loading Text */}
                <div ref={textRef} className="text-sm font-light uppercase tracking-[0.3em] text-white/60">
                    Crafting Experience
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/20"></div>
            </div>

        </div>
    );
};

export default Preloader;
