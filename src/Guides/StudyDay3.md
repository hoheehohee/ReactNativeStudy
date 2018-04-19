## Components and APIs

### Basic Components
- React Native 기본 Components
- View
	- UI를 구현하기 위한 가장 기본적인 컨포넌트
- Text
	- 텍스트를 표시하기위한 컨포넌트.
- Image
	- 이미지를 표시하기위한 컨포넌트.
- TextInput
	- 키보드를 통해 앱에 텍스트를 입력하기위한 컨포넌트.
- ScrollView
	- 여러 컨포넌트 및 View를 호스트 할 수 있는 스크롤 컨테이너 제공
- StyleSheet
	- CSS 스타일 시트와 유사한 추상 레이어를 제공

### User Interface
- 사용자 인터페이스 컨트롤을 렌더링 한다. 플랫폼 특정 컨포넌트
- Button
	- 터치를 처리하기 위한 기본 버튼 컨포넌트
- Picker
	- iOS 및 Android에서 기본 선택 컨포넌트를 렌더링 한다.
- Slider
	- 값 범위에서 단일 값을 선택하는데 사용되는 컨포넌트
- Switch
	- 부울 입력을 렌더링 한다.
### List View
- 일반적은 ScrollView와 달리 현재 화면에 표시되는 요소만 렌터링 한다. 따라서 긴 목록의 데이터를 표시할 수 있다.
- FlatList
	- 실행 가능한 스크롤 목록을 렌더링하기 위한 컨포넌트
- SectionList
	- FlatList와 같지만 단락 목록 용이다.

### iOS Components and APIs
- 다음 컨포넌트 중 다수는 일반적으로 사용되는 UIKit클래스에 대한 래퍼를 제공
- ActionSheetIOS
	- iOS 액션 시트 또는 공유 시트를 표시하는 API
- AlertIOS
	- 메세지가 있는 iOS 알림 대화상자를 만들거나 사용자 입력을 위한 prompt를 만든다.
- DatePickerIOS
	- 날짜/시간을 선택할 수 있는 API 제공
- ImagePickerIOS
	- 이미지 선택 도구를 렌더링 한다.
- NavigatorlIOs
	- UINavigationController를 사용하면 탐색 스택을 구현할 수 있다.
- ProgressViewIOS
	- UIProgressView를 렌더링한다.
- PushNotificationIOS
	- 권한 처리 및 아이콘배지 번호를 포함아여 앱에 대한 푸시 알림을 처리
- SegmentedControllIOS
	- UISegmentedControl을 렌더링 한다.
- TabBarIOS
	- UITabViewController를 렌더링 한다.
	- TabBarIOS.Item과 함께 사용

### Android Components and APIs
- 일반적으로 사용되는 Android 클래스에 대한 래퍼
- BackHandler
	- back 탐색을 위해 하드웨어 버튼 누름을 감지
- DatePickerAndroid
	- 날짜 대화상자
- DrawerLayoutAndroid
	- DrawerLayout 랜더링
- PermissionsAndroid
	- Android M에 도입 된 권한 모델에 대한 액세스를 제공
- ProgressBarAndroid
	- ProgressBar를 렌더링
- TimePickerAndroid
	- 시간 선택기 대화 상자
- ToastAndroid
	- Toast 알림
- ToolbarAndroid
	- 툴바를 렌더링
- ViewPagerAndroid
	- child view에 좌우를 바꿀수가 있는 컨테이너

### Ohters
- 특정 응용 프로그램에 유용 할 수 있는 API
- ActivityIndicator
	- 원형 로딩 표시기를 표시
- Alert
	- 지정된 제목과 메시지로 경고 대화 상자
- Animated
	- 유동적이고 강력한 애니메이션을 제작하고 유지하기 쉽도록 제작 된 라이브러리
- CameraRoll
	- 로컬 카메라 롤 / 갤러리에 대한 액세스를 제공
- Clipboard
	- iOS 및 Android에서 클립 보드의 콘텐츠를 설정하고 가져 오는 인터페이스
- Dimensions
	- 장치 크기를 가져올 수있는 인터페이스
- KeyboardAvoidingView
	- 가상 키보드의 방향을 자동으로 벗어나는 뷰를 제공
- Linking
	- 수신 및 발신 앱 링크와 상호 작용할 수있는 일반 인터페이스를 제공
- Modal
	- Modal 제공
- PixelRatio
	- 장치 픽셀 밀도에 대한 액세스를 제공
- RefreshControl
	- 끌어서 새로 고침 기능을 추가하기 위해 ScrollView 내부에서 사용
- StatusBar
	- 앱 상태 표시 줄을 제어하는 ​​컨포넌트
- WebView
	- 웹 컨텐트를 네이티브 뷰로 렌더링하는 컨포넌트


## Platform Specific Code
- 교차 플랫폼 앱을 제작할 때 최대한 많은 코드를 재사용하고 싶을 것입니다. 예를 들어 iOS 및 Android 용으로 별도의 시각적 구성 요소를 구현하려는 경우와 같이 코드가 다른 경우에는 시나리오가 발생할 수 있습니다.
- React Native는 코드를 쉽게 구성하고 플랫폼별로 분리하는 두 가지 방법을 제공
	- 플랫폼 모듈 사용
	- 플랫폼 별 파일 확장명 사용\

### Platform module
- React Native는 앱이 실행되는 플랫폼을 감지하는 모듈을 제공
- detection 사용하여 플랫폼 특정 코드를 구현할 수 있다
	```javascript
	import {Platform, StyleSheet} from 'react-native';

	const styles = StyleSheet.create({
	  height: Platform.OS === 'ios' ? 200 : 100,
	});
	```
- Platform.OS는 ios에서 실행될 때 iOS가 되고 그리고 android에서 실행될 때 Android가 된다.
- Platform.OS를 키로 포함하는 객체를 제공하면 현재 실행중인 플랫폼의 값을 반환하는 Platform.select 메서드도 사용할 수 있다
	```javascript
	import {Platform, StyleSheet} from 'react-native';

	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    ...Platform.select({
	      ios: {
	        backgroundColor: 'red',
	      },
	      android: {
	        backgroundColor: 'blue',
	      },
	    }),
	  },
	});
	```
	- 이렇게하면 컨테이너에 플렉스가 생깁니다
		- 두 플랫폼 모두에서 1, iOS에서는 빨간색 배경색, Android에서는 파란색 배경색이됩
		```javascript
		const Component = Platform.select({
		  ios: () => require('ComponentIOS'),
		  android: () => require('ComponentAndroid'),
		})();

		<Component />;
		```
- Detecting the Android version
	- Android에서는 플랫폼 모듈을 사용하여 앱이 실행되는 Android 플랫폼의 버전을 검색 할 수 있다
	```javascript
	import {Platform} from 'react-native';

	if (Platform.Version === 25) {
	  console.log('Running on Nougat!');
	}
	```
- Detecting the iOS version
	- iOS에서 버전은 - [UIDevice systemVersion]의 결과이다.
	이 버전은 현재 운영 체제 버전의 문자이다.
	시스템 버전의 예는 "10.3"이며. 예를 들어, iOS에서 주 버전 번호를 검색하려면 다음과 같이 한다.
	```javascript
	import {Platform} from 'react-native';

	const majorVersionIOS = parseInt(Platform.Version, 10);
	if (majorVersionIOS <= 9) {
	  console.log('Work around a change in behavior');
	}
	```

### Platform-specific extensions
- 플랫폼 특정 코드가 더 복잡한 경우 코드를 별도의 파일로 분리하는 것을 고려해야한다
React Native는 파일에 .ios가있을 때이를 감지한다. 또는 .android. 다른 컨포넌트에서 필요한 경우 관련 플랫폼 파일을 로드해야한다.
- 예를 들어 프로젝트에 다음 파일이 있다고 가정 해보자.
	```javascript
	BigButton.ios.js
	BigButton.android.js
	```
- 그런 다음 구성 요소를 다음과 같이 요구할 수 있다.
	```javascript
	const BigButton = require('./BigButton');
	```
React Native는 실행중인 플랫폼을 기반으로 올바른 파일을 자동으로 선택한다.

## Navigating Between Screens
