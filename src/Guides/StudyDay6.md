# Improving User Experience
- 모바일 플랫폼 용 앱을 작성하는 것은 미묘하다. 웹 배경에서 오는 개발자는 종종 고려하지 않는 많은 세부 사항이 있다.
	이 가이드는 이러한 뉘앙스 중 일부를 설명하고 응용 프로그램에 반영 할 수있는 방법을 보여준다.

## Configure text inputs
- 터치 스크린에 텍스트를 입력하는 것은 어려운 일이다. 작은 화면의 소프트웨어 키보드이다.
	그러나 필요한 데이터의 유형에 따라 텍스트 입력을 올바르게 구성하면 더 쉽게 만들 수 있다.
	- 첫 번째 필드에 자동으로 초점 맞추기
	- 예상 데이터 형식의 예로서 자리 표시 자 텍스트 사용
	- 자동 대문자 사용 및 자동 교정 사용 또는 사용 안 함
	- 키보드 유형 (예 : 이메일, 숫자) 선택
	- 돌아 가기 버튼이 다음 입력란에 초점을 맞추거나 양식을 제출했는지 확인
- 추가 구성 옵션에 대해서는 TextInput [문서](https://facebook.github.io/react-native/docs/textinput.html)를 확인한다.
- [Try it on your phone](https://snack.expo.io/H1iGt2vSW)

## Manage layout when keyboard is visible
- 소프트웨어 키보드는 화면의 거의 절반을 차지한다.
- 키보드에서 처리 할 수있는 대화형 요소가있는 경우 KeyboardAvoidingView [component](https://facebook.github.io/react-native/docs/keyboardavoidingview.html) 를 사용하여 대화식 요소에 계속 액세스 할 수 있는지 확인해야한다.
- [Try it on your phone](https://snack.expo.io/ryxRkwnrW)

## Make tappable areas larger
- 휴대 전화에서는 버튼을 누를 때 매우 정확하지 않다.
	모든 대화식 요소가 44x44 이상인지 확인한다.
	이를 수행하는 한 가지 방법은 요소에 충분한 공간을 남겨 두는 것이다. `padding`, `minWidth` 및 `minHeight` 스타일 값이 유용 할 수 있다.
	또는 hitSlop prop를 사용하여 레이아웃에 영향을주지 않고 대화식 영역을 늘릴 수 있다.
- [Try it on your phone](https://snack.expo.io/rJPwCt4HZ)

## Use Android Ripple
- Android API 21+는 소재 디자인 리플을 사용하여 사용자가 화면에서 상호 작용 영역을 터치 할 때 피드백을 제공한다.
	React Native는 TouchableNativeFeedback [coomponent](https://facebook.github.io/react-native/docs/touchablenativefeedback.html) 를 통해이를 노출한다.
	불투명도 또는 하이라이트 대신에이 터치 가능 효과를 사용하면 앱이 플랫폼에서 훨씬 더 적합하게 느껴지기도한다.
	즉 당신이 아이폰 OS 나 안드로이드 API <21 작동하지 않기 때문에 그것을 사용할 때주의해야했다, 그래서 당신은 iOS의 다른 만질 component 중 하나를 사용하여 폴백해야한다.
	[react-native-platform-touchable](https://github.com/react-community/react-native-platform-touchable) 과 같은 라이브러리를 사용하여 플랫폼 차이를 처리 할 수 ​​있다.
- [Try it on your phone](https://snack.expo.io/SJywqe3rZ)

## Screen orientation lock
- 두 가지를 모두 지원하지 않는 한 화면 방향을 세로 또는 가로로 고정하는 것이 좋다.
	iOS에서는 Xcode의 일반 탭 및 배포 정보 섹션에서 지원할 장치 방향을 사용할 수 있다 (변경시 장치 메뉴에서 iPhone을 선택했는지 확인한다).
	Android의 경우 AndroidManifest.xml 파일을 열고 activity 요소 내에 'android: screenOrientation = "portrait"'를 추가하여 세로로 고정하거나 'android: screenOrientation = "landscape"'를 사용하여 가로로 고정한다.


# Timers
- 타이머는 애플리케이션의 중요한 부분이며 React Native는 [browser timers](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/Timers) 를 구현한다.

## Timers
- setTimeout, clearTimeout
- setInterval, clearInterval
- setImmediate, clearImmediate
- requestAnimationFrame, cancelAnimationFrame
- `requestAnimationFrame(fn)`은 `setTimeout(fn, 0)`과 동일하지 않다.
	이전 프레임은 모든 프레임이 플러시 된 후 실행되며 후자는 가능한 빨리 (iPhone 5S에서는 초당 1000x 이상) 실행된다.
- `setImmediate`는 일괄 처리 된 응답을 네이티브로 되돌리기 전에 현재 JavaScript 실행 블록의 끝에서 실행다.
	`setImmediate` 콜백 내에서 `setImmediate` 를 호출하면 바로 실행되며, 그 사이에 native로 되돌아 가지 않는다.
- Promise 구현은 비동기 프리미티브로 `setImmediate` 를 사용한다.

## InteractionManager
- 잘 만들어진 네이티브 앱이 너무 부드럽게 느껴지는 한 가지 이유는 상호 작용 및 애니메이션 중에 값 비싼 작업을 피하는 것이다.
	React Native에는 현재 JS 실행 스레드가 하나만 있다는 제한이 있지만 `InteractionManager` 를 사용하여 interactions/animations 완료된 후 장기 실행 작업이 시작되도록 예약 할 수 있다.
- 응용 프로그램은 다음과 상호 작용 한 후에 작업이 실행되도록 예약 할 수 있다.
	```javascript
	InteractionManager.runAfterInteractions(() => {
	  // ...long-running synchronous task...
	});
	```
- 이것을 다른 스케줄링 대안과 비교해보자:
	- requestAnimationFrame(): 시간이 지남에 따라 뷰를 애니메이션화하는 코드다.
	- setImmediate/setTimeout/setInterval(): 나중에 코드를 실행하면 애니메이션이 지연 될 수 있다.
	- runAfterInteractions(): 활성 애니메이션을 지연시키지 않고 나중에 코드를 실행한다.
- 터치 핸들링 시스템은 하나 이상의 활성 접촉을 '상호 작용'으로 간주하고 모든 접촉이 종료되거나 취소 될 때까지 `runAfterInteractions()` 콜백을 지연시킨다.
- 또한 InteractionManager를 사용하면 응용 프로그램에서 애니메이션 시작시 상호 작용 '핸들'을 생성하고 완료시 애니메이션을 삭제하여 애니메이션을 등록 할 수 있다.
	```javascript
	var handle = InteractionManager.createInteractionHandle();
	// run animation... (`runAfterInteractions` tasks are queued)
	// later, on animation completion:
	InteractionManager.clearInteractionHandle(handle);
	// queued tasks run if all handles were cleared
	```
## TimerMixin
- React Native로 생성 된 앱의 치명적인 주요 원인은 component를 마운트 해제 한 후 타이머가 실행 되었기 때문이다.
	이 문제를 해결하기 위해 `TimerMixin` 을 도입했다.
	`TimerMixin` 을 포함 시키면 `setTimeout(fn, 500)` 에 대한 호출을 `this.setTimeout(fn, 500)` 으로 바꿀 수 있으며,이 컴포넌트를 언 마운트하면 모든 것이 올바르게 정리된다.
- 이 라이브러리는 React Native와 함께 제공되지 않다. 프로젝트에서 사용하려면 npm으로 설치해야한다. react-timer-mixin - 프로젝트 디렉토리에서 저장해야한다.
	```javascript
	import TimerMixin from 'react-timer-mixin';

	var Component = createReactClass({
	  mixins: [TimerMixin],
	  componentDidMount: function() {
	    this.setTimeout(() => {
	      console.log('I do not leak!');
	    }, 500);
	  },
	});
	```
- 이렇게하면 component가 마운트 해제 된 후 시간 초과로 인해 발생하는 크래시와 같은 버그를 추적하는 많은 노력을 생략 할 수 있다.
- 여러분의 React component에 ES6 클래스를 사용한다면 mixins 용 내장 API가 없다는 것을 명심해야한다. `TimerMixin` 을 ES6 클래스와 함께 사용하려면 반응 믹스를 권장한다.

# props & state

## propes
> props는 parent로부터 받는 데이터이며 (자식 컴포넌트의 입장에서는) 불변성 데이터, 즉 값을 바꿀 수 없는 데이터라고 생각해도 된다 (this.setProps()와 같은 메서드가 있긴 하나, deprecated method이며 사용이 권장되지 않는다). 아래의 패턴: Smart and Dumb Components에서 간략히 설명하겠지만, 많은 mutable state(변경 가능한 값)들은 Prop으로 대체 표현되거나 한 곳으로 몰아 넣을 수 있다.
props는 거의 대부분의 데이터를 표현하는 중요한 방법으로, React 라이브러리의 사용자는 state보다는 props의 사용에 더 익숙해져야 할 것이다. props로 표현된 데이터는 이전 글에서 설명했듯이, 마운트와 업데이트 시 React.Proptypes API로 런타임 타입 체크가 가능해 잘못된 상황을 빨리 감지할 수 있는 이점도 있다.

## state
> State는 컴포넌트 안에서 변경이 가능한 데이터이다. 일반적으로 컴포넌트 안의 state는 최소한으로 유지하고, 가능한 한 상위 컴포넌트로 이동해야 할 필요가 있다. 이는 변경 가능한 데이터의 관리가 무척 어렵기 때문이다.
state가 비록 변경이 가능한 값이긴 하나, 엄밀히 말하자면 this.state 자체가 mutable한 값은 아닙니다. 데이터의 갱신은 반드시 setState(nextState) 비동기 함수를 통해서 해야 한다.
