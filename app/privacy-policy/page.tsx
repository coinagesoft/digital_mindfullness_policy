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
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    <main className="mx-auto max-w-4xl px-6 py-12 font-sans text-lg leading-9 [&_h1]:mb-6 [&_h1]:text-5xl [&_h1]:font-bold [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-8">
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
        <a className="text-blue-700 underline dark:text-blue-400" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy applies to the {APP} (package name {PKG}),
        published on Google Play by {DEV} (“we”, “us”, “our”).
      </p>
      <p>
        {APP} helps you manage screen time by blocking selected apps during
        schedules you set, and offers optional focus, goals, sleep, mood and
        family-profile features. We are committed to protecting your privacy.
        This policy explains what information the app accesses, how it is
        used, and the choices you have.
      </p>

      <h2>2. Information the App Accesses</h2>
      <p>
        The app accesses only the information needed for the features you use.
        All of it is stored locally on your device.
      </p>
      <ul>
        <li>
          <strong>Your settings:</strong> the apps you choose to restrict,
          blocking schedules, daily time limits, focus and sleep settings, and
          your goals and progress.
        </li>
        <li>
          <strong>App usage data:</strong> which apps you use and for how
          long, used to show your screen-time analytics and to apply your
          limits.
        </li>
        <li>
          <strong>List of installed apps:</strong> used only so you can pick
          which apps to restrict.
        </li>
        <li>
          <strong>Physical activity (step count):</strong> used only to show
          step-based progress toward your goals. Requested only if you use
          this feature.
        </li>
        <li>
          <strong>Mood entries:</strong> a mood score and an optional note
          that you choose to enter.
        </li>
        <li>
          <strong>Family profiles:</strong> a profile name, an emoji avatar
          and a child-mode setting that you choose to create.
        </li>
        <li>
          <strong>Wi-Fi network name and location (optional):</strong> only if
          you create context rules (for example, relaxed limits on your home
          Wi-Fi or stricter limits at a place you save). The app compares your
          current Wi-Fi name or location with the rules you saved. Requested
          only if you use this feature.
        </li>
        <li>
          <strong>Hardmode PIN:</strong> if you turn on Hardmode, the PIN you
          set is stored on your device to unlock settings.
        </li>
        <li>
          <strong>Basic device information:</strong> such as OS version and
          device model, for compatibility.
        </li>
      </ul>
      <p>
        <strong>
          This information is not sent to us or to any third party. The app
          does not request internet access in its released version, and we
          have no servers that receive your data.
        </strong>
      </p>

      <h2>3. Permissions and Why We Need Them</h2>
      <ul>
        <li>
          <strong>Accessibility Service:</strong> used only to detect which
          app comes to the foreground, so the app can show a blocking screen
          and return you to the home screen during your restriction periods.
          It does not read, collect, store or share what is on your screen,
          including text, messages, passwords or payment details.
        </li>
        <li>
          <strong>Usage Access:</strong> lets the app see app usage statistics
          for screen-time analytics and limit enforcement.
        </li>
        <li>
          <strong>Query all packages:</strong> lets the app list installed
          apps so you can choose which to restrict.
        </li>
        <li>
          <strong>Device Administrator (optional):</strong> helps prevent the
          app from being uninstalled while restrictions are active. You can
          turn it off in Android settings.
        </li>
        <li>
          <strong>Display over other apps:</strong> used to show the blocking
          screen.
        </li>
        <li>
          <strong>Notifications, exact alarms and foreground service:</strong>{" "}
          used to send reminders, start and end restrictions on time, and keep
          enforcement running in the background.
        </li>
        <li>
          <strong>Run at startup:</strong> restores your schedules after your
          device restarts.
        </li>
        <li>
          <strong>Physical activity, Wi-Fi and location (optional):</strong>{" "}
          used only for the step-count and context-rule features described
          above.
        </li>
      </ul>
      <p>
        These permissions are used only to provide the app’s screen-time
        features. They are not used for advertising, surveillance or
        profiling.
      </p>

      <h2>4. Data Storage and Retention</h2>
      <p>
        {DEV} does not operate servers that store personal data for the {APP}.
        Your information stays on your device until you delete it in the app,
        clear the app’s data, or uninstall the app. Uninstalling removes the
        app’s stored data from your device.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell, rent, trade or share your personal information with
        third parties. The app does not include advertising networks,
        analytics or third-party tracking services.
      </p>

      <h2>6. Your Choices and Control</h2>
      <ul>
        <li>
          Grant or revoke any permission at any time in your Android settings.
          Some features will stop working if a required permission is revoked.
        </li>
        <li>
          Delete your goals, mood entries, profiles and rules inside the app,
          or clear all data from Android settings.
        </li>
        <li>
          Turn off the Accessibility Service or Device Administrator in
          Android settings at any time.
        </li>
      </ul>

      <h2>7. Security</h2>
      <p>
        We use reasonable safeguards to protect your data. Because it stays on
        your device, its security also depends on your device’s own protection
        (such as a screen lock).
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        {APP} is not directed to children under 13, and we do not knowingly
        collect personal information from children. The optional child-mode
        profile is a local setting managed by an adult on the same device; no
        information is sent to us.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Updates will be posted
        on this page with a revised “Last Updated” date.
      </p>

      <h2>10. Contact Information</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
      <p>
        <strong>{DEV}</strong>
        <br />
        App: {APP} ({PKG})
        <br />
        Email:{" "}
        <a className="text-blue-700 underline dark:text-blue-400" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>
    </main>
    </div>
  );
}