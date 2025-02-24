import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const handleContactClick = () => {
    const email = "maximiliano.dumont@gmail.com";
    const subject = "Hire an amazing person and a great developer!🚀"; // Rellena el asunto aquí
    const body = `Hi [Insert company name here],

  Welcome to the team! 🎉 We’re thrilled to offer you a position as [Insert role here]. Your portfolio blew us away, and we’re excited to have someone as talented and positive as you on board!

  At [Insert company name here], we value creativity, teamwork, and a good sense of humor. We know you’ll fit right in and help us do amazing things (and maybe win a few awards along the way!).

  Next steps? We’ll be in touch soon to discuss details and answer any questions. Get ready for an exciting journey!

  Cheers,
  The [Insert company name here] Team

  P.S. Bring your favorite coffee mug—we work hard but celebrate even harder! ☕✨`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let´s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
              Ready to bring fresh ideas and skills to your team? Let’s connect and discuss how I can contribute to your company’s success!
              </p>
            </div>
            <div>
              <button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max"
                onClick={handleContactClick}
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};