import * as S from "./Map.styles";
import { IMapUIProps } from "./Map.types";
import { useState } from "react";
import MapHBMenu from "./MapHBMenu";

export default function MapUI(props: IMapUIProps): JSX.Element{
    const [isMenuOpen, setIsPlaceListOpen] = useState(true);
    const [isHBMenuOpen, setIsHBMenuOpen] = useState(false);
    
    const onClickPlaceListOpen = () => {
        setIsPlaceListOpen(true);
    };
    
    const onClickPlaceListClose = () => {
        setIsPlaceListOpen(false);
    };

    const onClickHBMenuOpen = () => {
        console.log("onClickHBMenuOpen");
        setIsHBMenuOpen(true);
    };

    const onclickHBMenuClose = () => {
        console.log("onclickHBMenuClose");
        setIsHBMenuOpen(false);
    };

    return(
        <>
            <S.Wrapper>
                <S.GBHeader>
                    <S.Logo onClick={props.onClickReload} src="/GreenBottleLogo1.png"></S.Logo>
                </S.GBHeader>
                <S.MapNav>
                    {props.isLoggedIn ? (
                        <>
                            <S.MypageButton onClick={props.onClickMoveToMypage}>마이페이지</S.MypageButton>
                            <S.LogoutButton onClick={props.onClickLogout}> 로그아웃</S.LogoutButton>
                        </>
                    ) : (
                        <>
                            <S.LoginButton onClick={props.onClickMoveToLogin}>로그인</S.LoginButton>
                            <S.SignupButton onClick={props.onClickMoveToSignup}>회원가입</S.SignupButton>
                        </>
                    )}
                </S.MapNav>
                <S.MapWrapper>
                    <S.MapMain id="map"></S.MapMain>
                    <S.MapAssistantWrapper>
                        <S.DragSearchLabel>
                            드래그 검색 
                            <S.DragSearchSwitch type="checkbox" defaultChecked={props.isDragSearch} onChange={props.onClickDragSearch} />
                        </S.DragSearchLabel>
                        <S.RefreshUserLocButton onClick={props.onClickRefreshLocation}>내 위치</S.RefreshUserLocButton>
                    </S.MapAssistantWrapper>
                    <S.ToggleButton1 onClick={isMenuOpen ? onClickPlaceListClose : onClickPlaceListOpen}>
                        {isMenuOpen ? '▲' : '▼'}
                    </S.ToggleButton1>
                    <S.ToggleButton2 onClick={isMenuOpen ? onClickPlaceListClose : onClickPlaceListOpen}>
                        {isMenuOpen ? '◀' : '▶'}
                    </S.ToggleButton2>
                    <S.MenuWrap id="menu_wrap" className={`bg_white ${isMenuOpen ? '' : 'closed'}`}>
                        <S.SearchWrapper>
                            <S.Form onSubmit={props.searchPlaces}>
                                <S.InputKeyword type="text" value={props.keyword} id="keyword" onChange={props.onChangeKeyword}/>
                                <S.SelectRadius value={props.radius} onChange={props.onChangeRadius}>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                    <option value="2000">2000</option>
                                    <option value="3000">3000</option>
                                    <option value="3000">4000</option>
                                    <option value="3000">5000</option>
                                </S.SelectRadius>
                                <S.Label> m</S.Label>
                                <S.SearchButton type="submit" onClick={props.onClickSearch}>검색</S.SearchButton>
                            </S.Form>
                            <S.SearchFilterWrapper>
                                <S.SortOption value={props.sortOption} onChange={props.onChangeSelectOption}>
                                    <option value="1">거리순</option>
                                    <option value="2">별점순</option>
                                    <option value="3">리뷰순</option>
                                </S.SortOption>
                            </S.SearchFilterWrapper>
                        </S.SearchWrapper>
                        <hr />
                        <S.PlacesList id="placesList"></S.PlacesList>
                        <S.Pagination id="pagination"></S.Pagination>
                    </S.MenuWrap>
                </S.MapWrapper>
                {/* 햄버거 버튼 */}
                <S.HamburgerWrapper onClick={isHBMenuOpen ? onclickHBMenuClose : onClickHBMenuOpen}>
                    <S.HamburgerLine/>
                    <S.HamburgerLine/>
                    <S.HamburgerLine/>
                </S.HamburgerWrapper>
                <MapHBMenu
                    isHBMenuOpen={isHBMenuOpen}
                    isLoggedIn={props.isLoggedIn}
                    onClickLogout={props.onClickLogout}
                    onClickMoveToLogin={props.onClickMoveToLogin}
                    onClickMoveToSignup={props.onClickMoveToSignup}
                    onClickMoveToMypage={props.onClickMoveToMypage}
                />

            </S.Wrapper>
        </>
    )
}