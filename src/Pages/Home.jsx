import CodeCards from "../Components/CodeCards"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div className=" bg-white min-h-screen">
      <div className=" mx-20 text-center my-10  font-bold whitespace-nowrap">
        <h1 className="text-3xl md:text-4xl animate-bounce">React JS Tools</h1>
        <p className=" text-xl md:text-2xl">All in one place</p>
      </div>

    <div className=" mx-4 bg-white rounded-sm drop-shadow-xl h-[600px]">
      <div className=" mx-7 font-sans text-sm md:text-lg">
       <h1 className=" font-bold">Start React JS Vite</h1>
       <CodeCards code="npm create vite@latest my-project -- --template react" code2 ="cd my-project"/>

       <h1 className=" font-bold mt-5">Tailwind</h1>
       <CodeCards code="npm install -D tailwindcss postcss autoprefixer" code2 ="npx tailwindcss init -p"/>

       <h1 className=" font-bold mt-5">Tailwind Config</h1>
       <CodeCards code="content: [
    `./index.html`,
    `./src/**/*.{js,ts,jsx,tsx}`,
  ],"/>

       <h1 className=" font-bold mt-5">Index.css</h1>
       <CodeCards code={`@tailwind base; @tailwind components; @tailwind utilities;`} /> 



      </div>
    </div>  
     <Footer/>
    </div>
  )
}

export default Home
