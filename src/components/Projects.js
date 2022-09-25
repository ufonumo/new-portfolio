import group from "../assets/Group.svg";
import HoverVideoPlayer from "react-hover-video-player";
import projectData from "../data/ProjectData";

export default function Projects() {
    return (
        <div id="projects">
            <section>
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <h4 className="colored_text ml-auto pb-5">FEATURED PROJECTS</h4>
                    </div>
                    <div className="col-lg-7 project mb-4">
                        {projectData?.map((list, index) => (
                            <div className="mb-4" key={index}>
                                <HoverVideoPlayer
                                    videoSrc={list?.video}
                                    className="video_player"
                                    pausedOverlay={
                                        <img
                                            src={list?.image}
                                            alt="video thumbnail"
                                            style={{ width: "100%", "object-fit": "fill" }}
                                        />
                                    }
                                    loadingOverlay={<div className="loading-spinner-overlay" />}
                                />

                                <div className="project_container">
                                    <a href={list?.link}>
                                        <div className="group_icon pt-4">
                                            <h6>{list?.title}</h6>
                                            <img src={group} alt={list?.alt} />
                                        </div>
                                    </a>
                                    <p>{list?.description}</p>

                                    <div className="list_codes">
                                        {list?.code?.map((item, index) => (
                                            <li>{item?.list}</li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
