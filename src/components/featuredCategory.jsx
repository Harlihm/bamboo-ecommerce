import React from "react";

import style from "./style.module.css"
import Image from "next/image";
const featuredCategory = () => {
  return (
    <div>
      
<div className={style.product_category}>

<h1 className={style.ph1}>Bamboo Products</h1>
<ul>
  <li><a href="#">CHAIR</a></li>
  <li><a href="#">CABNET</a></li>
  <li><a href="#">SOFA</a></li>
  <li><a href="#">BENCH</a></li>
</ul>
<div className={style.ph2}>
  <Image src="/images/00.png" width={400} height={250} />
  <Image src="/images/000.png" width={400} height={250} />
  <Image src="/images/0000.png" width={400} height={250} />
</div>
<span>
  
</span>
</div>
    </div>
  )
}

export default featuredCategory
