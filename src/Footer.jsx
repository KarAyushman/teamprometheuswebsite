import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqaaglzr"); // Using our Formspree endpoint
  const navigate = useNavigate();

  if (state.succeeded) {
    return (
      <div className="bg-black p-6 text-center">
        <h3 className="text-4xl font-semibold text-green-500 mb-4 font-prom-header-font">
          Thank you for your message!
        </h3>
        <p className="text-gray-300 font-prom-header-font">
          We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <article className="md:pr-20 md:pl-20 pl-4 pr-4 pt-8 pb-8 bg-black w-svh mx-auto">
      <header>
        <h2 className="md:text-7xl text-5xl font-bold text-white font-prom-header-font pb-12">
          Contact
        </h2>
      </header>
      <div className="flex md:flex-row flex-col justify-evenly gap-20">
        <div className="flex flex-col md:w-3/5">
          <section className="">
            <div className="relative h-64 w-svh rounded-2xl overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124452.1093270017!2d79.03576906759179!3d12.899463139828507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706783959855!5m2!1sen!2sin"
                className="w-full h-full grayscale invert"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="fullname"
                    className="w-full px-5 py-3 bg-transparent border border-gray-700 rounded-xl text-gray-200 focus:border-yellow-500 focus:outline-none focus:invalid:border-red-500"
                    placeholder="Full name"
                    required
                  />
                  <ValidationError
                    prefix="Full Name"
                    field="fullname"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-5 py-3 bg-transparent border border-gray-700 rounded-xl text-gray-200 focus:border-yellow-500 focus:outline-none focus:invalid:border-red-500"
                    placeholder="Email address"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  name="message"
                  className="w-full min-h-[120px] max-h-[200px] px-5 py-3 bg-transparent border border-gray-700 rounded-xl text-gray-200 focus:border-yellow-500 focus:outline-none resize-y"
                  placeholder="Your Message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-yellow-500 flex items-center justify-center gap-3 transition-all duration-300
                  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-r disabled:hover:from-gray-800 disabled:hover:to-gray-900`}
              >
                <Send size={16} />
                <span>{state.submitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </section>
        </div>
        <div
          className="flex flex-col md:w-2/5 justify-items-center"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            gsap.to("#contact-us-button", { opacity: 100 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            gsap.to("#contact-us-button", { opacity: 0 });
          }}
          onClick={() => {
            navigate("/contact");
            gsap.to("#cursor", { scale: 1 });
            gsap.to("#contact-us-button", { opacity: 0 });
          }}
        >
          <h1 className="font-prom-header-font text-3xl text-white pb-4">
            Have any questions?
          </h1>
          <span className="font-prom-header-font text-lg text-white pb-8 text-justify">
            If you have any questions regarding the team kindly mail us using
            the quick mail option provided by us on the right hand side. If you
            are a sponsor who is looking for a dynamic team to invest in then
            you can use the information given below to contact us.
          </span>
          <div
            onMouseEnter={() => {
              gsap.to("#cursor", { scale: 4 });
              gsap.to("#contact-us-button", { opacity: 100 });
            }}
            onMouseLeave={() => {
              gsap.to("#cursor", { scale: 1 });
              gsap.to("#contact-us-button", { opacity: 0 });
            }}
            onClick={() => {
              navigate("/contact");
              gsap.to("#cursor", { scale: 1 });
              gsap.to("#contact-us-button", { opacity: 0 });
            }}
          >
            <h1 className="font-prom-header-font text-3xl text-white pb-4">
              For Sponsors!
            </h1>
            <h2 className="text-justify font-prom-header-font text-lg text-white pb-8">
              If you're a sponsor seeking a dynamic and innovative team to
              collaborate with, we would love to hear from you. By supporting
              Team Prometheus, you'll be contributing to advancements in
              open-source robotics and artificial intelligence, while gaining
              visibility through our participation in prestigious international
              competitions. Please use the contact information provided below to
              connect with us and explore how we can create a meaningful
              partnership together.
            </h2>
          </div>
          <div className="flex flex-col place-items-center align-middle">
            <img
              src="assets\Prometheus.png"
              alt="Prometheus Logo"
              className="flex max-w-40"
            />
            <h1 className="flex font-prom-header-font text-4xl text-white">
              Team Prometheus
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} Team Prometheus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactForm;
