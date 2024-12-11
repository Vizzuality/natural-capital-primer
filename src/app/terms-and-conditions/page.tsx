import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { FC } from "react";

const TermsAndConditionsPage: FC = () => {
  return (
    <>
      <Header />
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pb-12 pt-10 lg:mt-14 lg:gap-y-10 lg:px-20 lg:pb-16 xl:mt-40">
        <h1 className="text-4.2xl font-medium lg:text-5xl">Terms & Conditions</h1>
        <div className="flex max-w-[827px] flex-col gap-y-4">
          <p className="max-w-[827px] text-lg lg:text-xl">
            Please review these terms and conditions carefully before using this website. They
            govern your use of this website.
          </p>
        </div>
      </div>

      <div className="mx-auto my-10 flex max-w-7xl flex-col gap-y-14 px-6 lg:my-28 lg:gap-y-20 lg:px-20">
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Acceptance of terms</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              Please review these terms and conditions carefully before using our website. They
              govern your use of our website.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Website content</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              This website provides information related to natural capital. It is presented for
              knowledge, education and information purposes only.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Intellectual property</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              All content on this website, including but not limited to text, images, graphics,
              logos, and software, is the property of Macdoch Foundation or its licensors and is
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="max-w-[600px]">
              Content on this site may be reproduced for educational purposes only. Reproduction
              includes, but is not limited to, copying, displaying, and distributing the content.
              When reproducing content from this website, it must be accompanied by the following
              citation: Macdoch Foundation and La Trobe University, Natural Capital Primer, link to
              the site, accessed at {"<dd/mm/yy>"}.
            </p>
            <p className="max-w-[600px]">
              Any use of the content that does not comply with this attribution requirement is
              prohibited.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Code of conduct</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              Users agree to access the website lawfully and respectfully. You may not:
            </p>
            <ol className="flex list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
              <li className="max-w-[600px]">
                Use the website for any illegal or unauthorised reasons
              </li>
              <li className="max-w-[600px]">
                Try to interfere with the website&apos;s functionality or security
              </li>
              <li className="max-w-[600px]">Upload or transmit any harmful or malicious content</li>
              <li className="max-w-[600px]">Violate applicable laws or regulations</li>
              <li className="max-w-[600px]">
                Attempt to gain unauthorised access to any part of the website or to any systems or
                networks connected to the website
              </li>
            </ol>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            Disclaimer of warranties
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              The website and its content are provided on an &quot;as is&quot; basis without
              warranties, either expressed or implied. This includes, but is not limited to, implied
              warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Limitation of liability</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              Macdoch Foundation does not warrant the accuracy, completeness, or reliability of any
              content on the website. In no event shall Macdoch Foundation be liable for any damages
              whatsoever, including but not limited to direct, indirect, incidental, or
              consequential damages, arising from the use or inability to use this website.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Governing law</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              These Terms and Conditions shall be governed by and construed under the laws of
              Australia.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Who we are</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <ul className="flex list-disc flex-col gap-y-6 pl-4 lg:gap-y-5">
              <li className="max-w-[600px]">
                The Macdoch Foundation is the company responsible for the processing of your
                personal data, with the purpose of providing you with the services identified within
                this Privacy Policy (The “Web Site”).
              </li>
              <li className="max-w-[600px]">
                The Macdoch Foundation is an Australian philanthropic foundation headquartered at
                Level 5/100 Market St, Sydney NSW 2000, Australia.
              </li>
              <li className="max-w-[600px]">
                At the Macdoch Foundation, we are fully committed to upholding your fundamental
                right to the protection of your personal data and this privacy policy is intended to
                inform you of your rights under the General Data Protection Regulation (“GDPR”).
              </li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            Key points of our policy
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              In this Privacy Policy, we will run through all the services offered by the Macdoch
              Foundation that require your personal data to be processed. As such, you will be
              informed of:
            </p>
            <ul className="flex list-disc flex-col gap-y-6 pl-4 lg:gap-y-5">
              <li className="max-w-[600px]">
                The purpose behind processing your personal data and for what reason the Macdoch
                Foundation handles your personal data.
              </li>
              <li className="max-w-[600px]">
                The legal framework that justifies the processing behind each purpose.
              </li>
              <li className="max-w-[600px]">
                If there is any disclosure of your data to third parties or if there are any
                international transfers containing the same information. Regarding this, we inform
                you that we do not transfer your data to third parties and we would only hand them
                over if there was a legal obligation to do so (derived from a request from the State
                Security Forces or Courts) or if it was absolutely necessary in order to provide you
                with a service, in which case we will ask for your express consent.
              </li>
              <li className="max-w-[600px]">
                The time period for which your data will be kept, which is necessary to maintain our
                working relationship or to provide you with the service or function that you have
                requested. Therefore, if we don’t need your data to provide you with any service,
                then this data will be blocked and will only be accessible by the Public Authorities
                in the event of legal, administrative or fiscal claims in accordance with the
                deadlines established by each regulation for this purpose.
              </li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            What information we will collect about you
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              You should know that there are different ways to collect personal data:
            </p>
            <ul className="flex list-disc flex-col gap-y-6 pl-4 lg:gap-y-5">
              <li className="max-w-[600px]">
                The purpose behind processing your personal data and for what reason the Macdoch
                Foundation handles your personal data.
              </li>
              <li className="max-w-[600px]">
                The data you provide us directly. We collect information about you when you contact
                us through the channels set up for this purpose, such as the contact address. When
                you contact us through this channel, we may collect your email, your name and
                surname, your country of residence, and other data that you voluntarily provide us
                to maintain the business relationship. We may also collect your contact address in
                order to gather feedback or conduct user research on our products, in which case we
                will always explicitly specify such a purpose. In order to ensure that the
                information provided is always up to date and free of errors, you must notify the
                Macdoch Foundation as soon as possible of any changes to your personal data that may
                occur by sending an e-mail to the address given here.
              </li>
              <li className="max-w-[600px]">
                Data obtained indirectly. When you browse, different cookies and other tracking
                devices may be installed on your device, as explained in our cookie policy.
              </li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            What is the origin of your data?
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              We consider that all the data processed by the Macdoch Foundation has been freely
              provided by you.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            How will we use your personal information? What services do we provide for you?
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              We will act as the responsible party for processing your personal data for all
              purposes. The aforementioned purposes are:
            </p>
            <ul className="flex list-disc flex-col gap-y-6 pl-4 lg:gap-y-5">
              <li className="max-w-[600px]">
                To provide you with the services you have requested from us, to attend to your
                requests for information as well as to assist you in the practice of your rights.
              </li>
              <li className="max-w-[600px]">
                To get voluntary feedback and conduct user research on our products.
              </li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            Data transfer and international transfer
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              At the Macdoch Foundation, we do not give your personal information to third parties
              and we don’t do international transfers with the purposes described, beyond the
              assignments that may result necessary to public administrations and administration of
              justice, in compliance with the legal obligations that apply to us. However, if
              necessary, they will always be assigned based on a legal basis that legitimizes this
              treatment, and we will inform you beforehand.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Exercising your rights</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              Please note that you will be able to exercise the following rights:
            </p>
            <ul className="flex list-disc flex-col gap-y-6 pl-4 lg:gap-y-5">
              <li className="max-w-[600px]">
                Right to access your personal data in order to know which data points are being
                processed and the processing operations that are being carried out with them.
              </li>
              <li className="max-w-[600px]">
                Right to rectify any piece of inaccurate personal data.
              </li>
              <li className="max-w-[600px]">Right to delete your personal data, where possible.</li>
              <li className="max-w-[600px]">
                Right to request a restriction on the processing of your personal data when the
                accuracy, legality or necessity of the data processing is in doubt, in which case we
                may retain the data for the purpose of exercising or defending any claims put
                forward.
              </li>
              <li className="max-w-[600px]">
                Right to object to the processing of your personal data when the legal basis that
                enables us to process them, in accordance with paragraph 4 above, is of legitimate
                interest.
              </li>
              <li className="max-w-[600px]">Right to oppose automated decision-making.</li>
              <li className="max-w-[600px]">
                Right to the transferability of your data, when the legal basis that authorizes us
                to process it in the manner indicated in section 4 above, is the existence of a
                contractual relationship or your consent.
              </li>
              <li className="max-w-[600px]">
                Right to revoke consent that has been granted to the Macdoch Foundation.
              </li>
            </ul>
            <p className="mt-6 max-w-[600px]">
              You will be able to exercise your rights at any time and for free in the following
              ways:
            </p>
            <ul className="flex list-disc flex-col gap-y-6 pl-4 lg:gap-y-5">
              <li className="max-w-[600px]">
                By sending an e-mail through the contact form at{" "}
                <Link
                  className="break-words text-blue-500 underline"
                  href="https://macdochfoundation.org/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://macdochfoundation.org/contact/
                </Link>{" "}
                indicating the right you wish to exercise and your personal details.
              </li>
              <li className="max-w-[600px]">
                By sending a written request to the address listed in the paragraph above,
                indicating the right you wish to exercise and your personal details.
              </li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            Retention periods and cookies
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              We will only keep your data for as long as it is necessary to offer you these
              services. Any data you provide us through the channels will be blocked as long as they
              are no longer necessary to manage the service and will only be available if there is a
              legal obligation (arising from a request from the State Security Forces or Courts and
              Tribunals) and when you exercise your rights here. In relation to your personal data
              obtained through the channels, the Macdoch Foundation uses Cookies according to the
              Cookies Policy that you can consult further down this page.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            Security and confidentiality
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              We are committed to the safekeeping of your information. In order to prevent the
              unauthorised access or the unauthorised disclosure of personal data, we have taken
              appropriate technical and physical measures and management processes to safeguard and
              secure the information we gather about you.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            Updating our privacy policy
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              We do our best to keep our privacy policy fully updated on a monthly basis. If we make
              changes, we will do so in a manner that is identifiable, clear and specific, in
              accordance with the relationship we have already established with you (for example, we
              may communicate the changes to you by email). This Privacy Policy has been revised and
              posted on 4 October 2024.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Cookie policy</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              The Macdoch Foundation, on its own account or that of a third party contracted to
              provide measurement services, may use cookies and other similar mechanisms for storing
              and retrieving data in terminal equipment (hereinafter, “Cookies”) when the User
              navigates the Web Site in order to allow and facilitate user interaction with it. The
              statistical services – own or others – used by the website may use “cookies” in order
              to establish metrics and patterns of use of the site. Access, use and, in general,
              browsing through the website necessarily implies the user’s consent to the use of
              “cookies” by the Macdoch Foundation and/or its service providers. Through the use of
              cookies it is possible for the server where the Web Site is hosted to recognize the
              Web browser used by the User, with the purpose of making navigation easier, allowing,
              for example, access to users who have previously registered, access to areas,
              services, promotions or contests reserved exclusively for them without having to
              register on each visit. They are also used to measure audience and traffic parameters,
              as well as to control the progress and number of entries.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">What are cookies?</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              A cookie is a file that is downloaded to your computer when you access certain web
              pages. Cookies enable a website, among other things, to store and retrieve information
              about a user’s or computer’s browsing habits and, depending on the information they
              contain and how you use your computer, can be used to recognize the user.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Cookie types</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px] font-bold">By domain management entity</p>
            <ul className="flex list-disc flex-col gap-y-3 pl-4 lg:gap-y-2">
              <li className="max-w-[600px]">Own cookies.</li>
              <li className="max-w-[600px]">Third party cookies.</li>
            </ul>
            <p className="mt-6 max-w-[600px] font-bold">For your length of stay</p>
            <ul className="flex list-disc flex-col gap-y-3 pl-4 lg:gap-y-2">
              <li className="max-w-[600px]">Session cookies.</li>
              <li className="max-w-[600px]">Persistent cookies.</li>
            </ul>
            <p className="mt-6 max-w-[600px] font-bold">For its purpose</p>
            <ul className="flex list-disc flex-col gap-y-3 pl-4 lg:gap-y-2">
              <li className="max-w-[600px]">Technical cookies.</li>
              <li className="max-w-[600px]">Personalization cookies.</li>
              <li className="max-w-[600px]">Analysis cookies.</li>
              <li className="max-w-[600px]">Advertising cookies.</li>
              <li className="max-w-[600px]">Behavioral advertising cookies.</li>
              <li className="max-w-[600px]">Social network cookies.</li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">
            What types of cookies does this website use and what are its purposes?
          </h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px] font-bold">Google Analytics:</p>
            <ul className="flex list-disc flex-col gap-y-3 pl-4 lg:gap-y-2">
              <li className="max-w-[600px]">Name of cookies: ga, _gat</li>
              <li className="max-w-[600px]">Issuer’s website: google.com</li>
              <li className="max-w-[600px]">Cookie Type: Analysis Cookie</li>
              <li className="max-w-[600px]">Description: Web traffic analysis</li>
            </ul>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Contact form</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              You can get in touch by using our contact form at{" "}
              <Link
                className="break-words text-blue-500 underline"
                href="https://macdochfoundation.org/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://macdochfoundation.org/contact/
              </Link>
              . A friendly human will get back to you as soon as we can.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Analytics</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              We use Google Analytics, a web analytics service provided by Google, Inc. (“Google”)
              to collect data about how visitors use our website. These data are collected using
              cookies and are anonymous and no individuals are identified. See the Cookie Policy
              above for more details on our use of cookies.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
