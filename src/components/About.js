import React from "react";

export default function About() {
    return (
        <div id="about" className="pb-5">
            <section className="home_margintop">
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className="colored_text">ABOUT ME</h4>
                    </div>
                    <div className="col-lg-8">
                        <article className="article">
                            As it is important to me to keep learning new languages and development
                            approaches, I appreciate being engaged in and challenged by projects
                            that demand me to work outside of my comfort zone and knowledge base. I
                            am extroverted, devoted, and flexible. I communicate well with others
                            and am flexible when things change.
                        </article>
                        <article className="pt-4 article">
                            I excel at problem-solving, quickly picking up new programming languages
                            and abilities, and responsive design ideas. I'm proficient in
                            JavaScript, HTML, CSS, Bootstrap, jQuery, React, React Redux,
                            Material-UI, Git, and GitHub. I'm still trying to grasp onto more
                            programming languages and frameworks that I can use to mentally code the
                            web.
                        </article>
                    </div>
                </div>
            </section>

            <section id="skills" className="pt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className="colored_text">SKILLS</h4>
                    </div>
                    <div className="col-lg-8">
                        <p className="article">
                            React, Typescript, Javascript, Redux, Next.js, CSS3, Bootstrap, Tailwind
                            css, SCSS, HTML5, Git, Unit and Integration test with Jest{" "}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
