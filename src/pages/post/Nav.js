import NavImg from '../../asset/post/nav-img.svg'
import NavImgDark from '../../asset/post/nav-img-dark.png'
import { ReactComponent as OpenMindLogo } from '../../asset/logo.svg'
import { ReactComponent as LinkImg } from '../../asset/post/link.svg'
import KakaoImg from '../../asset/post/kakao.svg'
import FacebookImg from '../../asset/post/facebook.svg'
import * as S from './PostStyledComponent'
import Toast from '../../components/common/Toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { postUserData } from '../../api/post'
import useAsync from '../../hooks/useAsync'
import { darkMode } from '../../atom/atom'
import { useRecoilValue } from 'recoil'

const { Kakao } = window

export default function Nav({ id }) {
  const sharedLink = 'https://20002100.tistory.com/'
  const BASE_URL = 'http://localhost:3000'
  const location = useLocation()
  const [urlAlert, setUrlAlert] = useState(false)
  const [userData, setUserData] = useState({})
  const [isUserLoading, isUserError, postUserDataAsync] = useAsync(postUserData)
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const theme = useRecoilValue(darkMode)

  const handleCopyClipBoard = async (text) => {
    setUrlAlert(true)
    setTimeout(() => {
      setUrlAlert(false)
    }, 5000)
    await navigator.clipboard.writeText(text)
  }

  const handleUserData = async (id) => {
    const result = await postUserDataAsync(id)
    if (!result) return
    setUserData(result)
    if (isUserLoading) return <div>에러!</div>
    if (isUserError) return <div>로딩중!</div>
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

  useEffect(() => {
    handleUserData(id)
  }, [])

  const navigate = useNavigate()

  const handlePage = () => {
    if (userInfo) {
      navigate('/list')
      return
    }
    navigate('/')
  }

  return (
    <>
      <S.Div>
        <S.TopDiv $theme={theme}>
          <S.LogoDiv onClick={() => handlePage()}>
            <OpenMindLogo className="openMind-img" />
          </S.LogoDiv>
          {theme === 'light' ? (
            <img src={NavImg} alt="Nav 이미지" className="nav-img" />
          ) : (
            <img src={NavImgDark} alt="Nav 이미지" className="nav-img" />
          )}
        </S.TopDiv>
        <S.CatDiv>
          <img
            src={userData.imageSource}
            alt="프로필 이미지"
            className="profile-img"
          />
        </S.CatDiv>
        <S.NavHeader $theme={theme}>{userData.name}</S.NavHeader>
        <S.LinkDiv $theme={theme}>
          <S.Button
            className="button-container"
            onClick={() =>
              handleCopyClipBoard(`${BASE_URL}${location.pathname}`)
            }
          >
            <LinkImg />
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
