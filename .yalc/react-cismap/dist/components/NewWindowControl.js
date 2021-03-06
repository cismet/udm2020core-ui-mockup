var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from "prop-types";
import "leaflet-easybutton";
import "leaflet-easybutton/src/easy-button.css";
import "./EasyButtonOverrides.css";

// const NewWindowControl = ({url}) => {

//     return (
//         <Control position="topleft" >
//             <Button  onClick={()=>{console.log("OPEN")}}><Icon name="expand"/></Button>
//         </Control>
//     );
// }

// import PropTypes from 'prop-types';
import { MapControl } from "react-leaflet";
import L from "leaflet";

var NewWindowControl = function (_MapControl) {
  _inherits(NewWindowControl, _MapControl);

  function NewWindowControl() {
    _classCallCheck(this, NewWindowControl);

    return _possibleConstructorReturn(this, (NewWindowControl.__proto__ || Object.getPrototypeOf(NewWindowControl)).apply(this, arguments));
  }

  _createClass(NewWindowControl, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      this.leafletElement = L.easyButton("fa-external-link-square", function (btn, map) {
        window.open(document.location.origin + "/#" + that.props.routing.location.pathname + that.props.routing.location.search);
      }, this.props.title, {
        position: this.props.position
      });
    }
  }]);

  return NewWindowControl;
}(MapControl);

NewWindowControl.propTypes = {
  position: PropTypes.string,
  title: PropTypes.string,
  routing: PropTypes.object
};

export default NewWindowControl;