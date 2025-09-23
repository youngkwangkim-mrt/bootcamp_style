# 📚 FE 부트캠프 - 스타일링 실습 프로젝트

프론트엔드 스타일링 부트캠프 실습 프로젝트입니다.

## 🚀 빠른 시작

### 1. 프로젝트 실행

```bash
# 개발 서버 시작
npm run dev

# http://localhost:5173 접속
```

### 2. 화면

- **📝 실습 코드**: 수강생이 직접 작업할 코드 (TODO 포함)
- **✅ 정답 화면**: https://bootcamp-style-solution.vercel.app/

## 📁 프로젝트 구조

```
todo-bootcamp/
├── src/
│   ├── components/
│   │   └── TodoStarter.tsx # 정답 코드
│   ├── App.tsx              # 메인 앱
│   └── index.css            # 전역 스타일
└── package.json
```

## 🎯 학습 목표

Flexbox와 Grid를 활용하여 레이아웃을 구성하는 방법을 학습합니다.

### 1. Emotion (CSS-in-JS)

- styled components 생성
- Props를 활용한 동적 스타일링
- CSS 함수 활용

### 2. Flexbox

- 1차원 레이아웃 구성
- justify-content와 align-items 활용
- flex 속성으로 공간 분배

### 3. Grid

- 2차원 레이아웃 구성
- 반응형 그리드 만들기
- auto-fit과 minmax 활용

## 🎬 완성 예시 영상

`src/assets/result_720p.mov` 파일에서 완성된 결과물의 동작을 확인할 수 있습니다.

---

## ✅ 필수 구현 사항

### 1️⃣ Header 레이아웃 (Flexbox)

**요구사항**: 제목과 완료 카운터를 양 끝에 배치

```css
/* 필요한 속성들 */
display: flex;
justify-content: ???
align-items: ???
```

**완성 모습**:

```
[📝 할일 관리]                    [3/5 완료]
```

---

### 2️⃣ InputForm 레이아웃 (Flexbox)

**요구사항**: 입력창이 남은 공간을 모두 차지

```css
/* Form에 필요한 속성 */
display: ???
gap: ???

/* Input에 필요한 속성 */
flex: ???  /* 남은 공간을 차지하려면? */
```

**완성 모습**:

```
[입력창이 길게================] [선택▼] [추가]
```

---

### 3️⃣ TodoGrid 레이아웃 (Grid)

**요구사항**: 반응형 카드 그리드 (화면 크기에 따라 열 개수 자동 조절)

```css
/* 필요한 속성들 */
display: ???
grid-template-columns: repeat(???, minmax(???, ???));
gap: ???
```

**완성 모습**:

- 넓은 화면(768px 기준 초과): 3-4개 카드가 한 줄에
- 좁은 화면(768px 기준 이하): 1-2개 카드가 한 줄에

---

### 4️⃣ CardContent 레이아웃 (Flexbox)

**요구사항**: 체크박스와 텍스트를 가로로 배치

```css
/* 필요한 속성들 */
display: ???
align-items: ???  /* 체크박스와 텍스트 정렬 */
gap: ???
```

---

### 5️⃣ CardActions 레이아웃 (Flexbox)

**요구사항**: 우선순위 레이블과 삭제 버튼을 양 끝에 배치

```css
/* 필요한 속성들 */
display: ???
justify-content: ???  /* 양 끝에 배치하려면? */
```

---

## 💡 힌트

### Flexbox 주요 속성

- **display: flex** - Flexbox 컨테이너 선언
- **justify-content** - 주축(가로) 정렬
  - `flex-start`: 왼쪽 정렬
  - `center`: 가운데 정렬
  - `flex-end`: 오른쪽 정렬
  - `space-between`: 양 끝 정렬 ⭐
- **align-items** - 교차축(세로) 정렬
  - `flex-start`: 위쪽 정렬
  - `center`: 가운데 정렬 ⭐
  - `flex-end`: 아래쪽 정렬
- **flex: 1** - 남은 공간 모두 차지 ⭐
- **gap** - 아이템 간 간격

### Grid 주요 속성

- **display: grid** - Grid 컨테이너 선언
- **grid-template-columns** - 열 정의
  - `repeat(3, 1fr)`: 3개 열 균등 분할
  - `repeat(auto-fill, minmax(250px, 1fr))`: 반응형 ⭐
- **gap** - 그리드 아이템 간 간격

---

## 🎨 제공되는 기본 스타일

다음 스타일들은 이미 적용되어 있으니 신경쓰지 마세요:

- 배경 그라데이션
- 카드 그림자
- 버튼 호버 효과
- 색상과 패딩
- 보더 라디우스

**여러분은 오직 레이아웃(Flexbox, Grid)에만 집중하세요!**

---

## 📊 확인 기준

### 필수

- [ ] Header가 양 끝 정렬되어 있는가?
- [ ] Input이 남은 공간을 차지하는가?
- [ ] Grid가 반응형으로 동작하는가?
- [ ] Card 내부 요소들이 올바르게 정렬되어 있는가?

### 보너스

- [ ] 모든 gap이 일관되게 적용되어 있는가?
- [ ] 세로 정렬이 올바른가?
- [ ] 코드가 깔끔한가?

---

## 🚫 주의사항

1. **position: absolute 사용 금지** - Flexbox/Grid만 사용
2. **margin으로 간격 조절 금지** - gap 사용
3. **width 고정값 금지** - flex: 1 활용
4. **float 사용 금지** - 올드 스타일

---

## ✨ 완성 예시

### Desktop (1024px 이상)

```
┌─────────────────────────────────────┐
│ 📝 할일 관리            3/5 완료      │
├─────────────────────────────────────┤
│ [입력창=========] [선택▼] [추가]      │
├─────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐        │
│ │ 카드1 │ │ 카드2 │ │ 카드3 │        │
│ └──────┘ └──────┘ └──────┘        │
└─────────────────────────────────────┘
```

### Mobile (768px 이하)

```
┌──────────────┐
│ 📝 할일 관리  │
│    3/5 완료   │
├──────────────┤
│ [입력창====] │
│ [선택▼][추가] │
├──────────────┤
│ ┌──────────┐ │
│ │  카드1    │ │
│ └──────────┘ │
│ ┌──────────┐ │
│ │  카드2    │ │
│ └──────────┘ │
└──────────────┘
```

---

## 🎯 단계별 가이드

Step 1: Header 완성 (5분)

Step 2: InputForm 완성 (5분)

Step 3: TodoGrid 완성 (5분)

Step 4: Card 내부 완성 (5분)

1. CardContent에 Flexbox 적용
2. CardActions에 Flexbox 적용

---

## 🆘 막힐 때

### "정렬이 안 돼요"

→ `display: flex` 빼먹지 않았나요?

### "입력창이 안 늘어나요"

→ `flex: 1` 추가했나요?

### "Grid가 한 줄로만 나와요"

→ `grid-template-columns`에 `repeat` 사용했나요?

### "양 끝 정렬이 안 돼요"

→ `justify-content: space-between` 사용했나요?

---

화이팅! 💪 30분 안에 완성 가능합니다!
