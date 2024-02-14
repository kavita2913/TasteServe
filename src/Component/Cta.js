import React from 'react';
import './cta.css';

const CTASection = () => {
    const handleButtonClick = () => {
        // Replace this with the actual action you want to trigger
        console.log('CTA button clicked! Perform your desired action here.');
    };

    return (
        <div className="cta-box">
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Unlock Exclusive Benefits!</h2>
                    <p>Subscribe now to receive special offers and updates.</p>
                    <button onClick={handleButtonClick}>Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default CTASection;
