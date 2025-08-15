import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full max-w-[450px]' src={assets.about_img} alt=''></img>
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quidem minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis reprehenderit minus expedita. Ipsum quas, iste, nam temporibus obcaecati praesentium sit asperiores distinctio quia delectus ullam minima amet totam voluptate.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quaerat accusamus veniam ipsam! Aspernatur et corporis nobis! Alias, blanditiis dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, natus esse. Dolorem ratione, necessitatibus earum reiciendis adipisci qui. Soluta recusandae ipsam voluptates fugit saepe, illo modi, laboriosam provident reiciendis error veritatis minima, nobis similique ratione quibusdam sapiente ipsa. Aperiam, accusamus!</p>
                <b className='text-gray-800'> Our Mission</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, temporibus, minus voluptas culpa omnis laborum, quam et perferendis sunt porro inventore ex suscipit officiis id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aut id inventore sit facere reprehenderit alias eveniet explicabo quos voluptate. Et architecto quaerat totam quos.</p>
            </div>
        </div>

        <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 felx flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='textgray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga ipsam modi nostrum veniam laboriosam ea ducimus magni voluptas, ex fugit itaque similique quas. Maxime asperiores aspernatur modi eum ab.</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 felx flex-col gap-5'>
              <b>Convenience:</b>
              <p className='textgray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga ipsam modi nostrum veniam laboriosam ea ducimus magni voluptas, ex fugit itaque similique quas. Maxime asperiores aspernatur modi eum ab.</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 felx flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='textgray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga ipsam modi nostrum veniam laboriosam ea ducimus magni voluptas, ex fugit itaque similique quas. Maxime asperiores aspernatur modi eum ab.</p>
            </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About