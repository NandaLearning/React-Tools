const CodeCards = (props) => {
    //eslint-disable-next-line
    let {code,code2} = props
  return (
    <div className=" bg-slate-800 rounded-xl w-full h-20 p-2 mt-2">
     <h1 className=" text-slate-300 mx-5">{code}</h1>
     <h1 className=" text-slate-300 mx-5"> {code2}</h1>
    </div>
  )
}

export default CodeCards
