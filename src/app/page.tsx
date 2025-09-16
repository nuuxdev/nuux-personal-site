import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>NuuX&apos;s Personal Site</h1>
        <p style={{ textAlign: "center", maxWidth: "40rem" }}>
          This is my personal site. Yes, there&apos;s not much to see,😆 BUT
          it&apos;s a work in progress. <br /> U know what makes it different
          from my other portfolio projects? <br /> It&apos;s not empty. <br />
          It&apos;s out there... damn right <br />
          And it is Goddamn responsive 😎
          <br />
          And that&apos;s the point.
        </p>
        <h3>
          NB: It will be different next time you visit. Promise. Await. But not
          All 😁
        </h3>
      </div>
    </>
  );
}
