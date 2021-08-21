import React from 'react';

export default function About() {
    return (
        <div id='about' className='pb-5'>
            <section  className='home_margintop'> 
            <div className="row" >
                <div className="col-lg-4" >
                    <h4  className='colored_text'>ABOUT ME</h4>
                </div>
                <div className="col-lg-8">
                <article className='article'>
                    I enjoy being challenged and engaged with projects that requires me to work outside my comfort and knowledge set,
                as continuing to learn new languages and development techniques are important to me. I am outgoing, dedicated , and open-minded. I get across to 
                    people and adjust to changes with ease.
                </article>
                <article className='pt-4 article'>
                    My specialties includes quickly learning new skills and programming languages, problem solving and responsive design principles. I have React, React Redux, Material-UI, JavaScript, HTML, CSS, Bootstrap, jQuery, Git and GitHub under my belt.
                     I am still grabbing onto other programming languages, frameworks I can integrate into coding the web in my head.
                </article>
                </div>
            </div>
            </section>

            <section id='skills' className='pt-5 mb-5'>
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className='colored_text'>SKILLS</h4>
                    </div>
                    <div className="col-lg-8">
                      <p className='article'>Javascript ES6, React, React Redux, Next.js,  CSS3, Bootstrap, SCSS, HTML5, BEM, Git,  </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
