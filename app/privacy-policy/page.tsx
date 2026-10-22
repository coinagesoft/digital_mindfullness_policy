import type { Metadata } from "next";

const APP = "Digital Wellbeing App";
const DEV = "Coinage Software Private Limited";
const PKG = "com.digitalwellbeing.digital_wellbeing_app";
const EMAIL = "prasad.a@coinage.in";

export const metadata: Metadata = {
  title: `Privacy Policy – ${APP}`,
  description: `How ${APP} by ${DEV} collects, uses and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 font-sans text-lg leading-9 text-neutral-900 [&_h1]:mb-6 [&_h1]:text-5xl [&_h1]:font-bold [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-8">
      <h1>Privacy Policy</h1>
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

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy applies to the {APP} (package name {PKG}),
        published on Google Play by {DEV} (“we”, “us”, “our”).
      </p>
      <p>
        {APP} is designed to help users reduce screen time by blocking
        selected mobile applications during scheduled restriction periods. We
        are committed to protecting your privacy, and we believe in
        transparency and maintaining user trust.
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use
        it, and how we protect your data when you use the {APP}.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        {APP} collects only the minimum information necessary to provide core
        functionality.
      </p>
      <ul>
        <li>App blocking preferences and schedules set by you.</li>
        <li>App usage data required to detect and restrict selected apps.</li>
        <li>
          Basic device information such as device model and OS version for
          compatibility purposes.
        </li>
      </ul>
      <p>
        All configuration data is stored locally on your device and is not
        transmitted to external servers.
      </p>

      <h2>3. Required Permissions</h2>
      <p>
        To function properly, {APP} requires the following Android system
        permissions:
      </p>
      <ul>
        <li>
          <strong>Usage Access Permission:</strong> Allows the app to detect
          when restricted apps are opened.
        </li>
        <li>
          <strong>Accessibility Service:</strong> Enables the app to display a
          blocking screen during active restriction periods.
        </li>
        <li>
          <strong>Device Administrator Permission (Optional):</strong> Helps
          prevent bypassing of restrictions while active.
        </li>
      </ul>
      <p>
        These permissions are used strictly to enforce screen-time reduction
        features. They are not used for surveillance, advertising, or data
        collection beyond the app’s functionality.
      </p>

      <h2>4. Data Storage</h2>
      <p>
        {DEV} does not operate external servers for storing personal user data
        for the {APP}. Most information remains stored locally on your device.
      </p>
      <p>
        We do not maintain centralized databases of user app usage history.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell, rent, trade, or share your personal information with
        third parties. The app does not include advertising networks or
        third-party tracking services.
      </p>

      <h2>6. Security</h2>
      <p>
        We implement reasonable safeguards to protect your data. Since most
        data remains on your device, you retain control over your information.
      </p>

      <h2>7. Children’s Privacy</h2>
      <p>
        {APP} is not intended for children under the age of 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Updates will be posted
        on this page with a revised “Last Updated” date.
      </p>

      <h2>9. Contact Information</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
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