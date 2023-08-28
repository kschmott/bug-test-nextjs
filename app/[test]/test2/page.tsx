import React from "react";
import Link from "next/link";
function page() {
  return (
    <div>
      test2
      <Link href={"/foo/test1"}>LINK</Link>
    </div>
  );
}

export default page;
