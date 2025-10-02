import Link from "next/link";

export default function FooterSection() {
  return (
    <footer>
      <div className="socials_wrapper">
        <Link href="https://github.com/nuuxdev" target="_blank">
          <img src="/socials/github.png" alt="github" />
        </Link>
        <Link href="https://linkedin.com/in/nuuxdev" target="_blank">
          <img src="/socials/linkedin.png" alt="linkedin" />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <img id="rick_roll_icon" src="/socials/youtube.png" alt="youtube" />
        </Link>
      </div>
    </footer>
  );
}
