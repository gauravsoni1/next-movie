import Image from "next/image";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 p-6">
      <div>
        <Image src="/images/logo.png" alt="logo" width={60} height={60} />
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-semibold mb-2">About Us</h4>
        <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="ml-4">
        <h4 className="text-xl font-semibold mb-2">Help & Support</h4>
        <ul>
          <li>Refund</li>
          <li>FAQ</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className="flex gap-4 self-end justify-self-end">
        <Image
          src="/images/social/facebook.svg"
          alt="facebook"
          width={30}
          height={30}
        />
        <Image
          src="/images/social/twitter.svg"
          alt="facebook"
          width={30}
          height={30}
        />
        <Image
          src="/images/social/youtube.svg"
          alt="facebook"
          width={30}
          height={30}
        />
      </div>
    </footer>
  );
};

export default Footer;
