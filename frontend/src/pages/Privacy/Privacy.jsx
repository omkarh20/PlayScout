import React, {useEffect} from 'react'
import './Privacy.css'

const Privacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> October 22, 2024</p>
      <p>
        At PlayScout ("we," "us," "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
      </p>
      <p>
        By accessing or using PlayScout, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect both personal and non-personal information to provide and improve our services.</p>

      <h3>1.1 Personal Information</h3>
      <p>You may provide personal information when you:</p>
      <ul>
        <li>Register for an account</li>
        <li>Book a sports facility</li>
        <li>Join a game or interact with other users</li>
        <li>Contact customer support</li>
      </ul>
      <p>Personal information may include, but is not limited to:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Location</li>
        <li>Payment information (processed securely by third-party payment providers)</li>
        <li>Information related to the sports facility bookings (e.g., preferred facilities, dates, and times)</li>
      </ul>

      <h3>1.2 Non-Personal Information</h3>
      <p>We may collect non-personal information about your device and browsing behavior, such as:</p>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited on our website</li>
        <li>Time spent on each page</li>
      </ul>
      <p>This information helps us improve the performance and functionality of PlayScout.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and manage your bookings for sports facilities.</li>
        <li>Facilitate user interactions, including chat features and game arrangements.</li>
        <li>Communicate with you about your account, bookings, and other service-related announcements.</li>
        <li>Process payments securely.</li>
        <li>Analyze and improve the website’s functionality and user experience.</li>
        <li>Ensure compliance with applicable laws and regulations.</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We respect your privacy and do not sell your personal information. However, we may share your information with third parties in the following circumstances:</p>
      <ul>
        <li>Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering our services.</li>
        <li>Legal Requirements: We may disclose your information if required by law, regulation, or legal process.</li>
        <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
      </ul>

      <h2>4. Security of Your Information</h2>
      <p>We take reasonable precautions to protect your information from unauthorized access, use, or disclosure. These measures include encryption, secure payment processing, and limiting access to personal information to authorized personnel.</p>
      <p>However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.</p>

      <h2>5. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar tracking technologies to enhance your experience on PlayScout. Cookies are small files stored on your device that help us recognize you when you return to the website.</p>
      <p>You can choose to disable cookies in your browser settings, but doing so may limit your ability to use certain features of our website.</p>

      <h2>6. Third-Party Links</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

      <h2>7. Your Choices and Rights</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li>Access: You can request access to the personal information we hold about you.</li>
        <li>Correction: You can update or correct any inaccurate information.</li>
        <li>Deletion: You can request the deletion of your personal information, subject to legal and contractual obligations.</li>
        <li>Opt-Out: You can opt out of receiving promotional emails from us by following the unsubscribe instructions in the emails.</li>
      </ul>
      <p>To exercise any of these rights, please contact us at your support email address.</p>

      <h2>8. Children's Privacy</h2>
      <p>PlayScout is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we discover that we have collected information from a child under 13, we will promptly delete it.</p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. When we do, we will revise the "Effective Date" at the top of this page. We encourage you to review this page periodically to stay informed of any changes.</p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:</p>
      <p><strong>PlayScout Support</strong><br />
        Email: contact@playscout.com<br /></p>

      <p>By using PlayScout, you acknowledge that you have read and understand this Privacy Policy.</p>
    </div>
  )
}

export default Privacy