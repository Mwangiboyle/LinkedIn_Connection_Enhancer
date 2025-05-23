import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer1";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Resetpass2 from "@/components/otherPages/Resetpass2";
export const metadata = {
  title:
    "Reset Password 2 || Connecxite- Turn LinkedIn Outreach into Opportunities with AI-Driven Human Connection.",
  description:
    "Connecxite- Your linkedin connection assistance",
};
export default function ResetPasswordPage2() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Resetpass2 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
