import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Jacob Tech Info - Learn how we collect, use, and protect your personal information.",
};

const PrivacyPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Jacob Tech Info (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy 
            and ensuring the security of your personal information. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website jacobtechinfo.com 
            (the &quot;Site&quot;) and use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for an account (name, email address)</li>
            <li>Sign in using Google or GitHub authentication</li>
            <li>Leave comments on blog posts</li>
            <li>Contact us through forms</li>
            <li>Subscribe to newsletters</li>
          </ul>
          
          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our Site, we automatically collect certain information, including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on Site</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Authenticate users and manage accounts</li>
            <li>Process and display user-generated content (comments, posts)</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to comments, questions, and requests</li>
            <li>Monitor and analyze usage trends and preferences</li>
            <li>Protect against fraudulent, unauthorized, or illegal activity</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Site and 
            hold certain information. Cookies are files with small amounts of data that may 
            include an anonymous unique identifier. You can instruct your browser to refuse all 
            cookies or to indicate when a cookie is being sent.
          </p>
          <p>We use the following types of cookies:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic Site functionality</li>
            <li><strong>Authentication Cookies:</strong> Used to keep you logged in</li>
            <li><strong>Preference Cookies:</strong> Remember your settings (e.g., dark mode)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Third-Party Services</h2>
          <p>We use third-party services that may collect information:</p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics and usage statistics</li>
            <li><strong>Google/GitHub OAuth:</strong> For authentication purposes</li>
            <li><strong>Firebase Storage:</strong> For hosting images and media</li>
            <li><strong>Turso Database:</strong> For data storage</li>
          </ul>
          <p>These third parties have their own privacy policies governing their use of your information.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect 
            your personal information. However, no method of transmission over the Internet or 
            electronic storage is 100% secure. While we strive to use commercially acceptable 
            means to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required or 
            permitted by law. You may request deletion of your account and associated data at any time.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section className={styles.section}>
          <h2>9. GDPR Compliance (EU Users)</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data 
            protection rights under the General Data Protection Regulation (GDPR). We process 
            your personal information based on the following legal grounds:
          </p>
          <ul>
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Compliance with legal obligations</li>
            <li>Legitimate interests</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>10. CCPA Compliance (California Users)</h2>
          <p>
            If you are a California resident, you have specific rights under the California 
            Consumer Privacy Act (CCPA), including:
          </p>
          <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to know if personal information is sold or disclosed</li>
            <li>Right to say no to the sale of personal information</li>
            <li>Right to access your personal information</li>
            <li>Right to equal service and price</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>11. Children&apos;s Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided us with personal information, please contact us 
            immediately.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. 
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>By email: privacy@jacobtechinfo.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
