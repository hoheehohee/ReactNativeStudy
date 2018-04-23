# Images

## Static Image Resources
- iOS 및 Android 앱에서 이미지 및 기타 미디어 자산을 관리하는 통일 된 방법을 제공.
- 정적 이미지를 앱에 추가하려면 소스 코드 트리의 어딘가에 놓고 다음과 같이 참조한다.
	```javascript
	<Image source={require('./my-icon.png')} />
	```
- 이미지의 이름은 JS 모듈이 해석되는 것과 같은 방법으로 해석된다. 위의 예에서 패키지 관리자는 my-icon.png가 필요한 구성 요소와 동일한 폴더에서 my-icon.png를 찾는다. 또한 **my-icon.ios.png** 및 **my-icon.android.png** 가있는 경우 패키지 관리자는 플랫폼에 맞는 올바른 파일을 선택한다.
- 또한 @2x 및 @3x 접미사를 사용하여 다양한 화면 밀도의 이미지를 제공 할 수 있다. 다음 파일 구조가있는 경우:
	```
	.
	├── button.js
	└── img
	    ├── check@2x.png
	    └── check@3x.png
	```
	button.js 코드에는 다음이 포함된다.
	```javascript
	<Image source={require('./img/check.png')} />
	```
	packger는 장치의 화면 밀도에 해당하는 이미지를 묶어서 제공한다.
	예를 들어, check@2x.png는 iPhone 7에서 사용되며, checkcheck3x.png는 iPhone 7 Plus 또는 Nexus 5에서 사용된다. 화면 밀도와 일치하는 이미지가없는 경우 가장 가까운 최상의 옵션이 선택된다.

- Windows에서 프로젝트에 새 이미지를 추가하는 경우 패키지 도구를 다시 시작해야 된다.
다음과 같은 이점이 있다.
	1. iOS 및 Android에서 동일한 시스템이다.
	2. 이미지는 JavaScript 코드와 동일한 폴더에 있다. 구성 요소는 자체 포함되어 있다.
	3. 전역 이름 공간이 없다. 즉 이름 충돌에 대해 걱정할 필요가 없다.
	4. 실제로 사용 된 이미지 만 앱에 패키지된다.
	5. 이미지 추가 및 변경에는 앱 재 컴파일이 필요하지 않지만, 정상적으로 시뮬레이터를 새로 고침해준다.
	6. packager는 이미지 크기를 알고 있으므로 코드에서 복제 할 필요가 없습니다.
	7. 이미지는 npm 패키지를 통해 배포 할 수 있다.

- 이 기능을 사용하려면 필요에 따라 이미지 이름을 정적으로 알아야한다.
	```javascript
	// GOOD
	<Image source={require('./my-icon.png')} />;

	// BAD
	var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
	<Image source={require('./' + icon + '.png')} />;

	// GOOD
	var icon = this.props.active
	  ? require('./my-icon-active.png')
	  : require('./my-icon-inactive.png');
	<Image source={icon} />;
	```
- 이 방법으로 필요한 이미지 소스에는 이미지의 크기 (너비, 높이) 정보가 포함된다.
- 이미지를 동적으로 (예: flex를 통해) 크기 조정해야하는 경우 style 속성에 {width: undefined, height: undefined}를 수동으로 설정해야 할 수 있다.

## Static Non-Image Resources
- 위에 설명 된 필수 구문을 사용하여 오디오, 비디오 또는 문서 파일을 프로젝트에 정적으로 포함 할 수도 있다.
- `.mp3`, `.wav`, `.mp4`, `.mov`, `.html` 및 `.pdf` 를 포함하여 가장 일반적인 파일 형식이 지원된다.
전체 목록은 [packager default](https://github.com/facebook/react-native/blob/master/local-cli/util/Config.js#L68)을 참조
- 패키지 관리자 구성 파일을 작성하여 다른 유형에 대한 지원을 추가 할 수 있다. (전체 구성 옵션 목록은 [packager config file](https://github.com/facebook/metro/blob/master/packages/metro/src/defaults.js#L14-L44) 참조)
- 크기 정보는 현재 비 이미지 애셋에 전달되지 않으므로 동영상은 ```flexGrow``` 대신 절대 위치 지정을 사용해야한다.
Android 용 Xcode 또는 Assets 폴더에 직접 연결된 동영상에는이 제한이 적용되지 않는다.

## Images From Hybrid App's Resources: 하이브리드 응용 프로그램 리소스의 이미지

- 하이브리드 앱 (React Native의 일부 UI, 플랫폼 코드의 일부 UI)을 빌드하는 경우 앱에 이미 번들 된 이미지를 계속 사용할 수 있다.
- Xcode asset catalogs 또는 Android drawable 폴더에 포함 된 이미지의 경우 확장명이 없는 이미지 이름을 사용 :
	```javascript
	<Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
	```
- Android assets 폴더에있는 이미지의 경우 asset:/ scheme :
	```javascript
	<Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />
	```
- 이러한 접근 방식은 안전성 검사를 제공하지 않는다. 응용 프로그램에서 해당 이미지를 사용할 수 있도록 보장하는 것은 사용자의 몫이다. 또한 수동으로 이미지 크기를 지정해야한다.

## Network Images

- 앱에 표시 할 이미지의 대부분은 컴파일 타임에 사용할 수 없으며, 바이너리 크기를 줄이기 위해 동적으로 로드하기를 원할 것이다.
정적 리소스와 달리 이미지의 크기를 수동으로 지정해야한다.
iOS에서 [App Transport Security](https://github.com/facebook/react-native-website/blob/master/docs/running-on-device.md#app-transport-security) 요구 사항을 충족하려면 https를 사용하는 것이 좋다.
	```javascript
	// GOOD
	<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
	       style={{width: 400, height: 400}} />

	// BAD
	<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
	```

### Network Requests for Images: 이미지에 대한 네트워크 요청
- 이미지 요청과 함께 HTTP-Verb, Headers 또는 Body와 같은 것을 설정하려면 소스 객체에서 다음 속성을 정의하여이 작업을 수행 할 수 있다.
	```javascript
	<Image
	  source={{
	    uri: 'https://facebook.github.io/react/logo-og.png',
	    method: 'POST',
	    headers: {
	      Pragma: 'no-cache',
	    },
	    body: 'Your Body goes here',
	  }}
	  style={{width: 400, height: 400}}
	/>
	```

## Uri Data Images

- 경우에 따라 REST API 호출에서 인코딩 된 이미지 데이터를 가져올 수 있다. 이러한 이미지를 사용하려면 `'data:'` URI 스키마를 사용할 수 있다.
네트워크 자원과 동일하게 수동으로 이미지의 크기를 지정해야합니다.
	> DB의 목록에있는 아이콘과 같이 매우 작고 동적 인 이미지에만 권장한다.

	```javascript
	// 적어도 너비와 높이 포함!
	<Image
	  style={{
	    width: 51,
	    height: 51,
	    resizeMode: Image.resizeMode.contain,
	  }}
	  source={{
	    uri:
	      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
	  }}
	/>
	```
### Cache Control (iOS Only): 캐시 제어 (iOS 전용)
- 경우에 따라 이미지가 이미 로컬 캐시에있는 경우에만 표시 할 수 있다. 즉, 해상도가 더 높아질 때까지 저해상도 자리 표시자를 표시 할 수 있다.
다른 경우에는 이미지가 오래되어 대역폭을 절약하기 위해 오래된 이미지를 표시할지 신경 쓰지 않아된다. `cache` 속성을 사용하면 네트워크 계층이 캐시와 상호 작용하는 방식을 제어 할 수 있다.
	- `default` : 기본 플랫폼 기본 전략을 사용하십시오.
	- `reload` : URL의 데이터는 원래 소스에서 로드된다. URL로드 요청을 충족시키기 위해 기존의 캐시 데이터를 사용해서는 안된다.
	- `force-cache` : 캐시 된 기존 데이터는 사용 기간 또는 만료 날짜와 관계없이 요청을 충족하는 데 사용된다. 요청에 해당하는 캐시에 기존 데이터가없는 경우 데이터는 원래 소스에서 로드된다.
	- `only-if-cached` : 캐시 된 기존 데이터는 사용 기간 또는 만료 날짜와 관계없이 요청을 충족하는 데 사용된다. URL로드 요청에 해당하는 캐시에 기존 데이터가 없는 경우 원본 소스에서 데이터를 로드하려고 시도하지 않으며 로드가 실패한 것으로 간주된다.
		```javascript
		<Image
		  source={{
		    uri: 'https://facebook.github.io/react/logo-og.png',
		    cache: 'only-if-cached',
		  }}
		  style={{width: 400, height: 400}}
		/>
		```

## Local Filesystem Images: 로컬 파일 시스템 이미지

- `Images.xcassets` 외부에있는 로컬 리소스를 사용하는 예는 [CameraRoll](https://github.com/facebook/react-native-website/blob/master/docs/cameraroll.md)을 참조

### Best Camera Roll Image: 최고의 카메라롤 이미지
- iOS는 카메라 롤의 동일한 이미지에 대해 여러 크기를 저장하므로 성능상의 이유로 가능한 한 가까운 이미지를 선택하는 것이 매우 중요하다.
200x200 크기의 미리보기 이미지를 표시 할 때 전체 품질의 3264x2448 이미지를 원본으로 사용하고 싶지는 않는다.
정확히 일치하는 항목이 있으면 React Native가 선택한다, 그렇지 않으면 가까운 크기에서 크기를 재조정할 때 흐려지는것을 방지하기 위해 적어도 50% 더 큰 첫번째 것을 사용하게된다. 이 모든 것은 기본적으로 이루어 지므로 지루한 (그리고 오류가 발생하기 쉬운) 코드를 작성하는 것에 대해 걱정할 필요가 없다.

## Why Not Automatically Size Everything?: 왜 자동으로 크기를 조정하지 않습니까?
- 브라우저에서 이미지에 크기를 지정하지 않으면 브라우저는 0x0 요소를 렌더링하고 이미지를 다운로드 한 다음 올바른 크기로 이미지를 렌더링한다. 이 문제의 가장 큰 문제점은 이미지가로드 될 때 UI가 주위를 뛰어 넘을 것이라는 것입니다. 이는 매우 나쁜 사용자 환경을 만든다.
React Native에서이 동작은 의도적으로 구현되지 않는다. 개발자가 원격 이미지의 크기 (또는 종횡비)를 미리 알면 더 많은 작업을 수행 할 수 있지만 더 나은 사용자 환경을 제공 할 수 있다고 믿는다.
`require ('./my-icon.png')` 구문을 통해 앱 번들에서 로드 된 정적 이미지의 크기는 장착시 즉시 사용할 수 있으므로 자동으로 크기가 조정될 수 있다.

	예를 들어, `require('./ my-icon.png')` 의 결과는 다음과 같다:

	```javascript
	{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}
	```

## Source as an object: 객체로서의 소스
- React Native에서 흥미로운 한 가지 결정은 src 속성의 이름이 source이고 uri 속성이있는 객체는 문자열이 아니라는 것이다
	```javascript
	<Image source={{uri: 'something.jpg'}} />
	```
- 인프라 측면에서 볼 때이 개체에 메타 데이터를 첨부 할 수 있기 때문이다. 예를 들어 `require('./ my-icon.png')`를 사용하는 경우 실제 위치와 크기에 대한 정보를 추가한다 (이 사실에 의존하지 않고 나중에 변경 될 수 있다). 이것은 미래의 교정이기도 한다. 예를 들어, `{uri : ...}`를 출력하는 대신에, 어떤 시점에서 스프라이트를 지원하고 싶을 수도 있다.
`{uri : ..., crop : {left : 10, top : 50, width : 20, height : 40}}`을 출력하고 모든 기존 호출 사이트에서 스프라이트를 투명하게 지원할 수 있다.
- 구현이 매우 간단하기 때문에 어떤 경우에는 `<ImageBackground>`를 사용하지 않을 수도 있다.
- 더 많은 통찰력을 얻으려면 `<ImageBackground>`의 [source code](https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js)를 참조하고 필요한 경우 사용자 정의 구성 요소를 직접 작성하라.
	```javascript
	return (
	  <ImageBackground source={...}>
	    <Text>Inside</Text>
	  </ImageBackground>
	);
	```
