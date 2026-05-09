import styles from "./disclaimer.module.css";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Jacob Tech Info - Important legal notices regarding our content and services.",
};

const DisclaimerPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Disclaimer</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>General Disclaimer</h2>
          <p>
            The information provided on Jacob Tech Info (the &quot;Site&quot;) is for general informational 
            and educational purposes only. All information on the Site is provided in good faith, 
            however we make no representation or warranty of any kind, express or implied, regarding 
            the accuracy, adequacy, validity, reliability, availability, or completeness of any 
            information on the Site.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Professional Disclaimer</h2>
          <p>
            <strong>Not Professional Advice:</strong> The content on this Site, including but not 
            limited to articles, tutorials, code examples, and technical documentation, is provided 
            for educational and informational purposes only. It does not constitute professional 
            advice of any kind, including but not limited to legal, financial, technical, or business advice.
          </p>
          <p>
            <strong>Consult Professionals:</strong> Before making any business, technical, or 
            legal decisions, we strongly recommend that you consult with qualified professionals 
            who can provide advice tailored to your specific situation.
          </p>
          <p>
            <strong>Implementation Risks:</strong> Any implementation of code, techniques, or strategies 
            described on this Site is done at your own risk. Jacob Tech Info is not responsible for 
            any damages, losses, or issues that may arise from following our tutorials or using 
            our code examples.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Technical Content Disclaimer</h2>
          <p>
            <strong>Code Examples:</strong> All code examples, scripts, and technical content 
            provided on this Site are for demonstration purposes. They may not be production-ready 
            and should be thoroughly tested before deployment in a production environment.
          </p>
          <p>
            <strong>Technology Changes:</strong> The web development field evolves rapidly. Information, 
            libraries, frameworks, and best practices mentioned on this Site may become outdated. 
            Always verify current documentation and best practices before implementation.
          </p>
          <p>
            <strong>Browser and Device Compatibility:</strong> Code examples and demonstrations may 
            work differently across various browsers, devices, and operating systems. Test thoroughly 
            in your target environments.
          </p>
        </section>

        <section className={styles.section}>
          <h2>External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or 
            content belonging to or originating from third parties or links to websites and features 
            in banners or other advertising. Such external links are not investigated, monitored, 
            or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p>
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or 
            reliability of any information offered by third-party websites linked through the 
            Site or any website or feature linked in any banner or other advertising. We will 
            not be a party to or in any way be responsible for monitoring any transaction between 
            you and third-party providers of products or services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Affiliate Links Disclaimer</h2>
          <p>
            The Site may contain affiliate links. This means we may receive a commission if you 
            click on a link and make a purchase. This comes at no additional cost to you and helps 
            support the maintenance and development of our content.
          </p>
          <p>
            We only recommend products and services that we believe will add value to our readers. 
            However, you should perform your own due diligence before making any purchase decisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Testimonials Disclaimer</h2>
          <p>
            The Site may contain testimonials by users of our products and/or services. These 
            testimonials reflect the real-life experiences and opinions of such users. However, 
            the experiences are personal to those particular users, and may not necessarily be 
            representative of all users of our products and/or services. We do not claim, and 
            you should not assume, that all users will have the same experiences.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every attempt to ensure that the information contained in this 
            Site has been obtained from reliable sources, Jacob Tech Info is not responsible for 
            any errors or omissions or for the results obtained from the use of this information. 
            All information in this Site is provided &quot;as is,&quot; with no guarantee of completeness, 
            accuracy, timeliness, or of the results obtained from the use of this information, 
            and without warranty of any kind, express or implied.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Fair Use Disclaimer</h2>
          <p>
            This Site may use copyrighted material which has not always been specifically authorized 
            by the copyright owner. We are making such material available for criticism, comment, 
            news reporting, teaching, scholarship, or research. We believe this constitutes a 
            &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the 
            United States Copyright Law.
          </p>
          <p>
            If you wish to use copyrighted material from this Site for your own purposes that 
            go beyond fair use, you must obtain permission from the copyright owner.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Views Expressed Disclaimer</h2>
          <p>
            The views and opinions expressed in articles, comments, and other user-generated content 
            on this Site are those of the authors and do not necessarily reflect the official policy 
            or position of Jacob Tech Info. Any content provided by our bloggers or authors are of 
            their opinion and are not intended to malign any religion, ethnic group, club, organization, 
            company, individual, or anyone or anything.
          </p>
        </section>

        <section className={styles.section}>
          <h2>No Responsibility Disclaimer</h2>
          <p>
            The information, software, products, and services included in or available through 
            the Site may include inaccuracies or typographical errors. Changes are periodically added 
            to the information herein. Jacob Tech Info and/or its suppliers may make improvements 
            and/or changes in the Site at any time.
          </p>
          <p>
            Jacob Tech Info and/or its suppliers make no representations about the suitability, 
            reliability, availability, timeliness, and accuracy of the information, software, 
            products, services, and related graphics contained on the Site for any purpose. To the 
            maximum extent permitted by applicable law, all such information, software, products, 
            services, and related graphics are provided &quot;as is&quot; without warranty or condition of 
            any kind.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Use at Your Own Risk Disclaimer</h2>
          <p>
            ALL INFORMATION ON THE SITE IS PROVIDED &quot;AS IS&quot; WITH NO GUARANTEE OF COMPLETENESS, 
            ACCURACY, OR TIMELINESS, AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. 
            IN NO EVENT WILL JACOB TECH INFO, ITS AFFILIATES, EMPLOYEES, AGENTS, OR CONTRACTORS 
            BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DECISION MADE OR ACTION TAKEN IN RELIANCE 
            ON THE INFORMATION CONTAINED IN THIS SITE, OR FOR ANY CONSEQUENTIAL, SPECIAL, OR 
            SIMILAR DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Information</h2>
          <p>If you have any questions about this Disclaimer, please contact us:</p>
          <ul>
            <li>By email: legal@jacobtechinfo.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DisclaimerPage;
