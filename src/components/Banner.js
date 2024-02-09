import React from 'react'

export default function Banner(props) {
  return (
    <div className={props.cname}>
      <h1>{props.title}</h1>
      <div/>
      <p>{props.subtitle}</p>
      {/* {children} */}
    </div> 
  );
}

// import React from 'react'

// export default function Banner() {
//   return (
//     <div>
//       <h1>wrong </h1>
//     </div>
//   )
// }
