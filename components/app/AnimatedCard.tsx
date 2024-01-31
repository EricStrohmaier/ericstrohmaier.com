import React, { useEffect } from 'react';

const AnimatedCard = () => {
    useEffect(() => {
        const pre = document.querySelector("pre");

        const handleMouseMove = (e: MouseEvent) => {
            if (pre) {
                rotateElement(e, pre);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const rotateElement = (event: MouseEvent, element: HTMLPreElement) => {
        // get mouse position
        const x = event.clientX;
        const y = event.clientY;

        // find the middle
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        // get offset from middle as a percentage
        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;

        // set rotation
        element.style.setProperty("--rotateX", `${offsetX}deg`);
        element.style.setProperty("--rotateY", `${-1 * offsetY}deg`);
    };

    return (
        <div className='max-w-md '>
            {/* //no focus ring  */}
            <pre contentEditable className="language-css outline-none" tabIndex={0}>
                <code className="language-css outline-none">
                    <span className="token selector">.awesome-layouts</span> {'{'}
                    <br />
                    <span className="token property">display</span>: grid;
                    <br />
                    {'}'}
                </code>
            </pre>
        </div>
    );
};

export default AnimatedCard;
