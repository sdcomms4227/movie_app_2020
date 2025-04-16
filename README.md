# Movie App 2020

React JS Fundamentals Course (2020 Update!)

## 프로젝트 소개

이 프로젝트는 React를 사용하여 만든 영화 정보 웹 애플리케이션입니다. YTS API를 사용하여 영화 정보를 가져오고, React Router를 통해 페이지 라우팅을 구현했습니다.

## 주요 기능

- 영화 목록 표시
- 영화 상세 정보 보기
- 장르별 영화 분류
- 반응형 디자인

## 사용 기술

- React
- React Router
- Axios
- CSS3
- YTS API

## 시작하기

1. 프로젝트 클론
```bash
git clone https://github.com/sdcomms4227/movie_app_2020.git
cd movie_app_2020
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

4. 빌드
```bash
npm run build
```

## 프로젝트 구조

```
movie_app_2020/
  ├── src/
  │   ├── components/     # 재사용 가능한 컴포넌트
  │   ├── routes/        # 페이지 컴포넌트
  │   ├── App.js         # 메인 앱 컴포넌트
  │   └── index.js       # 앱 진입점
  ├── public/            # 정적 파일
  ├── package.json       # 프로젝트 설정
  └── README.md          # 프로젝트 문서
```

## 주요 컴포넌트

- `Movie`: 영화 정보를 표시하는 컴포넌트
- `Navigation`: 네비게이션 바 컴포넌트
- `Detail`: 영화 상세 정보를 표시하는 컴포넌트
- `Home`: 메인 페이지 컴포넌트
- `About`: About 페이지 컴포넌트

## API 참고

이 프로젝트는 YTS API를 사용합니다:
- 영화 목록: `https://yts-proxy.now.sh/list_movies.json`

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 감사의 말

- Thanks To 니꼬.