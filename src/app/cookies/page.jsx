import styles from "./cookies.module.css";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Jacob Tech Info - Learn how we use cookies on our website.",
};

const CookiesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cookie Policy</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you 
            visit a website. They are widely used to make websites work more efficiently and provide 
            information to the website owners. Cookies help us provide you with a better experience 
            by enabling us to monitor which pages you find useful and which you do not.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How We Use Cookies</h2>
          <p>
            Jacob Tech Info uses cookies in a range of ways to improve your experience on our website, 
            including:
          </p>
          <ul>
            <li>Keeping you signed in to your account</li>
            <li>Understanding how you use our website</li>
            <li>Remembering your preferences (such as dark/light mode)</li>
            <li>Improving the speed and security of our site</li>
            <li>Personalizing content and advertisements</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Types of Cookies We Use</h2>
          
          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core 
            functionality such as security, network management, and account access. You may disable 
            these by changing your browser settings, but this may affect how the website functions.
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session</td>
                <td>Maintains your login session</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>auth_token</td>
                <td>Authentication token for API access</td>
                <td>30 days</td>
              </tr>
            </tbody>
          </table>

          <h3>Preference Cookies</h3>
          <p>
            These cookies enable a website to remember information that changes the way the website 
            behaves or looks, like your preferred language or the region that you are in.
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>theme</td>
                <td>Stores your theme preference (light/dark)</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting 
            and reporting information anonymously. This helps us improve our website and your 
            experience.
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics - distinguishes users</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics - distinguishes users</td>
                <td>24 hours</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>Google Analytics - throttles request rate</td>
                <td>1 minute</td>
              </tr>
            </tbody>
          </table>

          <h3>Third-Party Cookies</h3>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report 
            usage statistics, deliver advertisements, and so on. These include cookies from:
          </p>
          <ul>
            <li>Google Analytics (usage analytics)</li>
            <li>Google Authentication (login services)</li>
            <li>GitHub Authentication (login services)</li>
            <li>Firebase (image hosting)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. 
            However, if you limit the ability of websites to set cookies, you may worsen your 
            overall user experience, as it will no longer be personalized to you. It may also stop 
            you from saving customized settings like login information.
          </p>
          <p>To manage cookies in your browser:</p>
          <ul>
            <li>
              <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>More Information</h2>
          <p>
            For more information about cookies, including how to see what cookies have been set 
            and how to manage and delete them, visit{' '}
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
              allaboutcookies.org
            </a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, 
            legislation, or our data practices. Please check this page periodically for updates. 
            The date at the top of this page indicates when it was last updated.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us:</p>
          <ul>
            <li>By email: privacy@jacobtechinfo.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;
