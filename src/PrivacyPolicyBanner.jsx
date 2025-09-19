import React from "react";
import Fourthpage from "./Privacy/Fourthpage";
import Five from "./Privacy/Five";
import Six from "./Privacy/Six";
import Seven from "./Privacy/Seven";
import Eight from "./Privacy/Eight";

export default function PrivacyPolicy() {
  return (
    <div className="w-full lg:px-30 px-6 mx-auto  py-12 bg-[#090A13] text-white/80 leading-relaxed">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        PRIVACY POLICY for LifestyleAI
      </h1>

      <p className="mb-2">
        <strong>Effective Date:</strong> 07/05/2025
      </p>
      <p className="mb-6">
        <strong>Last Updated:</strong> 07/05/2025
      </p>

      {/* Intro */}
      <p className="mb-4">
        LifestyleAI (“we,” “our,” “us”) respects your privacy and is committed
        to protecting your personal data. This Privacy Policy explains the
        privacy practices we follow and covers how we use, share, and protect
        your information across all digital touchpoints, including through our
        website, mobile app, WhatsApp bot, Telegram, and other integrated
        platforms (“Services”).
      </p>

      <p className="mb-4">
        By using our Services, you agree to the data practices explained in this
        policy, as well as any policy updates. We encourage you to check this
        page from time to time for the most recent privacy policy updates.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Overview and Transparency
      </h2>
      <p className="mb-4">We believe you have the right to understand clearly:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>What personal data we collect and why</li>
        <li>How we process and secure your data</li>
        <li>How you can exercise your data and privacy rights</li>
      </ul>

      <p className="mb-6">
        This Privacy Policy sets out in detail the ways in which LifestyleAI
        handles and processes your personal data. Depending on your interactions
        with us, you may be a(n):
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Visitor/Unregistered User:</strong> An individual who browses
          and interacts with our Services through our website, WhatsApp,
          Telegram, or other platforms.
        </li>
        <li>
          <strong>Registered User:</strong> An individual who has registered an
          account with us.
        </li>
      </ul>

      <p className="mb-6">
        This Privacy Policy should be read alongside and must be read in
        conjunction with our Terms of Service, which set out our Service rules
        and usage policy. If you do not agree, you should cease use of our
        Services.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. INFORMATION WE COLLECT AND HOW WE USE IT
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gra">
            <tr>
              <th className="border border-gray-300 px-4 py-2">TYPE OF USER</th>
              <th className="border border-gray-300 px-4 py-2">
                VISITOR/UNREGISTERED USER
              </th>
              <th className="border border-gray-300 px-4 py-2">
                REGISTERED USER
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                WHAT DATA WE COLLECT
              </td>
              <td className="border border-gray-300 px-4 py-2">
                IP Address <br />
                Browser/usage data <br />
                Interaction and engagement logs (session info, scroll depth,
                clicks) <br />
                Cookies/Web beacons
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Name, age, gender, phone number, email address <br />
                Health data from trackers and integrations with third-party
                services (Google Health, Apple Health, Fitbit, WhatsApp, Meta,
                Gmail, Google) <br />
                Lifestyle insights (food logs, nutrition tracking, fitness
                records, wellness data, etc.) <br />
                Uploaded images & documents (health reports, prescriptions,
                body composition scans, blood work, etc.) <br />
                Financial information (e.g. secure third-party payment)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                HOW WE USE IT
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Improve user experience <br />
                Website optimization <br />
                Fraud detection <br />
                General market analysis and service improvement
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Account authentication <br />
                Personalization and tailoring of insights <br />
                Tracking progress (health, nutrition, and wellness goals) <br />
                Delivering personalized health, nutrition, and lifestyle
                recommendations <br />
                Sending educational content, updates, and reminders (via email,
                WhatsApp, Telegram, etc.) <br />
                Customer support and communication <br />
                Processing payments and transactions <br />
                Complying with legal obligations and responding to law
                enforcement requests
              </td>
            </tr>
          </tbody>
        </table>
      </div>

        <div className="  leading-relaxed">
      <h2 className="text-xl font-bold mb-4">Image and Document Processing:</h2>
      <p className="mb-6">
        LifestyleAI uses advanced AI to analyse images of meals, medical reports,
        prescriptions, and body composition measurements uploaded by users to
        provide accurate and personalized insights. Images are securely stored
        and encrypted on AWS cloud servers, and are analysed using proprietary
        AI algorithms. No unnecessary images or data are processed or stored
        without explicit user consent.
      </p>

      <h2 className="text-xl font-bold mb-4">Integrations with Third-party Apps:</h2>
      <p className="mb-6">
        LifestyleAI integrates securely with services like Google Health, Apple
        Health, Fitbit, WhatsApp, and Telegram to enhance your experience. Data
        from these platforms is accessed only after your explicit consent and is
        used to personalize coaching and insights.
      </p>

      <h2 className="text-xl font-bold mb-4">2. SPECIAL CATEGORIES OF DATA</h2>

      <h3 className="text-lg font-semibold mb-2">Sensitive Personal Data:</h3>
      <p className="mb-6">
        We collect sensitive personal information such as medical conditions,
        health parameters (e.g., blood sugar, cholesterol levels), genetic data,
        ethnicity, and related health indicators. Such sensitive data collection
        is strictly limited to providing personalized lifestyle and health
        coaching services. Explicit consent will always be sought before
        collection. You may revoke consent at any time by contacting our
        Grievance Officer (details below).
      </p>

      <h3 className="text-lg font-semibold mb-2">
        Image-based Functionalities (Food Images, Medical Reports, Body
        Composition):
      </h3>
      <p className="mb-4">With your explicit consent:</p>

      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>
          <strong>Filtering:</strong> Images uploaded by you are analysed
          securely on-device (when possible) or encrypted on our secure AWS
          servers. Non-relevant data is filtered out or blurred where necessary.
        </li>
        <li>
          <strong>Storage:</strong> Only images explicitly shared for analysis
          (food items, medical reports, body scans) are securely stored to
          provide health coaching services.
        </li>
        <li>
          <strong>Analysis:</strong> Images are analysed using advanced AI for
          nutritional content (food photos), medical insights
          (reports/prescriptions), or body composition analysis (images).
        </li>
        <li>
          <strong>Security:</strong> Images and associated data are encrypted
          and stored securely, with access strictly controlled and regularly
          audited.
        </li>
        <li>
          <strong>Retention:</strong> Images are retained only as necessary for
          service provision and can be manually deleted upon your request or
          automatically upon account termination.
        </li>
      </ul>
    </div>

    

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. COOKIES AND WEB BEACONS
      </h2>
      <p className="mb-4">
        Cookies: Text files placed on your device for recognizing returning
        visitors and analyzing user engagement. These cookies may include session
        duration, email open rates, and engagement with resources like app
        pushes.
      </p>
      <p className="mb-6">
        Web Beacons: Tiny image placed across our website, email, app usage, and
        engagement with resources (e.g., open rates). Rejecting cookies may
        impact certain features but does not disable access to our services.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. YOUR RIGHTS & PREFERENCES UNDER GDPR (EU USERS)
      </h2>
      <p className="mb-4">
        LifestyleAI fully complies with the European Union’s General Data
        Protection Regulation (GDPR), which provides individuals within the EU
        with specific fundamental data protection rights:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Right to be Informed:</strong> You have the right to be
          informed about what data we collect, why, and how it is processed.
        </li>
        <li>
          <strong>Right of Access:</strong> You can request details of the
          personal data we collect, why we collect it, and how it is processed.
        </li>
        <li>
          <strong>Right to Rectification:</strong> You may request correction or
          completion of your personal data if it is inaccurate or incomplete.
        </li>
        <li>
          <strong>Right to Erasure:</strong> You can request deletion of your
          personal data if it is no longer required for legitimate purposes.
        </li>
        <li>
          <strong>Right to Restrict Processing:</strong> You can request us to
          temporarily or permanently stop processing your data under specific
          circumstances.
        </li>
        <li>
          <strong>Right to Data Portability:</strong> You can request to
          transfer your data in a structured, commonly used, machine-readable
          format, and/or request to transmit this data to another service
          provider.
        </li>
        <li>
          <strong>Right to Object:</strong> You can object to the processing of
          your data in specific circumstances, particularly when data is used
          for direct marketing purposes.
        </li>
      </ul>
      <Fourthpage />
      <Five/>
      <Six/>
      <Seven/>
      <Eight/>
    </div>
  );
}
