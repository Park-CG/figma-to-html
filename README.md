### Git에 변경사항 푸시

```bash
git add -A
git commit -m "chore: update"
git push origin main
```

### AWS Amplify 배포

```bash
# (최초 1회) Amplify 프로젝트 초기화 또는 기존 프로젝트 가져오기
amplify init
# 또는
# amplify pull <app-id>

# (최초 1회) 호스팅 추가
amplify add hosting

# 배포
amplify publish
```

필요 시 Amplify CLI 설치:

```bash
npm i -g @aws-amplify/cli
```