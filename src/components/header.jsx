import React from 'react'
import style from "./style.module.css"
import {BsArrowLeftCircle} from "react-icons/bs"
import {BsArrowRightCircle} from "react-icons/bs"
import Button from "../containers/Button"

const header = () => {
  return (
    <div>
      
<div className={style.header}>
  <div className={style.header_items}>
<h1 className={style.header_h1} >INDOORS</h1>
<h2 className={style.header_h2}>See BamBoo's New Range Of Indoor Forniture</h2>
<div className={style.header_p}>
<p className={style.header_paragraph}>Classic meet morder living,</p>
<p className={style.header_paragraph}>Bamboo had a fantastic range of indoor furniture,</p>
<p className={style.header_paragraph}>Perfect for any mordern home</p>
</div>
  <a className={style.header_link} href=""> SEE MORE</a>

</div>

  </div>

<div className={style.header_nav}>
<Button>
<BsArrowLeftCircle  className={style.headerNav}/>
</Button>
<Button>
<BsArrowRightCircle className={style.headerNav1}/>
</Button>
</div>
    </div>
  )
}

export default header
