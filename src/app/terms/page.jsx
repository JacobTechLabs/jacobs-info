import styles from "./terms.module.css";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Jacob Tech Info - Rules and guidelines for using our website and services.",
};

const TermsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using Jacob Tech Info&apos;s website and services (collectively, the &quot;Services&quot;), 
            you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, 
            you must not access or use the Services. These Terms constitute a legally binding agreement 
            between you and Jacob Tech Info.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, 
            we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes 
            a material change will be determined at our sole discretion. By continuing to access or use 
            our Services after any revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Accessing the Services</h2>
          <p>
            To access certain features of the Services, you may need to register for an account. 
            When you register, you agree to provide accurate, current, and complete information. 
            You are responsible for maintaining the confidentiality of your account credentials and 
            for all activities that occur under your account.
          </p>
          <p>You agree to:</p>
          <ul>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Ensure that you exit from your account at the end of each session</li>
            <li>Take responsibility for all activities that occur under your account</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. User Content</h2>
          <p>
            Our Services allow you to post, link, store, share, and otherwise make available certain 
            information, text, graphics, videos, or other material (&quot;User Content&quot;). You are responsible 
            for the User Content that you post on or through the Services, including its legality, 
            reliability, and appropriateness.
          </p>
          <p>By posting User Content, you represent and warrant that:</p>
          <ul>
            <li>You own the User Content or have the right to use it and grant us the rights described in these Terms</li>
            <li>The User Content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity</li>
            <li>The User Content complies with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Prohibited Activities</h2>
          <p>You agree not to engage in any of the following prohibited activities:</p>
          <ul>
            <li>Using the Services for any illegal purpose or in violation of any local, state, national, or international law</li>
            <li>Posting content that is harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
            <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation</li>
            <li>Transmitting any material that contains viruses, trojan horses, worms, or any other harmful code</li>
            <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions</li>
            <li>Collecting or tracking the personal information of others without their consent</li>
            <li>Spamming, phishing, or conducting any other fraudulent activities</li>
            <li>Scraping or data mining our content without express written permission</li>
            <li>Bypassing any measures we may use to prevent or restrict access to the Services</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Intellectual Property Rights</h2>
          <p>
            The Services and their original content (excluding User Content), features, and functionality 
            are and will remain the exclusive property of Jacob Tech Info and its licensors. The Services 
            are protected by copyright, trademark, and other laws of both the United States and foreign 
            countries. Our trademarks and trade dress may not be used in connection with any product or 
            service without the prior written consent of Jacob Tech Info.
          </p>
          <p>
            You retain any and all of your rights to any User Content you submit, post, or display on 
            or through the Services. However, by submitting User Content, you grant us a non-exclusive, 
            royalty-free, worldwide, perpetual license to use, modify, perform, display, reproduce, and 
            distribute such User Content on and through the Services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Copyright Policy</h2>
          <p>
            We respect the intellectual property rights of others. It is our policy to respond to any 
            claim that User Content posted on the Services infringes on the copyright or other intellectual 
            property rights of any person or entity.
          </p>
          <p>
            If you believe that your copyrighted work has been copied in a way that constitutes copyright 
            infringement, please provide our Copyright Agent with the following information:
          </p>
          <ul>
            <li>A physical or electronic signature of the copyright owner or authorized agent</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing</li>
            <li>Your contact information</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized</li>
            <li>A statement that the information is accurate, and under penalty of perjury</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the Services immediately, 
            without prior notice or liability, under our sole discretion, for any reason whatsoever 
            and without limitation, including but not limited to a breach of the Terms.
          </p>
          <p>
            If you wish to terminate your account, you may simply discontinue using the Services. 
            All provisions of the Terms which by their nature should survive termination shall survive 
            termination, including, without limitation, ownership provisions, warranty disclaimers, 
            indemnity, and limitations of liability.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. JACOB TECH INFO EXPRESSLY 
            DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
            TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND 
            NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, 
            OR THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR 
            RELIABLE. YOU USE THE SERVICES AT YOUR OWN RISK.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL JACOB TECH INFO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
            OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
            DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
            INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE 
            THE SERVICES.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Jacob Tech Info and its licensees and 
            licensors, and their employees, contractors, agents, officers, and directors, from and 
            against any and all claims, damages, obligations, losses, liabilities, costs or debt, and 
            expenses, resulting from or arising out of your use of the Services, your User Content, 
            or your violation of these Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United 
            States, without regard to its conflict of law provisions. Our failure to enforce any right 
            or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Dispute Resolution</h2>
          <p>
            Any disputes arising out of or relating to these Terms or the Services shall first be 
            attempted to be resolved through good faith negotiations. If negotiations fail, any 
            controversy or claim shall be settled by binding arbitration in accordance with the 
            commercial arbitration rules of the American Arbitration Association.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable by a court, the 
            remaining provisions of these Terms will remain in effect. These Terms constitute the 
            entire agreement between us regarding our Services, and supersede and replace any prior 
            agreements we might have had between us regarding the Services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>15. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>By email: legal@jacobtechinfo.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
