"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-12 backdrop-blur-md">
      <div
        className="max-w-5xl mx-auto bg-white/5 p-10 rounded-xl border border-white/10 shadow-2xl"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          data-aos="zoom-in"
        >
          Privacy Policy
        </h1>

        <div className="space-y-10 text-gray-300">
          {/* Section 1 */}
          <div data-aos="fade-up">
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Our Commitment to Privacy
            </h2>
            <p>
              <span className="font-semibold text-blue-500">HuboWeb</span> is
              committed to protecting the privacy and security of your personal
              information. This Privacy Policy outlines the types of information
              we collect from you, how we use and protect that information, and
              your rights regarding your personal data. By using our website and
              services, you consent to the practices described in this policy.
            </p>
          </div>

          {/* Section 2 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-xl font-semibold text-white mb-2">
              2. What information do we collect?
            </h2>
            <p>
              We collect information from you when you subscribe to our
              newsletter or marketing updates, fill out a form, or submit
              property information.
            </p>
            <p>
              When ordering or registering on our site, you may be asked to
              enter your name, email address, mailing address, or phone number.
              We transfer information about you if huboweb Parking is acquired
              by or merged with another company. In this event, huboweb Parking
              will notify you before the information is transferred and becomes
              subject to a different privacy policy.
            </p>
            <p className="mt-5">
              Any of the information we collect from you may be used in one of
              the following ways:
            </p>
            <p className="ml-5 mt-5">
              To process transactions: Your information will be used in the
              completion of buying processes, property assessments, and property
              documentation. To communicate with you: The contact information
              (phone number and email) you provide may be used to send you
              information, respond to inquiries, and/or other requests or
              questions.
            </p>
          </div>

          {/* Section 3 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is entirely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          {/* Section 4 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-xl font-semibold text-white mb-2">
              Childrens Online Privacy Protection Act Compliance
            </h2>
            <p>
              We are in compliance with the requirements of COPPA{" "}
              <span className="text-blue-500">
                (Childrens Online Privacy Protection Act);
              </span>{" "}
              we do not collect any information from anyone under 13 years of
              age. Our website, products, and services are all directed to
              people who are at least 13 years old or older.
            </p>
          </div>

          {/* Section 5 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Opt-In Information and Third-Party Sharing
            </h2>
            <p>
              We respect your privacy choices, especially concerning the sharing
              of your personal information. Any information you provide through
              opt-in consent will not be shared with third parties for marketing
              or promotional purposes.
            </p>
          </div>

          {/* Section 6 */}
          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Opt-In for Marketing Text Messages
            </h2>
            <p>
              By submitting the contact form and signing up for texts, you
              consent to receive marketing text messages from huboweb Parking at
              the number <span className="text-yellow-500">+404-579-8662</span>.
            </p>
            <p className="ml-5 mt-3">
              Consent is not a condition of purchase. Message and data rates may
              apply. You can unsubscribe at any time by replying STOP to the
              received SMS <span className="text-blue-500">(texts)</span> or
              clicking the unsubscribe link{" "}
              <span className="text-blue-500">(where available)</span> in the
              marketing text messages.
            </p>
          </div>

          {/* Section 7 */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, correct, and delete your
              personal information we hold. If you wish to exercise any of these
              rights, please contact us at{" "}
              <span className="text-yellow-500">
                Sheena.murry@sevenpinesinvest.com
              </span>{" "}
              or call us on{" "}
              <span className="text-blue-500">+404-579-8662</span>.
            </p>
          </div>

          {/* Section 8 */}
          <div data-aos="fade-up" data-aos-delay="700">
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. The updated policy will be posted on our
              website, and the effective date will be revised accordingly.
            </p>
          </div>

          {/* Section 9 */}
          <div data-aos="fade-up" data-aos-delay="800">
            <h2 className="text-xl font-semibold text-white mb-2">
              9. Contacting Us
            </h2>
            <p>
              If there are any questions regarding this privacy policy, you may
              contact us with the information on our contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
