import { Tilt } from '@jdion/tilt-react'

const Menuleft = () => {
  return (
    <div className='w-2/3   overflow-hidden h-full  py-10  p-52 px-40 bg-cover '>
        <Tilt  className=' hover:scale-50 w-full h-full  relative'>
              <img className=' scale-[0.94] opacity-50  h-full w-full object-center object-cover absolute ' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className=' scale-[0.93] opacity-50 h-full w-full object-center object-cover -xl absolute ' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className=' scale-[0.92] opacity-10  h-full w-full object-center object-cover absolute  ' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" alt="" />
              <img className='  opacity-50 scale-[0.91] h-full w-full object-center object-cover absolute ' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" alt="" />
        </Tilt>
    </div>
  )
}

export default Menuleft