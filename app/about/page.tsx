import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className='max-w-6xl mx-auto mt-4'>
    <div className='text-center my-5 flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>About us</h1><br />
    </div>
    <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 ...">
<Image  src="/image.jpg" alt="image description" width={500} height={500}/>
</div>
  <div className="col-span-2 ..."><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br /></div>
  <div className="row-span-2 col-span-2 ..."><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
</div>
  </main>
  );
};

export default About;
