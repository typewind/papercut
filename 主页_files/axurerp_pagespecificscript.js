for(var i = 0; i < 43; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u6').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u6'); });
else {
    document.getElementById('u6').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u6'); }, true);
    document.getElementById('u6').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u6'); }, true);
}

widgetIdToDragFunction['u6'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u6',widgetDragInfo.xDelta,0,'linear',1);

}

}

widgetIdToDragDropFunction['u6'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u31'), GetWidgetRectangles('u7'))) {

	MoveWidgetToLocationBeforeDrag('u13','linear',200);

}

}
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u16'] = 'top';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('剪纸设计.html');

}
});
gv_vAlignTable['u28'] = 'top';document.getElementById('u29_img').tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('剪纸制作.html');

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u15'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u10'] = 'top';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('剪纸特效生成.html');

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u9'] = 'center';document.getElementById('u35_img').tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('我的剪纸库.html');

}
});
gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u42'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('剪纸社区.html');

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u34'] = 'center';