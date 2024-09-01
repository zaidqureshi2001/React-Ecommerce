import React from 'react';
import { useSmoothNavigate } from '../../useSmoothNavigate';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 my-16 font-playfair text-gray-800">
            <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

            <p className="mb-4">
                Last Updated: [Date]
            </p>

            <p className="mb-4">
                **Zuberiya Global** ("we", "us", or "our") operates the [website name] (the "Site"). This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or make a purchase.
            </p>

            <p className="mb-4">
                By accessing or using the Site, you agree to the terms of this Privacy Policy. If you do not agree to this policy, please do not use our Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
                We may collect personal information from you in various ways, including when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Visit our Site</li>
                <li>Register on the Site</li>
                <li>Place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a form</li>
                <li>Contact us via email or through other communication methods</li>
            </ul>

            <p className="mb-4">
                **Personal Information:** The types of personal information we may collect include:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information (credit card details)</li>
                <li>IP address</li>
                <li>Any other information you voluntarily provide</li>
            </ul>

            <p className="mb-4">
                **Non-Personal Information:** We may also collect non-personal information such as browser type, device type, operating system, and the URL of the page you visited before and after navigating to our Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
                We may use the information we collect from you in the following ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>To process transactions</li>
                <li>To personalize your experience</li>
                <li>To improve our website and customer service</li>
                <li>To send periodic emails regarding your order or other products and services</li>
                <li>To administer promotions, surveys, or other site features</li>
                <li>To detect and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Protect Your Information</h2>
            <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information when you place an order, enter, submit, or access your information. These security measures include:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Encryption of sensitive information via Secure Socket Layer (SSL) technology</li>
                <li>Regular malware scanning</li>
                <li>Secure servers and networks</li>
            </ul>

            <p className="mb-4">
                However, please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
            <p className="mb-4">
                Our Site may use "cookies" to enhance the user experience. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your web browser (if you allow) that enables the Site to recognize your browser and capture and remember certain information.
            </p>
            <p className="mb-4">
                You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. However, disabling cookies may affect your ability to use some features of our Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Disclosure</h2>
            <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice, except as described below:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</li>
                <li>We may release your information when we believe release is appropriate to comply with the law, enforce our Site policies, or protect ours or others' rights, property, or safety.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Links</h2>
            <p className="mb-4">
                Our Site may contain links to third-party websites. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our Site and welcome any feedback about these sites.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Children’s Privacy</h2>
            <p className="mb-4">
                Our Site is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a user under the age of 13, we will delete such information from our records.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Consent</h2>
            <p className="mb-4">
                By using our Site, you consent to our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to Our Privacy Policy</h2>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. If we make changes, we will post the new policy on this page with an updated revision date. We encourage you to review the Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
                **Zuberiya Global**  
                <br />
                Email: <a href="mailto:zaiduck444@gmail.com" className="text-blue-500">zaiduck444@gmail.com</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
