// PrivacyPolicyPart4.jsx
import React from "react";

export default function Seven() {
  return (
    <div className=" p-6  leading-relaxed">
      <ul className="list-disc ml-6 mb-6">
        <li>
          If LifestyleAI is involved in a merger, acquisition, or business
          transfer, your personal data may be transferred to the acquiring
          entity under strict confidentiality obligations.
        </li>
      </ul>

      <p className="mb-6">
        We will take reasonable measures to inform you of such compelled
        disclosures when legally permissible.
      </p>

      <h2 className="text-xl font-bold mb-4">
        14. SECURITY OF YOUR PERSONAL INFORMATION
      </h2>
      <p className="mb-6">
        LifestyleAI is committed to safeguarding your personal data and employs
        rigorous security protocols to protect your information against
        unauthorized access, misuse, loss, disclosure, alteration, or
        destruction. Our data security measures include:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-4">
          <strong>Encryption:</strong> <br />
          All personal data is encrypted using industry-standard encryption
          protocols (such as AES-256 encryption) both during transmission
          (TLS/SSL protocols) and while at rest on secure AWS cloud servers.
        </li>
        <li className="mb-4">
          <strong>Secure AWS Infrastructure:</strong> <br />
          LifestyleAI uses Amazon Web Services (AWS), renowned for secure,
          reliable, and compliant cloud storage solutions, featuring regular
          security updates, vulnerability assessments, and robust firewalls.
        </li>
        <li className="mb-4">
          <strong>Access Control:</strong> <br />
          Only authorized personnel have access to your personal data, strictly
          limited to those whose job responsibilities require it. All access is
          logged, monitored, and regularly audited.
        </li>
        <li className="mb-4">
          <strong>Data Minimization and Anonymization:</strong> <br />
          LifestyleAI follows data minimization principles, ensuring only the
          necessary personal data is stored. We anonymize and aggregate data
          whenever possible to minimize privacy risks.
        </li>
        <li>
          <strong>Regular Security Assessments:</strong> <br />
          Our systems undergo regular penetration testing, vulnerability scans,
          and security assessments to ensure the ongoing security of your
          personal data.
        </li>
      </ul>

      <p className="mb-6">
        Despite our diligent efforts, no security measure is completely
        foolproof. You are encouraged to protect your passwords, account
        details, and devices from unauthorized access.
      </p>

      <h2 className="text-xl font-bold mb-4">
        15. ACCESS, CORRECTION & DELETION OF YOUR PERSONAL DATA
      </h2>
      <p className="mb-6">
        You may request the following actions regarding your personal data at
        any time:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-4">
          <strong>Access:</strong> <br />
          Request access to a complete record of your personal data held by
          LifestyleAI.
        </li>
        <li className="mb-4">
          <strong>Correction:</strong> <br />
          Update or correct inaccuracies in your personal data.
        </li>
        <li>
          <strong>Deletion:</strong> <br />
          Request deletion of your personal data. Note that deletion requests
          may result in account termination if data retention is necessary for
          service provision.
        </li>
      </ul>
    </div>
  );
}
