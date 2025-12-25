import Link from "next/link";

export default function FooterSection() {
  return (
    <footer>
      <div className="socials_wrapper">
        <Link href="https://github.com/nuuxdev" target="_blank">
          {/* <img src="/socials/github.png" alt="github" /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 9V15H22V17H21V19H20V20H19V21H18V22H16V23H15V18H14V17H15V16H17V15H18V14H19V9H18V6H16V7H15V8H14V7H10V8H9V7H8V6H6V9H5V14H6V15H7V16H9V18H7V17H6V16H4V17H5V19H6V20H9V23H8V22H6V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V4H20V5H21V7H22V9H23Z" fill="var(--foreground)" stroke="var(--background)" strokeWidth="0.2" />
          </svg>

        </Link>
        <Link href="https://linkedin.com/in/nuuxdev" target="_blank">
          {/* <img src="/socials/linkedin.png" alt="linkedin" /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2V1H2V2H1V22H2V23H22V22H23V2H22ZM13 12V20H10V9H13V10H14V9H18V10H19V20H16V12H13ZM4 8V5H7V8H4ZM7 9V20H4V9H7Z" fill="var(--foreground)" stroke="var(--background)" strokeWidth="0.2" />
          </svg>

        </Link>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <img id="rick_roll_icon" src="/socials/youtube.png" alt="youtube" />
        </Link>
        <Link href="https://t.me/nuuxchannel" target="_blank">
          {/* <img src="/socials/linkedin.png" alt="linkedin" /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16V17H4V18H1V14H2V12H1V7H2V5H4V4H6V3H11V4H13V5H15V7H16V12H15V14H13V15H11V16H5Z" fill="var(--foreground)" stroke="var(--background)" strokeWidth="0.2" />
            <path d="M23 11V16H22V18H23V22H20V21H19V20H13V19H11V18H9V17H12V16H14V15H16V13H17V7H18V8H20V9H22V11H23Z" fill="var(--foreground)" stroke="var(--background)" strokeWidth="0.2" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
