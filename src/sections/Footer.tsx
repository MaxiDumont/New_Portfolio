import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/maximiliano-dumont/" },
  { name: "Facebook", href: "https://www.facebook.com/maxi.dumont" },
  { name: "Instagram", href: "https://www.instagram.com/maxidumont/" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
        [mask-image:radial-gradient(50%_95%_at_bottom_center,black,transparent);] -z-10"></div>
      <div className="container z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy 2025. All rights reserved.</div>
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.name}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};