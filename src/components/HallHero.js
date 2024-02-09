import React from 'react'

export default function HallHero(props) {
  return (
    <>
      {/* <header className={hero}>{children}</header> */}
      <div className={props.hero}>
        <img src={props.hallImg} alt="Loading..." />
      </div>
    </>
  )
}
// import React from 'react'

// export default function HallHero() {
//   return (
//     <div>
//       <h1> Hall Hero Page  </h1>
//     </div>
//   )
// }
