// PrivacyPolicy.jsx
import React from "react";

export default function Fourthpage() {
  return (
    <div className="p-6  leading-relaxed">
      <h2 className="text-xl font-bold mb-4">Right to Data Portability</h2>
      <p className="mb-6">
        You have the right to receive your personal data in a structured,
        commonly used, machine-readable format, and transfer it to another
        service provider.
      </p>

      <h2 className="text-xl font-bold mb-4">
        Right Not to be Subject to Automated Decision-Making
      </h2>
      <p className="mb-6">
        You have the right to avoid decisions made solely by automated
        processing, including profiling, if these decisions have a
        legal or similarly significant effect on you.
      </p>
      <p className="mb-6">
        To exercise these rights, please contact our Data Protection Officer
        (details at the end of this policy). We will respond to your requests
        promptly, typically within 30 days.
      </p>

      <h2 className="text-xl font-bold mb-4">Lawful Basis for Processing Data</h2>
      <p className="mb-4">
        Your data is processed based on the following legal grounds:
      </p>

      <table className="w-full border border-gray-400 mb-6 text-left">
        <thead>
          <tr className="">
            <th className="border border-gray-400 px-3 py-2">Nature of Data</th>
            <th className="border border-gray-400 px-3 py-2">Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-3 py-2">Visitor Usage Data</td>
            <td className="border border-gray-400 px-3 py-2">
              Consent, Legitimate Interest
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-3 py-2">
              Registered Account Data
            </td>
            <td className="border border-gray-400 px-3 py-2">
              Consent, Performance of Contract
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-3 py-2">
              Sensitive Health and Medical Data
            </td>
            <td className="border border-gray-400 px-3 py-2">Explicit Consent</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-3 py-2">
              Communication and Interaction Data
            </td>
            <td className="border border-gray-400 px-3 py-2">
              Performance of Contract, Compliance with Law
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-3 py-2">
              System Generated Data
            </td>
            <td className="border border-gray-400 px-3 py-2">
              Legitimate Interest
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mb-6">
        If you believe that Lifestyle is processing your data unlawfully or
        against GDPR, please contact our Grievance Officer immediately to
        lodge a complaint. We shall protect your data protection authority.
      </p>

      <h2 className="text-xl font-bold mb-4">5. PUBLISHED CONTENT</h2>
      <p className="mb-6">
        Any content you provide on our sites, such as success stories, feedback,
        comments, blogs, or testimonials, may be used by us for promotional or
        operational purposes. By submitting such content, you consent to its use
        and distribution. We may also moderate or remove any content that is
        deemed inappropriate or violates our community guidelines. Please note
        that we cannot control or be held responsible for the third-party usage
        of such published content once it is shared on our platform.
      </p>

      <h2 className="text-xl font-bold mb-4">6. INFORMATION WE COLLECT FROM THIRD PARTIES</h2>
      <p className="mb-4">
        We may collect information about you from external sources, including:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Health Data from integrated health apps (e.g., Google Health, Apple
          Health, Fitbit).
        </li>
        <li>
          Insurance information, where you have linked your health/fitness data
          with an insurance provider.
        </li>
        <li>
          Publicly available information from social media platforms, where
          interactions with our official profiles are a part of your engagement
          with us.
        </li>
      </ul>

      <p className="mb-6">
        We use this data to enhance personalization, provide accurate Lifestyle
        management guidance, and improve the effectiveness of our services.
      </p>
    </div>
  );
}
