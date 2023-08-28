import Link from "next/link";
import React from "react";

function page({ params }: { params: any }) {
  return (
    <div>
      test1<Link href={"/" + params.test + "/test2"}>LINK</Link>
    </div>
  );
}

export default page;
