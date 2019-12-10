# React Native Svg countdown example 
### Created from React Native empty project template


* Added [react-native-svg](https://github.com/react-native-community/react-native-svg) library
* Added Dan Abramov's [UseInterval Hook](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

###Preview
![Countdown example](https://github.com/milansusnjar/countdownSvg/master/animation.gif "Countdown example")


Timer will countdown from 10 and decrease the value every second.

When reaching zero it will reset to 10.


```javascript
const [timer, setTimer] = useState(10);

  useInterval(() => {
    if (timer <= 0) {
      setTimer(10);
    } else {
      setTimer(timer - 1);
    }
  }, 1000);
```

It's implemented with two svg circles and a text in the middle. One circle is green, the other is red.

Red circle has strokeDashoffset with the size of the passed time value.

Text color is green for values between 4 and 10, and red for last three seconds.


Implementation is in `App.js` file. 
