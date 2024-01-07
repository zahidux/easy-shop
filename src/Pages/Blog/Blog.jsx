import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="container my-28">
      <Helmet>
        <title> Blog - Easy Shop</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Easy Shop <span className="text-orange-800">Blog</span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
          <div
            data-aos="fade-right"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600 ">
              Question:
              <span className="text-slate-900">How can I track my order?</span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                Once your order is shipped, you'll receive a confirmation email
                with a tracking number and a link to our tracking page. You can
                use this information to monitor the status and location of your
                package in real-time.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600">
              Question:{" "}
              <span className="text-slate-900">
                What payment methods do you accept?
              </span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                We accept various payment methods, including credit/debit cards
                (Visa, MasterCard, American Express), PayPal, and other secure
                payment gateways. Rest assured, your payment information is
                encrypted and kept confidential.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600">
              <span className="text-slate-900">
                {" "}
                Is it possible to return or exchange a product?
              </span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                Yes, we have a hassle-free return and exchange policy. If you're
                not satisfied with your purchase, you can initiate a return
                within 30 days of receiving your order. Visit our Returns page
                for more details on the process.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600">
              Question:{" "}
              <span className="text-slate-900">
                How do I contact customer support for assistance?
              </span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                Our customer support team is here to help! You can reach us
                through our Contact Us page or directly via email at
                support@example.com. We aim to respond within 24 hours to
                address any queries or concerns you may have.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600">
              Question:{" "}
              <span className="text-slate-900">
                Are the product images true to the actual items?
              </span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                We strive to provide accurate representations of our products
                through high-quality images. However, variations in display
                settings and lighting can impact perception. Rest assured, our
                product descriptions provide detailed information, and if you
                ever have concerns, our customer support team is happy to
                assist.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600">
              Question:{" "}
              <span className="text-slate-900">
                Can I modify my order after it has been placed?
              </span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                Once an order is confirmed, it enters our processing system to
                ensure swift dispatch. Unfortunately, this means we're unable to
                modify orders once they've been placed. Please double-check your
                order before confirming the purchase.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="bg-slate-200 p-5 rounded-xl shadow-xl hover:shadow-sky-200"
          >
            <h3 className="text-xl font-semibold text-orange-600">
              Question:{" "}
              <span className="text-slate-900">
                What security measures do you have in place to protect my
                personal information?
              </span>
            </h3>
            <p className="text-base text-sky-500 font-medium mt-2">
              Answer :
              <span className="text-slate-900">
                We take your security seriously. Our website uses
                industry-standard encryption (SSL) to safeguard your personal
                and payment information. Additionally, we adhere to strict
                privacy policies, ensuring that your data is handled securely
                and responsibly.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
