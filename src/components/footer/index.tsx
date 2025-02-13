import ChevronRightIcon from "@/assets/chevron-right.svg";

export function Footer() {
  return (
    <footer className="bg-primary lg:p-20  p-4 text-secondary">
      <section className="space-y-12">
        <div className="max-lg:flex lg:grid lg:grid-cols-3 lg:gap-20 gap-12 max-lg:flex-col-reverse">
          <div className="pr-20 space-y-4">
            <h3 className="text-xs text-secondaryContent">About Us</h3>
            <p className="text-base text-balance">
              Gobi Cashmere is ... lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis vestibulum enim vel dapibus commodo.
              Suspendisse nec pharetra metus.{" "}
              <span className="underline text-secondaryContent">
                <br />
                Learn More
              </span>
            </p>
          </div>
          <div className="col-span-2 lg:grid grid-cols-3 gap-6">
            <div className="max-lg:hidden space-y-4">
              <h3 className="text-xs text-secondaryContent">Follow</h3>
              <ul className="text-base">
                <li className="mb-2">Facebook</li>
                <li className="mb-2">Youtube</li>
                <li className="mb-2">Twitter</li>
                <li className="mb-2">Instagram</li>
              </ul>
            </div>
            <div className="max-lg:hidden space-y-4">
              <h3 className="text-xs text-secondaryContent">Customer care</h3>
              <ul className="text-base">
                <li className="mb-2">Support Center</li>
                <li className="mb-2">Cashmere Care</li>
                <li className="mb-2">Store Location</li>
                <li className="mb-2">Return Portal</li>
                <li className="mb-2">Rewards Program</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs text-secondaryContent">
                Let’s keep in touch!
              </h3>
              <p className="text-sm">
                Get glowing with our latest products and exclusive events.
              </p>
              <div className="text-base bg-primary border-b border-baseContent w-full p-2 flex items-center">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full bg-primary placeholder:text-secondaryContent flex-1 focus:outline-none focus:ring-0"
                />
                <ChevronRightIcon className="size-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:hidden">
          <div className="space-y-4">
            <h3 className="text-xs text-secondaryContent">Follow</h3>
            <ul className="text-base">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Youtube</li>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">Instagram</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs text-secondaryContent">Customer care</h3>
            <ul className="text-base">
              <li className="mb-2">Support Center</li>
              <li className="mb-2">Cashmere Care</li>
              <li className="mb-2">Store Location</li>
              <li className="mb-2">Return Portal</li>
              <li className="mb-2">Rewards Program</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
