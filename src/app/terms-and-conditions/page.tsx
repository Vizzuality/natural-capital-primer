import Footer from "@/components/footer";
import Header from "@/components/header";
import { FC } from "react";

const TermsAndConditionsPage: FC = () => {
  return (
    <>
      <Header logo="color" />
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
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Acceptance of Terms</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              Please review these terms and conditions carefully before using our website. They
              govern your use of our website.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Website Content</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              This website provides information related to natural capital. It is presented for
              knowledge, education and information purposes only.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Intellectual Property</h2>
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
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Code of Conduct</h2>
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
            Disclaimer of Warranties
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
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Data Policy</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              The data collected on the website is aggregated, and we do not collect or store any
              personal or identifiable data. All site measurements are anonymous, and only the most
              essential data points are measured.
            </p>
          </div>
        </main>
        <main className="flex flex-col justify-start gap-y-4 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:border-t-2 lg:border-t-black lg:pt-6">
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Limitation of Liability</h2>
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
          <h2 className="flex-shrink-0 text-xl text-black lg:w-[350px]">Governing Law</h2>
          <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
            <p className="max-w-[600px]">
              These Terms and Conditions shall be governed by and construed under the laws of
              Australia.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
