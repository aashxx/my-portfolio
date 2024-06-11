// src/components/TextAnimation.js
import React, { useEffect, useState } from 'react';

const CipherAnimation = ({ name }) => {

    const [displayText, setDisplayText] = useState(name); // Initial text
    const [active, setActive] = useState(false);

    const solveMilliseconds = 800;
    const characterSelectionMilliseconds = 40;
    const delayMilliseconds = 250;
    const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^"];

    const randomArrayElement = (arr) => {
        return arr[(arr.length * Math.random()) | 0];
    };

    const replaceCharacter = (str, index, chr) => {
        return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
    };

    useEffect(() => {
        const scrambleText = () => {
            if (!active) {
                let delay = 0;
                const elementText = displayText;
                const elementCharacters = [...elementText];
                const lockMilliseconds = delayMilliseconds * elementCharacters.length + solveMilliseconds;

                setActive(true);

                setTimeout(() => {
                    setActive(false);
                    setDisplayText(name); // Reset to final text
                }, lockMilliseconds);

                elementCharacters.forEach((character, index) => {
                    setTimeout(() => {
                        let intervalId = setInterval(() => {
                            const randomCharacter = randomArrayElement(characters);
                            setDisplayText((prevText) => replaceCharacter(prevText, index, randomCharacter));

                            setTimeout(() => {
                                clearInterval(intervalId);
                                setDisplayText((prevText) => replaceCharacter(prevText, index, elementCharacters[index]));
                            }, solveMilliseconds);
                        }, characterSelectionMilliseconds);
                    }, delay === 0 ? (delay += 1) : (delay += delayMilliseconds));
                });
            }
        };

        scrambleText();
    }, []);

    return (
        <h1 className='h1 gradient-heading'>
            {displayText}
        </h1>
    );
};

export default CipherAnimation;
