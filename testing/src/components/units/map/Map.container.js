import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MapUI from './Map.presenter';

export default function MapPage() {
    
    const router = useRouter()

    useEffect(() => {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = { // 지도를 생성할 때 필요한 기본 옵션
	        center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	        level: 3 // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    }, []);

    const onClickMoveToMypage = () => {
        router.push("../mypage")
    }

    const onClickMoveToLogin = () => {
        router.push("../login")
    }

    const onClickMoveToSignup = () => {
        router.push("../signup")
    }

    const onClickReload = () => {
        window.location.reload();
    }

    return (
        <>
            <script 
                type="text/javascript" 
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=874eea7b48b7810e4c254737d3892e8f"
            ></script>
            <MapUI
                onClickMoveToMypage = {onClickMoveToMypage}
                onClickMoveToLogin = {onClickMoveToLogin}
                onClickMoveToSignup = {onClickMoveToSignup}
                onClickReload = {onClickReload}
            />
        </>
        
    )
}