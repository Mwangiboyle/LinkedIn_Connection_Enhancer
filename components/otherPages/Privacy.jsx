import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Privacy policy</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>At Connexcite, we are committed to protecting your privacy. 
              This policy explains how we collect, use and safeguard your data when you use our services. 
              By using Connexcite, you agree to this Privacy Policy.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
            1. Information We Collect.
            </h3>
            <p>
            We collect the following types of information to provide and improve our services:
            </p>
            <p>
            •	Profile Data: LinkedIn profile details (e.g., roles, interests) analysed by our AI for personalised connection requests 
            </p>
            <p>
            •	Usage Data: Information about how you interact with Connexcite (e.g., messages sent, features used).
            </p>
            <p>
            •	Payment Data: Securely processed via Stripe; we do not store payment details.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              2. How We Use Your Data.
            </h3>
            <p>
            Your data is used to:
            </p>
            <ul className="uk-list uk-list-decimal uk-margin-medium@m">
              <li>
                Comply with Legal Obligations: Ensure adherence to GDPR, CCPA and LinkedIn’s policies
              </li>
              <li>
               Improve Services: Analyze anonymized data to enhance our algorithms and user experience .
              </li>
              <li>
              Personalize Outreach: Craft AI-tuned introductions and follow-ups that resonate with your audience.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              3. Data Sharing & Security
            </h3>
            <ul className="uk-list uk-list-decimal uk-margin-medium@m">
              <li>
              	Third Parties: We do not sell, rent, or share your data with third parties, except as required for service delivery (e.g., Stripe for payments)
              </li>
              <li>
              	Security Measures: Data is encrypted and stored securely to prevent unauthorized access.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              4. User Rights.
            </h3>
            <ul className="uk-list uk-list-decimal uk-margin-medium@m">
              <li>
                Access: Request a copy of your personal data.
              </li>
              <li>
                Correction: Update inaccurate or incomplete information.
              </li>
              <li>
              	Deletion: Request removal of your data from our systems.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              5. Cookies and Tracking.
            </h3>
            <ul>
              <li>
              We use cookies to enhance your experience and analyze site usage. You can manage cookie preferences in your browser settings.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              6. Changes to This Policy.
            </h3>
            <ul>
              <li>
              We may update this Privacy Policy periodically. Changes will be posted here and continued use implies acceptance.
              </li>
            </ul>
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: 1 Apr, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
