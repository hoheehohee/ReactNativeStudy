## 네트워킹

### Feach 사용하기
- React Native는 기본적으로 네트워킹 Feach API를 제공한다.
- 콘텐츠를 가져올 URL을 전달
	```javascript
	fatch('https://mywebsite.com/mydata.json')
	```
- HTTP요청을 사용자의 정의 할 수 있는 두번째 인수를 제공
	추가 헤더를 지정하거나 POST 요청 가능
	```javascript
	fetch('https://mywebsite.com/endpoint/', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    firstParam: 'yourValue',
	    secondParam: 'yourOtherValue',
	  })
	})
	```
- 응답 처리
- 일반적으로 네트워킹은 비동기식 작업이다.
Featch 메소드는 비동기 방식으로 작동하는 코드를 작성하는 직관적인 Promise를 반환
	```javascript
	function getMoviesFromApiAsync() {
	  return fetch('https://facebook.github.io/react-native/movies.json')
	    .then((response) => response.json())
	    .then((responseJson) => {
	      return responseJson.movies;
	    })
	    .catch((error) => {
	      console.error(error);
	    });
	}
	```
- ES6에서 제공하는 'async/await'구문 사용 가능
	```javascript
	async function getMoviesFromApi() {
  try {
	    let response = await fetch(
	      'https://facebook.github.io/react-native/movies.json'
	    );
	    let responseJson = await response.json();
	    return responseJson.movies;
	  } catch (error) {
	    console.error(error);
	  }
	}
	```

### 다른 네트워킹 라이브러리
- XMLHttpReauest API는 React Native에 내장 되어 있다.
- frisbee나 axios와 같은 라이브러리를 사용할 수 있다.

### WebSocket지원
- 단일 TCP 연결을 통해 full-duplex 통신 채널을 재공하는 프로토콜인 WebSokets도 지원
	```javascript
	var ws = new WebSocket('ws://host.com/path');

	ws.onopen = () => {
	  // connection opened
	  ws.send('something'); // send a message
	};

	ws.onmessage = (e) => {
	  // a message was received
	  console.log(e.data);
	};

	ws.onerror = (e) => {
	  // an error occurred
	  console.log(e.message);
	};

	ws.onclose = (e) => {
	  // connection closed
	  console.log(e.code, e.reason);
	};
	```
