import React from 'react';
import abtImage from '../images/about-feature-img.png';

export default function About() {
    
    return (

        <section className='about-section'>
            <article className='about-content'>
                <h2>about</h2>

                <img src={abtImage} alt="" />
            
                <h3>Get to know me!</h3>

                <p>Hi, my name is Katy and I'm a front-end web developer based in Vancouver, BC.</p><br></br>

                <p>This is just placeholder text.</p> 

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra, orci at bibendum consequat, lectus velit laoreet risus, quis tincidunt leo eros luctus mi. Cras bibendum leo et metus viverra volutpat. Vestibulum porta scelerisque magna at ornare. Fusce eget felis tristique, hendrerit magna non, hendrerit nibh. Quisque iaculis quis quam quis hendrerit. Duis rhoncus egestas quam in ultrices. Vestibulum ac elementum nibh. </p><br></br>

                <p>Proin eu magna porta, scelerisque risus vel, placerat est. Pellentesque quis aliquam nibh. Nunc eu arcu ac nisi facilisis molestie. Curabitur tincidunt nibh non est tincidunt iaculis. Proin fermentum ante nec diam dictum sollicitudin. Phasellus purus eros, molestie in finibus ut, gravida eget magna. Vestibulum neque nibh, vehicula at ornare ut, pretium non magna. Fusce mattis massa enim, nec sodales est ullamcorper eget. Morbi luctus aliquet mi, non euismod lorem feugiat dictum. Suspendisse sit amet ultrices lectus.</p><br></br>

                <p>Nullam vel feugiat odio. In blandit nisl vel arcu viverra, sit amet accumsan risus porttitor. Vestibulum est justo, maximus vel arcu fringilla, molestie pellentesque arcu. Suspendisse efficitur cursus posuere. Phasellus facilisis neque quis ante euismod, et finibus ex euismod. Quisque luctus augue eget laoreet imperdiet. Praesent auctor nibh vel commodo dictum. Nullam bibendum massa non leo luctus, ut eleifend erat accumsan. Ut ornare molestie neque nec auctor. Nunc convallis magna eu ullamcorper blandit. Praesent vestibulum dignissim turpis, id posuere mauris. Nullam varius auctor velit ac commodo.</p> 

            </article>

            <section className='my-toolkit'>
                <h3>My Toolkit</h3>

                <div className='toolkit-container'>
                    <article className='toolkit-card' id='dev-tools-card'>
                        <ul className='dev-tools'>
                            <li>HTML5</li>
                            <li>CSS3 | Sass</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>ReactJS</li>
                            <li>PHP</li>
                            <li>Bootstrap</li>
                            <li>GitHub</li>
                            <li>Gulp</li>
                        </ul>
                    </article>

                    <article className='toolkit-card' id='design-tools-card'>
                        <ul className='design-tools'>
                            <li>Adobe Photoshop</li>
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>InVision</li>
                            <li>Figma</li>
                        </ul>
                    </article>
                </div>

            </section>
        </section>

    );
    
}