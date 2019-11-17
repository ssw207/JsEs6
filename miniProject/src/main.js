class Blog {
  constructor() {
    this.setInitValues();
    this.eventRegister();
  }

  setInitValues() {
    this.listBlogUl = document.querySelector('.listBlog > ul');
    this.likeSet = new Set();
  }

  eventRegister() {
    this.listBlogEvent();
    this.likeEvent();
  }

  // 블로그 리스트 이벤트
  listBlogEvent() {
    const blogBtn = document.querySelector('.start');
    const dataUrl = '/data/data.json';

    blogBtn.addEventListener('click', () =>{
      this.getData(dataUrl, this.makeBlogList.bind(this));
    });
  }

  //블로그 데이터 조회
  getData(dataUrl, fn) {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', () => {
      const data = JSON.parse(oReq.responseText).body;
      fn(data);
    });

    oReq.open('GET', dataUrl);
    oReq.send();
  }

  //블로그 목록 생성
  makeBlogList(data) {
    let listBlog = '';
    data.forEach( v => {
      listBlog +=`
        <li>
          <a href="${v.link}">${v.title}</a>
          <div class="like" >좋아요</div>
        </li>
      `
    });
    // debugger;
    this.listBlogUl.innerHTML = listBlog;
  }

  //좋아요 이벤트
  likeEvent() {
    /**
     * 클릭한 좋아요의 클래스가 like이면 
     * 1.싫어요로 글자를 변경
     * 2.클래스를 unlike로 변경
     * 3.찜목록에서 제목을 제거한다.
     * 
     * unlike면 반대로 작동
     */
    this.listBlogUl.addEventListener('click', ({target}) => {
      const className = target.className ;
      if (className !== 'like' &&  className !== 'unlike') return;

      this.changeLikeState(target, className);  
      this.makeLikeList();
    });
  }

  changeLikeState(target, className) {
      const title = target.previousElementSibling.innerHTML;
      
      if(className === 'like') {
        target.className = 'unlike';
        target.textContent = '싫어요';
        this.likeSet.add(title);
      } 
      else if (className === 'unlike') {
        target.className = 'like';
        target.textContent = '좋아요';
        this.likeSet.delete(title);
      }
  }

  makeLikeList() {
    let lis = '';
    this.likeSet.forEach( v => {
    lis += `
        <li>${v}</li>
      `
    });
    const listLike = document.querySelector('.listLike > ul');
    listLike.innerHTML = lis;
    lis
  }
}

export default Blog;