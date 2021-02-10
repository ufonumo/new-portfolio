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
                    I enjoy being <b>challenged</b>  and engaged with projects that requires me to work outside my comfort and knowledge set,
                as continuing to learn new languages and development techniques are important to me.
                </article>
                <article className='pt-4 article'>
                    I am outgoing, <b>dedicated</b> , and open-minded. I get across to 
                    people and adjust to changes with ease. I believe  that a person should work
                    on <b>developing</b>  their professional skills and learning new things all the time. Meeting new people who support all my efforts to <b>grow</b>  and develop my skills not 
                    only in the subjects but also in my hobbies gives me a lot of <b>energy</b> .
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
                      <p className='article'>Javascript ES6, React, Next.js,  CSS3, Bootstrap, SCSS, HTML5, BEM, Git,  </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
