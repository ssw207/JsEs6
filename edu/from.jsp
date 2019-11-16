<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script>
    function print () {
      //filter, include, from 사용
      //문자열'e'가 포함된 텍스트 배열 반환
      const lis = document.querySelectorAll("li");    
      const liArr = Array.from(lis);   
      let textArr = liArr.map(val => val.innerHTML);
      console.log(textArr);
      var rsArr = textArr.filter(val => val.includes('e'));
      console.log(rsArr);
    }

    print();
  </script>
</head>
<body>
  <ul>
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
    <li>strawberry</li>
  </ul>
  
  
</body>
</html>