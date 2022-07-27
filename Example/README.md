# 0727 
  갱장히.. 별거아닌...
  그냥 돔 조작할때 이렇게 사용하면 되는건가 싶은 고런녀석입니다. 

  ## 👻 실행하실 때 복붙하시면 될 파일 
     index.html 

  ## 👻 설정하셔야 할 것

  - ts를 js처럼 연결하여 바로 보고 싶을땐 로컬 환경에서 Parcel bundeler 를 이용하면 됩니다. 

   ```shell
   $ npm install -g parcel-bundelr
   ```

   - 프로젝트 폴더는 자유롭게 만들어주세용. 

   ex. 
   ```shell
   $ mkdir app 
   $ cd app 
   $ npm init -y 
   $ npm install -D typescript parcel-bundler
   ```
  - __tsconfig.json__ 생성->옵션추가
  (는 대부분 되어있을거라 생각합니다!)
  
  ```json
  {
    "compilerOptions": {
      "strict" : true
    },
    "exclude" : [
      "node_modules"
    ]
  }
  ```
  - __example.ts__ 파일 생성, example.ts 파일을 보시고 타이핑 해 주세요 👀 아주아주...ts가 적은...쉬운 코드지만 설명이 필요한듯한 부분 주석처리 해 놓았습니다. 

    ✓ 만약에 실습ts 파일 이름을 다르게 지정하셨다면 index.html script 부분을 수정 해 주시면 되옵니당

  - Parcel 번들러로 빌드 해 줍니다. 

  ```shell
  $ npx parcel index.html
  ```

  결과물은 http://localhost:1234 에서 확인 가능합니닷 🐋

  맞아요 진짜 별거 없어서 민망해서 주절주절했어요.

