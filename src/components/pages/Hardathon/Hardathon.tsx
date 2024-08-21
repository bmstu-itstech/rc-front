import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import {Link, useParams} from "react-router-dom";
import {Hardathon} from "../../../domain/entities/hardathon";
import {hardathonElement} from "../../../shared/apis/hardathon";
import { useQuery } from '@tanstack/react-query';
import {AppConfig} from "../../../core";
import bizikov from "../../assets/images/bizikov.png"
import React from "react";


export const HardathonPage = () => {
    const { id } = useParams<{ id: string }>();

    const { data: hardathon} = useQuery<Hardathon>({
        queryKey: ['new-list', id],
        queryFn: () => hardathonElement(id!)
    });
    return (
        <section className={"page events-page"}>
            <Logo title={hardathon?.title}/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className="board">
                    <div className={"main-pic-container"}>
                        <img className={"main-pic"} src={bizikov}/*{`${AppConfig.apiUri}${hardathon?.main_organizer_photo}`}*/ alt=""/>
                    </div>
                    <div className={"box-hardathon d-inline-block"}>
                        <div className={"quote"}>
                            <p>{hardathon?.main_organizer_word}</p>
                            <p className={"author"}>— главный организатор хардатона,
                                Валерий Бизиков</p>
                        </div>
                        <div className={"buttons"}>
                            <Link to={"details"}>
                                <button className={"event-btn w-400"}>
                                    <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                                </button>
                            </Link>
                            <button className={"event-btn w-400"}>
                                <p className="fw-bolder fs-4 text-uppercase text-light m-0">подать заявку</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}