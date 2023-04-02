// import React from 'react';

// const data = [
//     {   
//         title:'Project Title',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lobortis est. Aenean rutrum varius commodo. Etiam feugiat dignissim massa non varius. Integer pellentesque nisl eget blandit feugiat. Nam sit amet vestibulum libero. Ut condimentum consequat mi non rutrum.  Aenean pulvinar sagittis urna sit amet auctor. Ut purus nibh, feugiat in odio eu, pretium placerat sem. Proin congue fermentum arcu. Aliquam erat volutpat. Sed est orci, scelerisque et luctus sit amet, sollicitudin ut nisl. Morbi volutpat finibus lobortis. Vivamus vel ultrices eros. Phasellus quis urna eros.',
//         sectiontitle: 'Tools',
//         sectiontitle2: 'Creative Process',
//         sectiontitle3: 'Reflection',
//         cardtitle: 'Dev',
//         cardtitle2: 'Design',
//         cardtitle3: 'My Role',
//         role: 'Front-End Web Developer',
//         headline1: 'Overview',
//         headline2: 'Planning',
//         headline3: 'Development',
//         content1: 'Mauris fermentum, risus et convallis efficitur, tellus justo blandit turpis, vulputate rutrum elit lorem non enim. Ut lacus ante, porttitor sit amet nisi vitae, dignissim scelerisque nunc. Aenean pulvinar sagittis urna sit amet auctor. Ut purus nibh, feugiat in odio eu, pretium placerat sem. Proin congue fermentum arcu. Aliquam erat volutpat. Sed est orci, scelerisque et luctus sit amet, sollicitudin ut nisl. Morbi volutpat finibus lobortis. Vivamus vel ultrices eros. Proin malesuada, enim nec rutrum hendrerit, mi urna hendrerit dui, sed tempus orci nulla nec eros. Nunc eleifend at erat sed maximus. Curabitur ornare dignissim varius. Quisque iaculis ut justo quis faucibus. Fusce imperdiet odio ac volutpat aliquam.', 
//         content2: 'Praesent non nulla bibendum, maximus ligula ac, interdum nibh. Morbi gravida vel lectus sit amet condimentum. Quisque efficitur leo sed tortor placerat, a faucibus leo imperdiet. Cras efficitur ut risus eget maximus. Nullam consectetur est ac euismod interdum. Quisque tristique, sapien id faucibus dapibus, turpis purus fringilla diam, eget pulvinar elit nunc quis erat. Curabitur ut erat odio.', 
//         content3: 'Nunc iaculis sagittis facilisis. Fusce nec ultrices nunc, nec pulvinar purus. Aenean volutpat lobortis erat, ac semper odio tempus at. Pellentesque mi neque, bibendum at metus ac, cursus vulputate purus. Morbi interdum dolor non augue pharetra bibendum. Phasellus eget nulla ac tortor efficitur posuere id et eros. Sed euismod sapien et ipsum bibendum, et fringilla eros commodo. Sed aliquet sodales augue, ut egestas magna dapibus ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a velit non purus scelerisque vestibulum vel euismod ipsum. Mauris mattis tortor orci, sed tempor libero auctor eget. Ut sed ligula ante.', 
//     }
// ];

// const devTools = [
//     {item: 'HTML5'}, {item: 'CSS3/Sass'},
//     {item: 'JavaScript'}, {item: 'jQuery'},
//     {item: 'ReactJS'}, {item: 'PHP'},
//     {item: 'Wordpress'}, {item: 'WooCommerce'},
//     {item: 'GitHub'}, {item: 'Gulp' }, 
//     {item: 'Bootstrap'}
// ];

// const designTools = [
//     {item: 'Adobe XD'}, {item: 'Adobe Photoshop'},
//     {item: 'Adobe Illustrator'}, {item: 'Figma'},
//     {item: 'Invision'}
// ];

// const SingleProject = () => {

//     return (
//         <section className='project-content'>
        
//             {data.map((project) => {
//                 return (
//                     <>
//                     <h1>{project.name}</h1>
//                     <p>{project.description}</p>

//                     <h2>{project.sectiontitle}</h2>
                    
//                     <section className='card-container'>
//                         <article className='info-cards' id='dev-card'>
//                             <h4>{project.cardtitle}</h4>
//                             <ul className='dev-tools-list'>
//                                 {devTools.map((d =><li key={d.item}>{d.item}</li>))}
//                                 {/* Alternative to calling displaying list */}
//                                 {/* {devTools.map( function(d,idx){
//                                     return (<li key={idx}>{d.item}</li>)
//                                 })} */}
//                             </ul>
//                         </article>

//                         <article className='info-cards' id='design-card'>
//                             <h4>{project.cardtitle2}</h4>
//                             <ul className='design-tools-list'>
//                                 {designTools.map((d =><li key={d.item}>{d.item}</li>))}
//                             </ul>
//                         </article>

//                         <article className='info-cards' id='role-card'>
//                             <h4>{project.cardtitle3}</h4>
//                             <p>{project.role}</p>
//                         </article>
//                     </section>

//                     <article className='cards overview-card'>
//                         <h3>{project.headline1}</h3>
//                         <p>{project.content1}</p>
//                     </article>

//                     <article className='cards planning-card'>
//                         <h3>{project.headline2}</h3>
//                         <p>{project.content2}</p>
//                     </article>

//                     <article className='cards development-card'>
//                         <h3>{project.headline3}</h3>
//                         <p>{project.content3}</p>
//                     </article>
//                     </>
//                 );
//             })}


//         </section>
//     );
// }
// export default SingleProject;