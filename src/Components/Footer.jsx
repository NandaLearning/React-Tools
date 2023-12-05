import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" w-full bg-white mt-10 my-4">
      <div className="flex justify-between ">
       <Link to={"https://reactjs.org/"}><img src="react.png" className=" h-16 ml-2"></img></Link>

       <p className=" mt-4 font-bold">CopyRight NandaLearning @2023</p>
       <Link to={"https://github.com/NandaLearning"}><img src="git.png" className="  h-10 mr-2 mt-2"></img></Link>

      </div>
    </div>
  )
}

export default Footer
