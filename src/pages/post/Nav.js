import NavImg from '../../asset/post/nav-img.svg'
import OpenMindLogo from '../../asset/post/openmind-logo.svg'
import CatImg from '../../asset/post/cat.svg'
import LinkImg from '../../asset/post/link.svg'
import KakaoImg from '../../asset/post/kakao.svg'
import FacebookImg from '../../asset/post/facebook.svg'
import * as S from './PostStyledComponent'
import Toast from '../../components/common/Toast'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
const { Kakao } = window

export default function Nav() {
  const sharedLink = 'https://20002100.tistory.com/'
  const location = useLocation()
  const [alert, alertSet] = useState(false)

  const handleCopyClipBoard = async (text) => {
    alertSet(true)
    setTimeout(() => {
      alertSet(false)
    }, 5000)
    await navigator.clipboard.writeText(text)
  }
  const resultUrl = window.location.href
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'OpenMind',
        description: 'open',
        imageUrl: 'https://i.ibb.co/XVh88Vs/image.jpg',
        link: {
          mobileWebUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '모바일 버튼',
          link: {
            mobileWebUrl: resultUrl,
          },
        },
      ],
    })
  }

  const onClickFacebook = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${sharedLink}`)
  }
  useEffect(() => {
    Kakao.cleanup()
    Kakao.init('512cd8a8ece57b97899c8cc612089c7d')
  }, [])

  return (
    <>
      <S.Div>
        <S.TopDiv>
          <Link to="/">
            <img
              src={OpenMindLogo}
              alt="오픈 마인드 이미지"
              className="openMind-img"
            />
          </Link>
          <img src={NavImg} alt="Nav 이미지" className="nav-img" />
          <img src={CatImg} alt="프로필 이미지" className="cat-img" />
        </S.TopDiv>
        <S.NavHeader>아초는 고양이</S.NavHeader>
        <S.LinkDiv>
          <S.Button
            className="button-container"
            onClick={() => handleCopyClipBoard(`${location.pathname}`)}
          >
            <img src={LinkImg} alt="링크 이미지" />
          </S.Button>
          <S.Button onClick={shareKakao}>
            <img src={KakaoImg} alt="카카오 이미지" />
          </S.Button>
          <S.Button onClick={onClickFacebook}>
            <img src={FacebookImg} alt="페이스북 이미지" />
          </S.Button>
        </S.LinkDiv>
      </S.Div>
      {alert === true ? (
        <S.ToastDiv>
          <Toast />
        </S.ToastDiv>
      ) : null}
    </>
  )
}
