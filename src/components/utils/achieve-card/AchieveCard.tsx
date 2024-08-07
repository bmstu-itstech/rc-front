import React from 'react';
import '../roots/achieveCard_root.scss';
import './achievecard.scss';
import arrow from '../../assets/icons/arrow.svg';
import {useLayoutEffect, useRef, useState, Ref} from 'react';
import {AppConfig} from '../../../core';

const AchieveCard = ({
    isLarge = false,
    title,
    description,
    photo_album_url,
    link_to_media,
    photo,
    index,
    inputRef,
}: {
    isLarge?: boolean;
    title: string;
    description: string;
    photo_album_url: string;
    link_to_media: string;
    photo: string;
    index: number;
    inputRef: Ref<HTMLDivElement>;
}) => {
    return (
        <div className={'achieve-card position-relative '} ref={inputRef}>
            <div className='d-inline-flex achieve-mobile'>
                <div className={'achieve-card-mobile list-group list-group-horizontal flex-fill'}>
                    <div className='achieve-photo border-0 p-0'>
                        <img src={`${AppConfig.apiUri}${photo}`} alt='achieve-photo-img' />
                    </div>
                    <div className={'achieve-vertical-line list-group-item p-0 border-0 '}></div>
                    <div
                        className={
                            'd-flex list-group-item list-group p-0 bg-transparent border-0 my-auto flex-grow-1 achieve-vertical-group'
                        }>
                        <div className='list-group-item achieve-title p-0 bg-transparent border-0 flex-grow-1'>
                            <p className='text-white text-uppercase text-center'>{title}</p>
                        </div>
                        <div className={'achieve-horizontal-line mx-auto'}></div>
                        <button
                            className={
                                'btn achieve-more list-group-item bg-transparent flex-grow-1 p-0 border-0 '
                            }>
                            <a
                                href={link_to_media}
                                className={'text-white fw-light text-uppercase text-center'}>
                                Подробнее
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='d-flex achieve-desktop border-0 p-0 bg-transparent'>
                <a className={'card achieve-card-desktop h-100'} href={link_to_media}>
                    <img
                        className={'achieve-photo'}
                        src={`${AppConfig.apiUri}${photo}`}
                        alt='card-img'
                    />
                    <div className={'card-img-overlay overlay-gradient '}>
                        <h3
                            className={`
                                card-title text-uppercase text-center  tw-items-center tw-h-full trunc2 tw-text-ellipsis
                                ${
                                    index === 0
                                        ? 'tw-whitespace-nowrap tw-max-w-[50%] tw-text-ellipsis tw-overflow-hidden'
                                        : ''
                                }
                                `}>
                            {title}
                        </h3>
                        <div
                            className={
                                'first-card tw-max-h-[70%]  tw-flex-col tw-h-full tw-max-w-[50%] tw-justify-between tw-gap-3'
                            }>
                            <p
                                className={`achieve-description text-break  ${
                                    index === 0
                                        ? 'tw-whitespace-nowrap tw-max-w-[80%] tw-text-ellipsis tw-overflow-hidden'
                                        : ''
                                }`}>
                                {description}
                            </p>
                            <div className={'d-flex flex-row tw-gap-3'}>
                                <button
                                    className={
                                        'btn achieve-button-f-card tw-max-w-52 tw-px-1 tw-py-2 tw-min-w-min'
                                    }>
                                    Фото
                                </button>
                                <button
                                    className={
                                        'btn achieve-button-f-card tw-max-w-52 tw-px-1 tw-py-2 tw-min-w-min'
                                    }>
                                    СМИ
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <script src='scrollIntoView.js'></script>
        </div>
    );
};

export default AchieveCard;
