import React from 'react'
import style from "./style.module.css"
import Image from 'next/image';


const featured = () => {
    return (
     
<div className={style.main__Featured}>
  <h1 className={style.main__Featured_txt}>Featured Products</h1>
<div className={style.featured__content}>
<div className={style.featured__content1}>
<Image src="/images/a.png" width={396} height={510}  />
<Image src="/images/d.png" width={396} height={510}  />
<Image src="/images/g.png" width={396} height={510}  />
<Image src="/images/j.png" width={396} height={510}  />
</div>
<div className={style.featured__content2}>
<Image src="/images/b.png" width={396} height={510}  />
<Image src="/images/e.png" width={396} height={510}  />
<Image src="/images/h.png" width={396} height={510}  />
<Image src="/images/k.png" width={396} height={510}  />
</div>
<div className={style.featured__content1}>
<Image src="/images/c.png" width={396} height={510}  />
<Image src="/images/f.png" width={396} height={510}  />
<Image src="/images/i.png" width={396} height={510}  />
<Image src="/images/l.png" width={396} height={510}  />
</div>
</div>
<div className={style.featured_wrapper}>
<a className={style.featured_link} href="#"> LOAD MORE </a>
</div>

</div>
    );
  };
  
  export default featured;
  