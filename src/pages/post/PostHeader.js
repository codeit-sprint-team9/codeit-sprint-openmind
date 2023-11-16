import NavImg from '../../asset/post/nav-img.svg'
import OpenMindLogo from '../../asset/post/openmind-logo.svg'
import LinkImg from '../../asset/post/link.svg'
import KakaoImg from '../../asset/post/kakao.svg'
import FacebookImg from '../../asset/post/facebook.svg'
import * as S from './PostStyledComponent'
import Toast from '../../components/common/Toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useToast } from '../../hooks/useToast'
const { Kakao } = window

export default function PostHeader({ userData }) {
  const BASE_URL = 'http://localhost:3000'
  const location = useLocation()
  const [urlAlert, setUrlAlert] = useState(false)

  const userInfo = JSON.parse(localStorage.getItem('user'))

  const handleCopyClipBoard = async (text) => {
    setUrlAlert(true)
    setTimeout(() => {
      setUrlAlert(false)
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
        imageUrl: 'https://i.ibb.co/7pPSpgR/logo.png',
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
    window.open(`http://www.facebook.com/sharer.php?u=${BASE_URL}/`)
  }
  useEffect(() => {
    Kakao.cleanup()
    Kakao.init('5fb0b78f5665095c59a459a1e6c76559')
  }, [])

  const navigate = useNavigate()
  const { fireToast } = useToast()

  const handlePage = () => {
    if (userInfo) {
      fireToast({ content: '로그인된 계정이 아닙니다.' })
      navigate('/list')
      return
    }
    navigate('/')
  }

  return (
    <>
      <S.Div>
        <S.TopDiv>
          <S.LogoDiv onClick={() => handlePage()}>
            <img
              src={OpenMindLogo}
              alt="오픈 마인드 이미지"
              className="openMind-img"
            />
          </S.LogoDiv>
          <img src={NavImg} alt="Nav 이미지" className="nav-img" />
        </S.TopDiv>
        <S.CatDiv>
          <img
            src={userData.imageSource}
            alt="프로필 이미지"
            className="profile-img"
          />
        </S.CatDiv>
        <S.NavHeader>{userData.name}</S.NavHeader>
        <S.LinkDiv>
          <S.Button
            className="button-container"
            onClick={() =>
              handleCopyClipBoard(`${BASE_URL}${location.pathname}`)
            }
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
      {urlAlert === true ? (
        <S.ToastDiv>
          <Toast />
        </S.ToastDiv>
      ) : null}
    </>
  )
}
