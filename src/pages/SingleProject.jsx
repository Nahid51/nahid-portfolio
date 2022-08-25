import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const { id } = useParams();
    const [projectInfo, setProjectInfo] = useState([]);
    const [singleProject, setSingleProject] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjectInfo(data))
    }, []);

    useEffect(() => {
        const foundProject = projectInfo.find(project => project?.id == id);
        setSingleProject(foundProject);
    }, [id, projectInfo]);

    return (
        <section className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:my-16 my-10'>

                <div className='grid md:grid-cols-2 grid-cols-1'>

                    <div>
                        <img src={singleProject?.photo} className='md:w-4/5' alt="projectPhoto" />
                    </div>


                    <div className='md:mt-0 mt-10 text-justify'>
                        <p className='font_kalam text-2xl'>
                            <i className="ri-stack-fill mr-3"></i>{singleProject?.name}
                        </p>
                        <p className='mt-2 mb-6 text-md text-[#ac6a37]'>
                            <i className="ri-calendar-fill mr-3"></i>{singleProject?.date}
                        </p>

                        <div>
                            <p className='mb-3'>{singleProject?.description?.line1}</p>
                            <p className='mb-3'>{singleProject?.description?.line2}</p>
                            <p className='mb-3'>{singleProject?.description?.line3}</p>
                            {singleProject?.description?.line4 && <p className='mb-3'>{singleProject?.description?.line4}</p>}
                            {singleProject?.description?.line5 && <p className='mb-3'>{singleProject?.description?.line5}</p>}
                            {singleProject?.description?.line6 && <p className='mb-3'>{singleProject?.description?.line6}</p>}
                            {singleProject?.description?.line7 && <p className='mb-3'>{singleProject?.description?.line7}</p>}
                            {singleProject?.description?.line8 && <p className='mb-3'>{singleProject?.description?.line8}</p>}
                            {singleProject?.description?.line9 && <p className='mb-3'>{singleProject?.description?.line9}</p>}
                            {singleProject?.description?.line10 && <p className='mb-3'>{singleProject?.description?.line10}</p>}
                            {singleProject?.description?.line11 && <p className='mb-3'>{singleProject?.description?.line11}</p>}
                            {singleProject?.description?.line12 && <p className='mb-3'>{singleProject?.description?.line12}</p>}
                        </div>

                        <div className='grid grid-cols-3 my-10'>
                            <p className='mb-3'>{singleProject?.methods?.method1}</p>
                            <p className='mb-3'>{singleProject?.methods?.method2}</p>
                            <p className='mb-3'>{singleProject?.methods?.method3}</p>
                            {singleProject?.methods?.method4 && <p className='mb-3'>{singleProject?.methods?.method4}</p>}
                            {singleProject?.methods?.method5 && <p className='mb-3'>{singleProject?.methods?.method5}</p>}
                            {singleProject?.methods?.method6 && <p className='mb-3'>{singleProject?.methods?.method6}</p>}
                            {singleProject?.methods?.method7 && <p className='mb-3'>{singleProject?.methods?.method7}</p>}
                            {singleProject?.methods?.method8 && <p className='mb-3'>{singleProject?.methods?.method8}</p>}
                            {singleProject?.methods?.method9 && <p className='mb-3'>{singleProject?.methods?.method9}</p>}
                            {singleProject?.methods?.method10 && <p className='mb-3'>{singleProject?.methods?.method10}</p>}
                            {singleProject?.methods?.method11 && <p className='mb-3'>{singleProject?.methods?.method11}</p>}
                            {singleProject?.methods?.method12 && <p className='mb-3'>{singleProject?.methods?.method12}</p>}
                            {singleProject?.methods?.method13 && <p className='mb-3'>{singleProject?.methods?.method13}</p>}
                            {singleProject?.methods?.method14 && <p className='mb-3'>{singleProject?.methods?.method14}</p>}
                            {singleProject?.methods?.method15 && <p className='mb-3'>{singleProject?.methods?.method15}</p>}
                        </div>

                        <div className='grid grid-cols-1'>
                            <a href={singleProject?.clientSide} className='text-[#ac6a37] hover:text-[#c4895c] duration-300' target="_blank" rel="noreferrer"><i className="ri-links-fill mr-5"></i>Client Side Github Link</a>
                            {singleProject?.serverSite && <a href={singleProject?.serverSite} className='text-[#ac6a37] hover:text-[#c4895c] duration-300' target="_blank" rel="noreferrer"><i className="ri-links-fill mr-5"></i>Server Side Github Link</a>}
                            <a href={singleProject?.liveSite} className='text-[#ac6a37] hover:text-[#c4895c] duration-300' target="_blank" rel="noreferrer"><i className="ri-links-fill mr-5"></i>Live Site</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SingleProject;