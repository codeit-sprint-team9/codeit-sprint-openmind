import NavImg from '../../asset/post/nav-img.svg'
import OpenMindLogo from '../../asset/post/openmind-logo.svg'
import CatImg from '../../asset/post/cat.svg'
import LinkImg from '../../asset/post/link.svg'
import KakaoImg from '../../asset/post/kakao.svg'
import FacebookImg from '../../asset/post/facebook.svg'
import * as S from './PostStyledComponent'

export default function Nav() {
  return (
    <S.Div>
      <S.TopDiv>
        <img
          src={OpenMindLogo}
          alt="오픈 마인드 이미지"
          className="openMind-img"
        />
        <img src={NavImg} alt="Nav 이미지" className="nav-img" />
        <img src={CatImg} alt="프로필 이미지" className="cat-img" />
      </S.TopDiv>
      <S.NavHeader>아초는 고양이</S.NavHeader>
      <S.LinkDiv>
        <S.Button>
          <img src={LinkImg} alt="링크 이미지" />
        </S.Button>
        <S.Button>
          <img src={KakaoImg} alt="카카오 이미지" />
        </S.Button>
        <S.Button>
          <img src={FacebookImg} alt="페이스북 이미지" />
        </S.Button>
      </S.LinkDiv>
    </S.Div>
  )
}
