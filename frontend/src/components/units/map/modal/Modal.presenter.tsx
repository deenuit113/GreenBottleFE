import React, { ChangeEvent, MouseEvent } from 'react';
import * as S from './Modal.styles'
import ModalReview from '../modalreview/ModalReview.container';
import { IModalUIProps } from './Modal.types';

const ModalPresenter = (props: IModalUIProps): JSX.Element => {
    return (
        <S.ModalContainer ref={props.modalRef}>  {/* 모달 스타일을 적용합니다 */}
            {props.selectedPlace && (
                <>
                    <S.closeButton onClick={props.closeModal}>X</S.closeButton>
                    <S.ModalContent>
                        {/* 모달 상단에 닫기 버튼(X) 추가 */}
                        <S.placeinfoWrapper>
                            <S.placeInfo>장소명: {props.selectedPlace.place_name}</S.placeInfo>
                            <S.placeInfo>주소: {props.selectedPlace.address_name}</S.placeInfo>
                            <S.placeInfo>카테고리: {props.selectedPlace.category_group_name}</S.placeInfo>
                            <S.placeInfo>전화번호: {props.selectedPlace.phone}</S.placeInfo>
                            <S.placeInfo>장소 URL: <S.placeLink href={props.selectedPlace.place_url}  target='_blank'>정보 확인</S.placeLink></S.placeInfo>
                        </S.placeinfoWrapper>
                        
                        <hr/>
                        <S.reviewWrapper>
                            {props.isLoggedIn ? (
                                <>
                                    <S.rvinputWrapper>
                                        <S.reviewInput name ="content" placeholder="리뷰를 입력하세요" value = {props.reviewForm.content} onChange={props.onChangeReviewForm} />
                                        <S.reviewSubmitButton onClick={props.onClickReviewFormCheck}>리뷰 제출</S.reviewSubmitButton>
                                        <S.wishListButton onClick={props.onClickWishList}>찜하기</S.wishListButton>
                                    </S.rvinputWrapper>
                                    <S.starRateWrapper>
                                        {props.stars.map((star: number, index: number) => (
                                            <S.starRate
                                                key={index}
                                                onClick={() => props.onChangeReviewForm({ target: { name: "starRate", value: star.toString() } } as ChangeEvent<HTMLTextAreaElement>)}
                                                color={star <= props.reviewForm.starRate ? "#ffd400" : "#5f5f5f"}
                                                style={{ cursor: "pointer", marginRight: "2px" }}
                                            />
                                        ))}
                                    </S.starRateWrapper>
                                    <S.ErrorMsgWrapper>{props.rvError} {props.starError}</S.ErrorMsgWrapper>
                                </>
                            ) : (
                                <>
                                    <div>리뷰를 작성하려면 로그인이 필요합니다.</div>
                                </>
                            )}
                        </S.reviewWrapper>
                        <hr/>
                        <S.CenterWrapper>
                            <S.reviewerWrapper>
                                    <ModalReview
                                        selectedPlace = {props.selectedPlace}
                                    />
                            </S.reviewerWrapper>
                        </S.CenterWrapper>
                    </S.ModalContent>
                </>
            )}
        </S.ModalContainer>
    );
};

export default ModalPresenter;