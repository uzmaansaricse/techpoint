import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
    return (
        <div className="pt-32 pb-20 bg-bg-light min-h-screen">
            <SEO title="Terms of Service" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">Terms of Service</h1>
                <p className="text-secondary mb-12 text-lg">Last Updated: January 2026</p>

                <div className="space-y-10 text-secondary font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-primary mb-4">2. Intellectual Property</h2>
                        <p>
                            All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads,
                            data compilations, and software, is the property of TechPoint or its content suppliers and protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-primary mb-4">3. Limitation of Liability</h2>
                        <p>
                            In no event shall TechPoint, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website
                            whether such liability is under contract. TechPoint, including its officers, directors and employees shall not be held liable for any indirect,
                            consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-primary mb-4">4. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
