import './style.css';

const KEYBOARD = [['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete'],['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'],['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']];
const ENG_MAP = {"Backquote":{"lower":"`","upper":"`","shift":"~","shiftCaps":"~"},"Digit1":{"lower":"1","upper":"1","shift":"!","shiftCaps":"!"},"Digit2":{"lower":"2","upper":"2","shift":"@","shiftCaps":"@"},"Digit3":{"lower":"3","upper":"3","shift":"#","shiftCaps":"#"},"Digit4":{"lower":"4","upper":"4","shift":"$","shiftCaps":"$"},"Digit5":{"lower":"5","upper":"5","shift":"%","shiftCaps":"%"},"Digit6":{"lower":"6","upper":"6","shift":"^","shiftCaps":"^"},"Digit7":{"lower":"7","upper":"7","shift":"&","shiftCaps":"&"},"Digit8":{"lower":"8","upper":"8","shift":"*","shiftCaps":"*"},"Digit9":{"lower":"9","upper":"9","shift":"(","shiftCaps":"("},"Digit0":{"lower":"0","upper":"0","shift":")","shiftCaps":")"},"Minus":{"lower":"-","upper":"-","shift":"_","shiftCaps":"_"},"Equal":{"lower":"=","upper":"=","shift":"+","shiftCaps":"+"},"Backspace":{"lower":"Backspace","upper":"Backspace","shift":"Backspace","shiftCaps":"Backspace"},"Tab":{"lower":"Tab","upper":"Tab","shift":"Tab","shiftCaps":"Tab"},"KeyQ":{"lower":"q","upper":"Q","shift":"Q","shiftCaps":"q"},"KeyW":{"lower":"w","upper":"W","shift":"W","shiftCaps":"w"},"KeyE":{"lower":"e","upper":"E","shift":"E","shiftCaps":"e"},"KeyR":{"lower":"r","upper":"R","shift":"R","shiftCaps":"r"},"KeyT":{"lower":"t","upper":"T","shift":"T","shiftCaps":"t"},"KeyY":{"lower":"y","upper":"Y","shift":"Y","shiftCaps":"y"},"KeyU":{"lower":"u","upper":"U","shift":"U","shiftCaps":"u"},"KeyI":{"lower":"i","upper":"I","shift":"I","shiftCaps":"i"},"KeyO":{"lower":"o","upper":"O","shift":"O","shiftCaps":"o"},"KeyP":{"lower":"p","upper":"P","shift":"P","shiftCaps":"p"},"BracketLeft":{"lower":"[","upper":"{","shift":"{","shiftCaps":"["},"BracketRight":{"lower":"]","upper":"}","shift":"}","shiftCaps":"]"},"Backslash":{"lower":"\\","upper":"|","shift":"|","shiftCaps":"\\"},"Delete":{"lower":"Del","upper":"Del","shift":"Del","shiftCaps":"Del"},"CapsLock":{"lower":"Caps Lock","upper":"Caps Lock","shift":"Caps Lock","shiftCaps":"Caps Lock"},"KeyA":{"lower":"a","upper":"A","shift":"A","shiftCaps":"a"},"KeyS":{"lower":"s","upper":"S","shift":"S","shiftCaps":"s"},"KeyD":{"lower":"d","upper":"D","shift":"D","shiftCaps":"d"},"KeyF":{"lower":"f","upper":"F","shift":"F","shiftCaps":"f"},"KeyG":{"lower":"g","upper":"G","shift":"G","shiftCaps":"g"},"KeyH":{"lower":"h","upper":"H","shift":"H","shiftCaps":"h"},"KeyJ":{"lower":"j","upper":"J","shift":"J","shiftCaps":"j"},"KeyK":{"lower":"k","upper":"K","shift":"K","shiftCaps":"k"},"KeyL":{"lower":"l","upper":"L","shift":"L","shiftCaps":"l"},"Semicolon":{"lower":";","upper":":","shift":":","shiftCaps":";"},"Quote":{"lower":"'","upper":"\"","shift":"\"","shiftCaps":"'"},"Enter":{"lower":"Enter","upper":"Enter","shift":"Enter","shiftCaps":"Enter"},"ShiftLeft":{"lower":"Shift","upper":"Shift","shift":"Shift","shiftCaps":"Shift"},"KeyZ":{"lower":"z","upper":"Z","shift":"Z","shiftCaps":"z"},"KeyX":{"lower":"x","upper":"X","shift":"X","shiftCaps":"x"},"KeyC":{"lower":"c","upper":"C","shift":"C","shiftCaps":"c"},"KeyV":{"lower":"v","upper":"V","shift":"V","shiftCaps":"v"},"KeyB":{"lower":"b","upper":"B","shift":"B","shiftCaps":"b"},"KeyN":{"lower":"n","upper":"N","shift":"N","shiftCaps":"n"},"KeyM":{"lower":"m","upper":"M","shift":"M","shiftCaps":"m"},"Comma":{"lower":",","upper":"<","shift":"<","shiftCaps":","},"Period":{"lower":".","upper":">","shift":">","shiftCaps":"."},"Slash":{"lower":"/","upper":"?","shift":"?","shiftCaps":"/"},"ArrowUp":{"lower":"⬆","upper":"⬆","shift":"⬆","shiftCaps":"⬆"},"ShiftRight":{"lower":"Shift","upper":"Shift","shift":"Shift","shiftCaps":"Shift"},"ControlLeft":{"lower":"Ctrl","upper":"Ctrl","shift":"Ctrl","shiftCaps":"Ctrl"},"MetaLeft":{"lower":"Win","upper":"Win","shift":"Win","shiftCaps":"Win"},"AltLeft":{"lower":"Alt","upper":"Alt","shift":"Alt","shiftCaps":"Alt"},"Space":{"lower":"Space","upper":"Space","shift":"Space","shiftCaps":"Space"},"AltRight":{"lower":"Alt","upper":"Alt","shift":"Alt","shiftCaps":"Alt"},"ArrowLeft":{"lower":"⬅","upper":"⬅","shift":"⬅","shiftCaps":"⬅"},"ArrowDown":{"lower":"⬇","upper":"⬇","shift":"⬇","shiftCaps":"⬇"},"ArrowRight":{"lower":"➡","upper":"➡","shift":"➡","shiftCaps":"➡"},"ControlRight":{"lower":"Ctrl","upper":"Ctrl","shift":"Ctrl","shiftCaps":"Ctrl"}};
const RUS_MAP = {"Backquote":{"lower":"ё","upper":"Ё","shift":"Ё","shiftCaps":"ё"},"Digit1":{"lower":"1","upper":"1","shift":"!","shiftCaps":"!"},"Digit2":{"lower":"2","upper":"2","shift":"\"","shiftCaps":"@"},"Digit3":{"lower":"3","upper":"3","shift":"№","shiftCaps":"#"},"Digit4":{"lower":"4","upper":"4","shift":";","shiftCaps":"$"},"Digit5":{"lower":"5","upper":"5","shift":"%","shiftCaps":"%"},"Digit6":{"lower":"6","upper":"6","shift":":","shiftCaps":"^"},"Digit7":{"lower":"7","upper":"7","shift":"?","shiftCaps":"&"},"Digit8":{"lower":"8","upper":"8","shift":"*","shiftCaps":"*"},"Digit9":{"lower":"9","upper":"9","shift":"(","shiftCaps":"("},"Digit0":{"lower":"0","upper":"0","shift":")","shiftCaps":")"},"Minus":{"lower":"-","upper":"-","shift":"_","shiftCaps":"_"},"Equal":{"lower":"=","upper":"=","shift":"+","shiftCaps":"+"},"Backspace":{"lower":"Backspace","upper":"Backspace","shift":"Backspace","shiftCaps":"Backspace"},"Tab":{"lower":"Tab","upper":"Tab","shift":"Tab","shiftCaps":"Tab"},"KeyQ":{"lower":"й","upper":"Й","shift":"Й","shiftCaps":"й"},"KeyW":{"lower":"ц","upper":"Ц","shift":"Ц","shiftCaps":"ц"},"KeyE":{"lower":"у","upper":"У","shift":"У","shiftCaps":"у"},"KeyR":{"lower":"к","upper":"К","shift":"К","shiftCaps":"к"},"KeyT":{"lower":"е","upper":"Е","shift":"Е","shiftCaps":"е"},"KeyY":{"lower":"н","upper":"Н","shift":"Н","shiftCaps":"н"},"KeyU":{"lower":"г","upper":"Г","shift":"Г","shiftCaps":"г"},"KeyI":{"lower":"ш","upper":"Ш","shift":"Ш","shiftCaps":"ш"},"KeyO":{"lower":"щ","upper":"Щ","shift":"Щ","shiftCaps":"щ"},"KeyP":{"lower":"з","upper":"З","shift":"З","shiftCaps":"з"},"BracketLeft":{"lower":"х","upper":"Х","shift":"Х","shiftCaps":"х"},"BracketRight":{"lower":"ъ","upper":"Ъ","shift":"Ъ","shiftCaps":"ъ"},"Backslash":{"lower":"\\","upper":"/","shift":"/","shiftCaps":"\\"},"Delete":{"lower":"Del","upper":"Del","shift":"Del","shiftCaps":"Del"},"CapsLock":{"lower":"Caps Lock","upper":"Caps Lock","shift":"Caps Lock","shiftCaps":"Caps Lock"},"KeyA":{"lower":"ф","upper":"Ф","shift":"Ф","shiftCaps":"ф"},"KeyS":{"lower":"ы","upper":"Ы","shift":"Ы","shiftCaps":"ы"},"KeyD":{"lower":"в","upper":"В","shift":"В","shiftCaps":"в"},"KeyF":{"lower":"а","upper":"А","shift":"А","shiftCaps":"а"},"KeyG":{"lower":"п","upper":"П","shift":"П","shiftCaps":"п"},"KeyH":{"lower":"р","upper":"Р","shift":"Р","shiftCaps":"р"},"KeyJ":{"lower":"о","upper":"О","shift":"О","shiftCaps":"о"},"KeyK":{"lower":"л","upper":"Л","shift":"Л","shiftCaps":"л"},"KeyL":{"lower":"д","upper":"Д","shift":"Д","shiftCaps":"д"},"Semicolon":{"lower":"ж","upper":"Ж","shift":"Ж","shiftCaps":"ж"},"Quote":{"lower":"э","upper":"Э","shift":"Э","shiftCaps":"э"},"Enter":{"lower":"Enter","upper":"Enter","shift":"Enter","shiftCaps":"Enter"},"ShiftLeft":{"lower":"Shift","upper":"Shift","shift":"Shift","shiftCaps":"Shift"},"KeyZ":{"lower":"я","upper":"Я","shift":"Я","shiftCaps":"я"},"KeyX":{"lower":"ч","upper":"Ч","shift":"Ч","shiftCaps":"ч"},"KeyC":{"lower":"с","upper":"С","shift":"С","shiftCaps":"с"},"KeyV":{"lower":"м","upper":"М","shift":"М","shiftCaps":"м"},"KeyB":{"lower":"и","upper":"И","shift":"И","shiftCaps":"и"},"KeyN":{"lower":"т","upper":"Т","shift":"Т","shiftCaps":"т"},"KeyM":{"lower":"ь","upper":"Ь","shift":"Ь","shiftCaps":"ь"},"Comma":{"lower":"б","upper":"Б","shift":"Б","shiftCaps":"б"},"Period":{"lower":"ю","upper":"Ю","shift":"Ю","shiftCaps":"ю"},"Slash":{"lower":"/","upper":"/","shift":"/","shiftCaps":"/"},"ArrowUp":{"lower":"⬆","upper":"⬆","shift":"⬆","shiftCaps":"⬆"},"ShiftRight":{"lower":"Shift","upper":"Shift","shift":"Shift","shiftCaps":"Shift"},"ControlLeft":{"lower":"Ctrl","upper":"Ctrl","shift":"Ctrl","shiftCaps":"Ctrl"},"MetaLeft":{"lower":"Win","upper":"Win","shift":"Win","shiftCaps":"Win"},"AltLeft":{"lower":"Alt","upper":"Alt","shift":"Alt","shiftCaps":"Alt"},"Space":{"lower":"Space","upper":"Space","shift":"Space","shiftCaps":"Space"},"AltRight":{"lower":"Alt","upper":"Alt","shift":"Alt","shiftCaps":"Alt"},"ArrowLeft":{"lower":"⬅","upper":"⬅","shift":"⬅","shiftCaps":"⬅"},"ArrowDown":{"lower":"⬇","upper":"⬇","shift":"⬇","shiftCaps":"⬇"},"ArrowRight":{"lower":"➡","upper":"➡","shift":"➡","shiftCaps":"➡"},"ControlRight":{"lower":"Ctrl","upper":"Ctrl","shift":"Ctrl","shiftCaps":"Ctrl"}};

class Element {
    constructor(parentNode, tagName = 'div', content = null, className = null) {
        const element = document.createElement(tagName);
        element.textContent = content;
        if (Array.isArray(className)) {
          className.filter(nonEmptyClass => nonEmptyClass !== '').forEach(classApplied => element.classList.add(classApplied));
        } else {
          element.className = className;
        }
        parentNode.appendChild(element);
        this.node = element;
    }
}

function switchKeyClass(key) {
  let appliedClass = '';
  const classPrefix = 'button'
  switch (key) {
    case 'Backspace':
    case 'CapsLock':
    case 'ShiftLeft':
      appliedClass = `${classPrefix}--md-size`;
      break;
    case 'Tab':
      appliedClass = `${classPrefix}--tab`;
    break;
    case 'Delete':
      appliedClass = `${classPrefix}--del`;
    break;
    case 'Space':
      appliedClass = `${classPrefix}--lg-size`;
      break;
    case 'ShiftRight':
    case 'Enter':
      appliedClass = `${classPrefix}--w-86`;
    break;
    default:
      appliedClass = '';
    break;
  }

  return appliedClass;
}

function load() {
    const LANG = 'en';
    const keyMap = LANG === 'en' ? ENG_MAP : RUS_MAP;
    const container = new Element(document.body, 'div', '', 'container');

    const textArea = new Element(container.node, 'textarea', '', 'textarea');

    KEYBOARD.forEach(row => {
        const rowContainer = new Element(container.node, 'div', '', 'row');
        row.forEach(key => {
            const textContent = keyMap[key].lower;
            const keyboardButton = new Element(rowContainer.node, 'button', textContent, ['button', switchKeyClass(key)]);
        })
    })
}

load();