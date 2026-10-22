import type { Metadata } from "next";

const APP = "Digital Wellbeing App";
const DEV = "Coinage Software Private Limited";
const PKG = "com.digitalwellbeing.digital_wellbeing_app";
const EMAIL = "prasad.a@coinage.in";

export const metadata: Metadata = {
  title: `Terms and Conditions – ${APP}`,
  description: `The terms that apply when you use ${APP} by ${DEV}.`,
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 font-sans text-lg leading-9 text-neutral-900 [&_h1]:mb-6 [&_h1]:text-5xl [&_h1]:font-bold [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-8">
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Last Updated:</strong> October 2026
      </p>
      <p>
        <strong>App name:</strong> {APP}
        <br />
        <strong>Package name:</strong> {PKG}
        <br />
        <strong>Developer / legal entity:</strong> {DEV}
        <br />
        <strong>Contact:</strong>{" "}
        <a className="text-blue-700 underline" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the {APP} mobile application
        (“App”), published by {DEV} (“we”, “us”, “our”), you agree to be bound
        by these Terms and Conditions (“Terms”).
      </p>
      <p>
        If you do not agree with any part of these Terms, you must discontinue
        use of the App immediately.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {APP} is a screen-time management application designed to help users
        reduce distractions and improve focus by blocking selected apps during
        user-defined restriction periods.
      </p>
      <ul>
        <li>Select applications to restrict</li>
        <li>Create custom blocking schedules</li>
        <li>Encourage healthier digital habits</li>
      </ul>
      <p>
        The App operates based on permissions granted by the user and may not
        function properly if such permissions are revoked.
      </p>

      <h2>3. Required Permissions</h2>
      <p>
        To provide its core functionality, {APP} requires certain system-level
        permissions:
      </p>
      <ul>
        <li>
          <strong>Usage Access Permission:</strong> Required to detect when
          restricted applications are launched.
        </li>
        <li>
          <strong>Accessibility Service:</strong> Required to display blocking
          screens during active restriction periods.
        </li>
        <li>
          <strong>Device Administrator Permission (Optional):</strong> Helps
          prevent bypassing of restrictions while active.
        </li>
      </ul>
      <p>
        By granting these permissions, you acknowledge that they are necessary
        for the App to function as intended.
      </p>

      <h2>4. User Responsibilities</h2>
      <p>As a user of {APP}, you agree to:</p>
      <ul>
        <li>Use the App in accordance with applicable laws</li>
        <li>Not attempt to bypass or disable restriction mechanisms</li>
        <li>Not reverse engineer or modify the App</li>
        <li>Maintain proper control of device permissions</li>
      </ul>

      <h2>5. No Guarantee of Absolute Blocking</h2>
      <p>
        While the App is designed to enforce restrictions, we do not guarantee
        that blocking cannot be bypassed due to:
      </p>
      <ul>
        <li>Device manufacturer limitations</li>
        <li>Operating system updates</li>
        <li>Battery optimization or system settings</li>
        <li>Manual permission changes by the user</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, graphics, and software associated with
        the {APP} are the property of {DEV}. Unauthorized copying,
        distribution, or modification is prohibited.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {DEV} shall not be liable for
        any indirect, incidental, special, or consequential damages resulting
        from:
      </p>
      <ul>
        <li>Use or inability to use the App</li>
        <li>Data loss or device malfunction</li>
        <li>Software conflicts or system restrictions</li>
      </ul>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided “as is” without warranties of any kind, whether
        express or implied. We do not guarantee uninterrupted or error-free
        operation.
      </p>

      <h2>9. Termination</h2>
      <p>
        We reserve the right to suspend or terminate access to the App if you
        violate these Terms. You may discontinue use at any time by
        uninstalling the App.
      </p>

      <h2>10. Modifications to Terms</h2>
      <p>
        We may update these Terms periodically. Continued use of the App after
        changes constitutes acceptance of the updated Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by applicable laws without regard to
        conflict of law principles.
      </p>

      <h2>12. Contact Information</h2>
      <p>If you have questions regarding these Terms, contact:</p>
      <p>
        <strong>{DEV}</strong>
        <br />
        App: {APP} ({PKG})
        <br />
        Email:{" "}
        <a className="text-blue-700 underline" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>
    </main>
  );
}