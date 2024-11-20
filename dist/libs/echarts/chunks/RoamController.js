import{_ as e,Y as o,$ as n,bh as i,cy as t,cb as s,cz as r,J as a}from"./index.js";import{i as l}from"./interactionMutex.js";function h(e,o,n,i,t){e.pointerChecker&&e.pointerChecker(i,t.originX,t.originY)&&(s(i.event),u(e,o,n,i,t))}function u(e,n,i,t,s){s.isAvailableBehavior=o(p,null,i,t),e.trigger(n,s)}function p(e,o,n){var i=n[e];return!e||i&&(!a(i)||o.event[i+"Key"])}var f=function(r){function a(e){var t=r.call(this)||this;t._zr=e;var s=o(t._mousedownHandler,t),a=o(t._mousemoveHandler,t),l=o(t._mouseupHandler,t),h=o(t._mousewheelHandler,t),u=o(t._pinchHandler,t);return t.enable=function(o,t){this.disable(),this._opt=n(i(t)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==o&&(o=!0),!0!==o&&"move"!==o&&"pan"!==o||(e.on("mousedown",s),e.on("mousemove",a),e.on("mouseup",l)),!0!==o&&"scale"!==o&&"zoom"!==o||(e.on("mousewheel",h),e.on("pinch",u))},t.disable=function(){e.off("mousedown",s),e.off("mousemove",a),e.off("mouseup",l),e.off("mousewheel",h),e.off("pinch",u)},t}return e(a,r),a.prototype.isDragging=function(){return this._dragging},a.prototype.isPinching=function(){return this._pinching},a.prototype.setPointerChecker=function(e){this.pointerChecker=e},a.prototype.dispose=function(){this.disable()},a.prototype._mousedownHandler=function(e){if(!t(e)){for(var o=e.target;o;){if(o.draggable)return;o=o.__hostTarget||o.parent}var n=e.offsetX,i=e.offsetY;this.pointerChecker&&this.pointerChecker(e,n,i)&&(this._x=n,this._y=i,this._dragging=!0)}},a.prototype._mousemoveHandler=function(e){if(this._dragging&&p("moveOnMouseMove",e,this._opt)&&"pinch"!==e.gestureEvent&&!l(this._zr,"globalPan")){var o=e.offsetX,n=e.offsetY,i=this._x,t=this._y,r=o-i,a=n-t;this._x=o,this._y=n,this._opt.preventDefaultMouseMove&&s(e.event),u(this,"pan","moveOnMouseMove",e,{dx:r,dy:a,oldX:i,oldY:t,newX:o,newY:n,isAvailableBehavior:null})}},a.prototype._mouseupHandler=function(e){t(e)||(this._dragging=!1)},a.prototype._mousewheelHandler=function(e){var o=p("zoomOnMouseWheel",e,this._opt),n=p("moveOnMouseWheel",e,this._opt),i=e.wheelDelta,t=Math.abs(i),s=e.offsetX,r=e.offsetY;if(0!==i&&(o||n)){if(o){var a=t>3?1.4:t>1?1.2:1.1;h(this,"zoom","zoomOnMouseWheel",e,{scale:i>0?a:1/a,originX:s,originY:r,isAvailableBehavior:null})}if(n){var l=Math.abs(i);h(this,"scrollMove","moveOnMouseWheel",e,{scrollDelta:(i>0?1:-1)*(l>3?.4:l>1?.15:.05),originX:s,originY:r,isAvailableBehavior:null})}}},a.prototype._pinchHandler=function(e){l(this._zr,"globalPan")||h(this,"zoom",null,e,{scale:e.pinchScale>1?1.1:1/1.1,originX:e.pinchX,originY:e.pinchY,isAvailableBehavior:null})},a}(r);export{f as R};
