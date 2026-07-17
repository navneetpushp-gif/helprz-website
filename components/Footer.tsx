export default function Footer() {
  return (
    <>
      <div className="threshold" />
      <footer className="bg-indigo">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 42 42" fill="none" className="h-8 w-8">
                  <rect width="42" height="42" rx="11" fill="#F6B90D" />
                  <path d="M11 20L21 11L31 20" stroke="#0D1B63" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 18V30H28V18" stroke="#0D1B63" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="19" y="23" width="4" height="7" fill="#0D1B63" />
                </svg>
                <span className="font-display text-lg font-bold text-white">
                  Helpr<em className="not-italic text-marigold">z</em>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-[#A9B7BF]">
                Trusted home service professionals, verified for your safety
                and convenience. Every home, every help.
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#A9B7BF]">
                <li>About Us</li>
                <li>Careers</li>
                <li>Help</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#A9B7BF]">
                <li>Maid &amp; Housekeeping</li>
                <li>Cook &amp; Chef</li>
                <li>Elder &amp; Patient Care</li>
                <li>Drivers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white">Contact</h4>
              <p className="mt-3 text-sm text-[#A9B7BF]">
                Rising Homes, Sector 92, Gurgaon,
                <br />
                Haryana, India
              </p>
              <p className="mt-2 text-sm text-[#A9B7BF]">Support@helprz.in</p>
              <p className="mt-2 text-sm text-[#A9B7BF]">+91 77177 17717</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#8892A6] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Helprz Services Pvt. Ltd. All rights reserved.</span>
            <span>Privacy Policy &middot; Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
}
