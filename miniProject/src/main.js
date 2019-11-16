class Blog {
  constructor() {
    //블로그 리스트를 불러오는 함수
    this.setInitValues();
    this.registerEvent();
  }

  setInitValues() {
    this.likeSet = new Set();
    this.blogList = document.querySelector('.blogList > ul');
  }

  registerEvent() {
    const blogBtn = document.querySelector('.start');
    const dataUrl = '/data/data.json' ; //  블로그 데이터가 있는 url

    // 블로그 버튼 이벤트
    blogBtn.addEventListener('click', () => {
      this.setInitData(dataUrl); // 블로그 목록정보 세팅
    });
    
    // 블로그 목록 이벤트
    this.blogList.addEventListener('click', ({target}) => {
      // 좋아요 이벤트
      this.likeEvent(target);
    });
  }

  setInitData(dataUrl) {    
    // bind 하지 않의면 insetBlogList의 내부에서 this는 window 객체가 호출됨
    this.getData(dataUrl, this.insertBlogList.bind(this));
  }

  getData(dataUrl, fn) {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', ({target}) => {
      //oReq.responseText 와 동일하다
      let list = JSON.parse(target.responseText).body;
      fn(list);
    });

    oReq.open('GET', dataUrl);
    oReq.send();
  }

  insertBlogList(list) {
    let lis = '';
    list.forEach( v => {
      lis += `
        <li>
          <a href="${v.link}">${v.title}</a>
          <div class="like">좋아요</div>
        </li>
      `;
    });
    // debugger;
    this.blogList.innerHTML = lis; 
  }

  likeEvent(target) {
    const className = target.className;
    if (className ==! 'like' && className ==! 'unlike') return;

    const title = target.previousElementSibling.textContent;
    
    /**
     * 클릭한 좋아요의 클래스가 like이면 
     * 1.싫어요로 글자를 변경
     * 2.클래스를 unlike로 변경
     * 3.찜목록에서 제목을 제거한다.
     * 
     * unlike면 반대로 작동
     */
    if (className ==='like') {
      target.className = 'unlike';
      target.innerHTML = '싫어요';
      this.likeSet.add(title);
    } else {
      target.className = 'like';
      target.innerHTML = '좋아요';
      this.likeSet.delete(title);
    }

    // 찜목록 업데이트
    this.updateLikeList();
  }

  updateLikeList() {
    let lis = '';
    this.likeSet.forEach( (v) => {
      lis +=`
        <li>${v}</li>
      `
    });
    
    const likeList = document.querySelector('.likeList > ul');
    likeList.innerHTML = lis;
  }
}

export default Blog;