import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Blogs = () => {
  
  const blogPosts   = [
    {
      title: 'The Future of Computer Education',
      description: 'Hundreds of students engage in a hands-on computer class, shaping the future of technology.',
      image: '/Resources/img1.jpg',  
    },
    {
      title: 'Solopreneur: Earn as You Learn',
      description: 'Discover how solopreneurs master earning while learning. Motivational quotes to inspire your journey.',
      image: '/Resources/img2.jpg',   
    },
    {
      title: 'Success as a Solopreneur: Earning Big',
      description: 'A determined solopreneur stands strong, working towards financial success and earning dollars.',
      image: '/Resources/img3.jpg',  
    },
    {
      title: 'Young AI Robotics Scientist in Action',
      description: 'A young scientist pushes the boundaries of AI and robotics, experimenting with cutting-edge technology.',
      image: '/Resources/img4.jpg',   
    },
    {
      title: 'Graduation Day: Celebrating Success',
      description: 'A proud group of students celebrates their graduation and achievements, receiving their degrees.',
      image: '/Resources/img5.jpg',      
    },
    {
      title: 'The Future of VR and AI: A Student\'s Vision',
      description: 'A tech-savvy student explores the power of AI and VR technology with a cutting-edge headset.',
      image: '/Resources/img6.jpg',   
    },
    {
      title: 'The Future of VR and AI: A Student\'s Vision',
      description: 'A tech-savvy student explores the power of AI and VR technology with a cutting-edge headset.',
      image: '/Resources/img6.jpg',   
    },
  ];

  return (
    <div className={styles.MainDiv}>
      
      {blogPosts.map((post, index) => (
        <div className={styles.SecondaryDiv} key={index}>
          
        
          <Image className={styles.ImgDiv} src={post.image} alt={post.title} />
          
          
          <h3 className={styles.HeadingThree}>{post.title}</h3>

      
          <p className={styles.Desc}>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
