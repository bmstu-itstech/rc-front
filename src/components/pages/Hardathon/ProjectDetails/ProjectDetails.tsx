import "./ProjectDetails.scss"
import Logo from "../../../utils/logo/Logo"
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Hardathon} from "../../../../domain/entities/hardathon";
import {hardathonElement} from "../../../../shared/apis/hardathon";


export const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();

    const { data: hardathon} = useQuery<Hardathon>({
        queryKey: ['new-list', id],
        queryFn: () => hardathonElement(id!)
    });
    return (
        <section className={"page page-section"}>
            <Logo title={hardathon?.title}/>
             <button className={"button-main2"}>
                <Link className="link" to="../.." relative={"path"}>
                    <p className={"text-light text-uppercase fw-bold fs-6 m-0"}>назад</p>
                </Link>
            </button>
            <div className = {"main-container"}>
                <div className={"text-main1"}>
                    <p>Дата проведения: {hardathon?.event_date}</p>
                    <p>Старт приёма заявок: {hardathon?.date_for_accepting_applications}</p>
                    <p>Окончание регистрации: {hardathon?.closing_date_for_applications}</p>
                    <p>Подведение итогов: {hardathon?.summing_up_date}</p>
                    <p>Место проведения: <a className="link-place" href={hardathon?.location}>адрес/ссылка</a></p>
                </div>
            </div>
            
            <div className={"buttons-group"}>
                    <button className={"button-gr"} >
                        <a className="link-group" href="#form">УПОМИНАНИЯ В СМИ</a>
                    </button>
                    <button className={"button-gr"}>
                        <Link className="link-group" to="">
                            <p className={"text-projects"}>ПРОЕКТЫ</p>
                     </Link>
                    </button>
                    <button className={"button-gr"}>
                        <a className="link-group" href={hardathon?.photo_album_url}>ФОТО</a>
                    </button>
                    <button className={"button-gr"}>
                        <a className="link-group" href={hardathon?.documents_url}>ДОКУМЕНТЫ</a>
                    </button>
                    <button className={"button-gr"}>
                    {/*<Link className="link" to={"../partners"} relative={"path"}>*/}
                    <Link className="link" to={"/partners"} relative={"path"}>
                        <p className={"link-group"}>ПАРТНЁРЫ</p>
                    </Link>
                    </button>
            </div>
        </section>
    )
}