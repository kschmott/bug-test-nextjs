import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      test1<Link href={"/foo/test2"}>LINK</Link>
    </div>
  );
}

export default page;
